import { View, Text, ScrollView, Map, Image } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtFab, AtTag, AtButton, AtAvatar, AtSegmentedControl } from "taro-ui"
import { taskStatus } from '../../../service/status'
import { getCurrentInstance } from '@tarojs/taro'

const UnreceivedInfo = (props) => {

  const task = props.task

  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
    },
    title: {
      color: 'white',
      fontSize: '20px',
      paddingTop: '3%',
      fontWeight: 'bold'
    },
    userBar: {
      width: '90%',
      backgroundColor: 'white',
      marginTop: '5%',
      marginBottom: '5%',
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
    },
    userName: {
      fontSize: '15px',
      fontWeight: 'bold'
    },
    userInfo: {
      fontSize: '10px',
      paddingTop: '15%'
    },
    avatar: {
      paddingTop: '3%',
      paddingBottom: '3%',
      paddingLeft: '3%',
      paddingRight: '3%'
    },
    infoCard: {
      backgroundColor: '#DEF0F2',
      margin: '3% 3%',
      borderRadius: '20px'
    },
    infoList: {
      padding: '3% 3%',
      width: '90%'
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '12px'
    },
    infoItem: {
      color: 'grey',
      fontSize: '12px'
    },
    detailsArea: {
      margin: '5% 5% 15% 5%'
    },
    timeArea: {
      margin: '5% 5%'
    },
    timeLine: {
      fontSize: '12px',
      color: 'grey',
      marginTop: '3%'
    },
    divider: {
      height: '5px',
      width: '80%',
      margin: 'auto',
      borderBottom: 'solid 1px grey'
    },
    imageLine: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1%'
    }
  }

  const getMarkers = task => {
    const markers = [
      {
        id: 0,
        longitude: task.p_destination.longitude,
        latitude: task.p_destination.latitude,
        width: 20,
        height: 20,
        label: {
          content: '期望采购地点:' + task.p_destination.name,
          color: '#22ac38',
          fontSize: 14,
          bgColor: "#fff",
          borderRadius: 10,
          borderColor: "#22ac38",
          borderWidth: 1,
          padding: 3
        }
      },
      {
        id: 1,
        longitude: task.d_destination.longitude,
        latitude: task.d_destination.latitude,
        width: 20,
        height: 20,
        label: {
          content: '取件地点:' + task.d_destination.name,
          color: '#22ac38',
          fontSize: 14,
          bgColor: "#fff",
          borderRadius: 10,
          borderColor: "#22ac38",
          borderWidth: 1,
          padding: 3
        }
      },
    ]
    return markers
  }

  return (
    <View>
      <View style={CSS.infoCard}>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>货品名称</View>
          <View style={CSS.infoItem}>{task.good}</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>期望采购地点</View>
          <View style={CSS.infoItem}>{task.p_destination.name}</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>预计薪酬</View>
          <View style={CSS.infoItem}>{task.money}</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>期望交付日期</View>
          <View style={CSS.infoItem}>{task.deadline}</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>取件地址</View>
          <View style={CSS.infoItem}>{task.d_destination.name}</View>
        </View>
        <View className='at-row at-row__justify--between'>
          <Map longitude={Number(task.p_destination.longitude)} latitude={Number(task.p_destination.latitude)} markers={getMarkers(task)} scale={16} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        </View>
      </View>
      <View style={CSS.detailsArea}>
        <View>{task.details}</View>
      </View>
      <View>
        {
          task.good_pictures.map(item => (
            <View style={CSS.imageLine}>
              <Image
                style='width: 320px; height: 180 px; background: #fff;'
                src={item}
              />
            </View>
          ))
        }
      </View>
      <View style={CSS.divider}>
      </View>
      <View style={CSS.timeArea}>
        <View style={CSS.timeLine}>发布于 {task.time}</View>
      </View>
    </View>
  )
}

const PurchasingInfo = (props) => {

  const task = props.task

  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
    },
    title: {
      color: 'white',
      fontSize: '20px',
      paddingTop: '3%',
      fontWeight: 'bold'
    },
    userBar: {
      width: '90%',
      backgroundColor: 'white',
      marginTop: '5%',
      marginBottom: '5%',
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
    },
    userName: {
      fontSize: '15px',
      fontWeight: 'bold'
    },
    userInfo: {
      fontSize: '10px',
      paddingTop: '15%'
    },
    avatar: {
      paddingTop: '3%',
      paddingBottom: '3%',
      paddingLeft: '3%',
      paddingRight: '3%'
    },
    infoCard: {
      backgroundColor: '#DEF0F2',
      margin: '3% 3%',
      borderRadius: '20px'
    },
    infoList: {
      padding: '3% 3%',
      width: '90%'
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '12px'
    },
    infoItem: {
      color: 'grey',
      fontSize: '12px'
    },
    detailsArea: {
      margin: '5% 5% 15% 5%'
    },
    timeArea: {
      margin: '5% 5%'
    },
    timeLine: {
      fontSize: '12px',
      color: 'grey',
      marginTop: '3%'
    },
    divider: {
      height: '5px',
      width: '80%',
      margin: 'auto',
      borderBottom: 'solid 1px grey'
    }
  }

  const getMarkers = task => {
    const markers = [
      {
        id: 0,
        longitude: task.p_send_location.longitude,
        latitude: task.p_send_location.latitude,
        width: 20,
        height: 20,
        label: {
          content: '寄件地:' + task.p_send_location.name,
          color: '#22ac38',
          fontSize: 14,
          bgColor: "#fff",
          borderRadius: 10,
          borderColor: "#22ac38",
          borderWidth: 1,
          padding: 3
        }
      },
      {
        id: 1,
        longitude: task.d_destination.longitude,
        latitude: task.d_destination.latitude,
        width: 20,
        height: 20,
        label: {
          content: '取件地点:' + task.d_destination.name,
          color: '#22ac38',
          fontSize: 14,
          bgColor: "#fff",
          borderRadius: 10,
          borderColor: "#22ac38",
          borderWidth: 1,
          padding: 3
        }
      },
    ]
    return markers
  }

  return (
    <View>
      {
        task.status < 1 ?
          <View>待接受，暂无配送信息。</View>
          :
          <View>
            <View className='at-row at-row__justify--center'>
              <View style={CSS.userBar} className='at-row'>
                <View style={CSS.avatar} className='at-row'>
                  <AtAvatar circle image={task.puchaser.avatar}></AtAvatar>
                  <View style={{ marginLeft: '5%' }}>
                    <View style={CSS.userName}>{task.puchaser.name}</View>
                    <View style={CSS.userInfo}>{task.puchaser.signature}</View>
                  </View>
                </View>
              </View>
            </View>
            <View style={CSS.infoCard}>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>采购完成时间</View>
                <View style={CSS.infoItem}>{task.p_finish_time}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>实际采购地点</View>
                <View style={CSS.infoItem}>{task.p_location}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>寄件地点</View>
                <View style={CSS.infoItem}>{task.p_send_location.name}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>寄件信息</View>
                <View style={CSS.infoItem}>{task.p_details}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>采购费用</View>
                <View style={CSS.infoItem}>{task.p_money}</View>
              </View>
              <View className='at-row at-row__justify--between'>
                <Map longitude={Number(task.p_send_location.longitude)} latitude={Number(task.p_send_location.latitude)} markers={getMarkers(task)} scale={16} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
              </View>
            </View>
            <View style={CSS.detailsArea}>
              <View>{task.p_details}</View>
            </View>
            <View style={CSS.divider}>
            </View>
            <View style={CSS.timeArea}>
              <View style={CSS.timeLine}>发布于 {task.time}</View>
            </View>
          </View>
      }
    </View>
  )
}

const DeliveryInfo = (props) => {

  const task = props.task

  const [polyLines, setPolyLines] = useState(null)
  const [currLoc, setCurrLoc] = useState([{
    id: 0,
    longitude: 121.513433,
    latitude: 31.341287,
    width: 20,
    height: 20
  }])

  useEffect(() => {
    const QQMapWX = require('../../../libs/qqmap-wx-jssdk')
    const qqmapsdk = new QQMapWX({
      key: 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'
    })
    qqmapsdk.direction({
      from: '31.341285,121.513646',
      to: '31.026339,121.437515',
      success: function (res) {
        console.log(res)
        let coors = res.result.routes[0].polyline
        for (let i = 2; i < coors.length; i++) {
          coors[i] = coors[i - 2] + coors[i] / 1000000
        }
        console.log(coors)
        let coors_new = []
        for (let j = 0; j < coors.length; j++) {
          coors_new.push({
            longitude: parseFloat(coors[j + 1]),
            latitude: parseFloat(coors[j]),
          })
          j++;
        }
        console.log(coors_new)
        setPolyLines(
          [
            {
              points: coors_new,
              color: "#DC143C",
              width: 3
            }
          ]

        )
      }
    })
  }, [])

  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
    },
    title: {
      color: 'white',
      fontSize: '20px',
      paddingTop: '3%',
      fontWeight: 'bold'
    },
    userBar: {
      width: '90%',
      backgroundColor: 'white',
      marginTop: '5%',
      marginBottom: '5%',
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
    },
    userName: {
      fontSize: '15px',
      fontWeight: 'bold'
    },
    userInfo: {
      fontSize: '10px',
      paddingTop: '15%'
    },
    avatar: {
      paddingTop: '3%',
      paddingBottom: '3%',
      paddingLeft: '3%',
      paddingRight: '3%'
    },
    infoCard: {
      backgroundColor: '#DEF0F2',
      margin: '3% 3%',
      borderRadius: '20px'
    },
    infoList: {
      padding: '3% 3%',
      width: '90%'
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '12px'
    },
    infoItem: {
      color: 'grey',
      fontSize: '12px'
    },
    detailsArea: {
      margin: '5% 5% 15% 5%'
    },
    timeArea: {
      margin: '5% 5%'
    },
    timeLine: {
      fontSize: '12px',
      color: 'grey',
      marginTop: '3%'
    },
    divider: {
      height: '5px',
      width: '80%',
      margin: 'auto',
      borderBottom: 'solid 1px grey'
    }
  }

  const markers = [
    {
      id: 0,
      latitude: 31.341285,
      longitude: 121.513646,
      width: 10,
      height: 10,
      anchor: { x: .5, y: 0.8 },
      title: '创意图',
      callout: { content: '创意图地标建筑' }
    }
  ]

  return (
    <View>
      {
        task.status < 2 ?
          <View> 暂无配送信息</View>
          :
          <View>
            <View className='at-row at-row__justify--center'>
              <View style={CSS.userBar} className='at-row'>
                <View style={CSS.avatar} className='at-row'>
                  <AtAvatar circle image={task.deliver.avatar}></AtAvatar>
                  <View style={{ marginLeft: '5%' }}>
                    <View style={CSS.userName}>{task.deliver.name}</View>
                    <View style={CSS.userInfo}>{task.deliver.signature}</View>
                  </View>
                </View>
              </View>
            </View>
            <View style={CSS.infoCard}>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>取件地点</View>
                <View style={CSS.infoItem}>{task.p_send_location.name}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>目的地</View>
                <View style={CSS.infoItem}>{task.d_destination.name}</View>
              </View>
              <View className='at-row at-row__justify--between' style={CSS.infoList}>
                <View style={CSS.infoTitle}>配送状态</View>
                <View style={CSS.infoItem}>配送中</View>
              </View>
              {
                polyLines ?
                  <View className='at-row at-row__justify--between'>
                    <Map longitude={121.513433} latitude={31.341287} scale={16} markers={currLoc} polyline={polyLines} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                  </View> : null
              }
              <AtButton onClick={
                () => {
                  setCurrLoc([
                    {
                      id: 0,
                      latitude: currLoc[0].latitude - 0.00001,
                      longitude: currLoc[0].longitude - 0.00001,
                      width: 10,
                      height: 10
                    }
                  ])
                }
              }>更新坐标</AtButton>
            </View>
          </View>
      }

    </View >
  )
}


const MyPostedItem = () => {

  const CSS = {
    head: {
      backgroundColor: '#64AB99',
      height: '60px'
    },
    title: {
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      marginLeft: '3%'
    },
    tag: {
      marginLeft: '5%'
    }
  }

  const [current, setCurrent] = useState(0)
  const [task, setTask] = useState(0)

  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    wx.request({
      url: 'http://127.0.0.1:5000/getTask?id=' + id,
      method: 'get',
      success: function (res) {
        console.log(res)
        setTask(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  const handleTabChange = v => {
    setCurrent(v)
  }

  const pages = [
    <UnreceivedInfo task={task} />,
    <PurchasingInfo task={task} />,
    <DeliveryInfo task={task} />
  ]

  return (
    <ScrollView>
      {
        task ?
          <View>
            <View style={CSS.head}>
              <View className='at-row at-row__align--center' style={{ paddingTop: '5%' }}>
                <View style={CSS.tag}>
                  <AtTag type='primary' circle>{taskStatus[task.status]}</AtTag>
                </View>
                <View style={CSS.title}>{task.p_title}</View>
              </View>
            </View>
            <View className='at-row at-row__justify--center' style={{ marginTop: '3%', marginBottom: '3%' }}>
              <View style={{ width: '95%' }}>
                <AtSegmentedControl
                  values={['任务信息', '采购信息', '配送信息']}
                  onClick={v => { handleTabChange(v) }}
                  current={current}
                />
              </View>
            </View>
            {
              pages[current]
            }
          </View> : null
      }


    </ScrollView>

  )
}

export default MyPostedItem