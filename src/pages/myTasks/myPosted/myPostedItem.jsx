import { View, Text, ScrollView, Map, Image, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { AtFab, AtTag, AtButton, AtAvatar, AtSegmentedControl, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput, AtRate, AtDivider } from "taro-ui"
import { taskStatus } from '../../../service/status'
import { getCurrentInstance } from '@tarojs/taro'
import StarBar from '../../../components/StarBar'
import Result from '../../../components/Result'
import SERVICE_URL from '../../../service/service'

const goToUserInfo = id => {
  Taro.navigateTo({
    url: '/pages/personalInfo/personalInfo?id=' + id
  })
}

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
      {
        task.status === 6 ?
          <View style={{ marginLeft: '3%', marginRight: '3%' }}>
            <StarBar star={Number(task.appraise)} type={'总体评价'} />
          </View> : null
      }
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
          <Result icon='alert-circle' message='待接受，暂无采购信息。' />
          :
          <View>
            {
              task.status === 6 ?
                <View style={{ marginLeft: '3%', marginRight: '3%' }}>
                  <StarBar star={Number(task.p_appraise)} type={'采购者评价'} />
                </View>
                : null
            }
            <View className='at-row at-row__justify--center'>
              <View style={CSS.userBar} onClick={() => goToUserInfo(task.puchaser.id)} className='at-row'>
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

  const [polyLines, setPolyLines] = useState(null)  // polyLines[0].coors_new 记录所有经纬坐标点
  const [currLoc, setCurrLoc] = useState([{
    id: 0,
    longitude: task.status < 3 ? 121.513646 : task.d_current_location.longitude,
    latitude: task.status < 3 ? 31.341285 : task.d_current_location.latitude,
    width: 20,
    height: 20
  }])

  useEffect(() => {
    if (task.status >= 3) {
      const QQMapWX = require('../../../libs/qqmap-wx-jssdk')
      const qqmapsdk = new QQMapWX({
        key: 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'
      })
      qqmapsdk.direction({
        from: task.p_send_location.latitude + ',' + task.p_send_location.longitude,
        to: task.d_destination.latitude + ',' + task.d_destination.longitude,
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
          let count = 0
          const timer = setInterval(() => {
            setCurrLoc([
              {
                id: 0,
                latitude: coors_new[count].latitude,
                longitude: coors_new[count].longitude,
                width: 10,
                height: 10
              }
            ])
            count++
            if (count > coors_new.length) {
              return () => clearInterval(timer)
            }
          }, 100)
        }
      })
    }

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
        task.status < 3 ?
          <Result icon='alert-circle' message='待接受，暂无配送信息。' />
          :
          <View>
            {
              task.status === 6 ?
                <View style={{ marginLeft: '3%', marginRight: '3%' }}>
                  <StarBar star={Number(task.d_appraise)} type={'配送者评价'} />
                </View>
                : null
            }
            <View className='at-row at-row__justify--center'>
              <View style={CSS.userBar} onClick={() => goToUserInfo(task.deliver.id)} className='at-row'>
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
                <View style={CSS.infoItem}>{Number(task.status) < 4 ? '配送中' : '已收货'}</View>
              </View>
              {
                polyLines ?
                  <View className='at-row at-row__justify--between'>
                    <Map longitude={currLoc[0].longitude} latitude={currLoc[0].latitude} scale={16} markers={currLoc} polyline={polyLines} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                  </View> : null
              }
              {
                Number(task.status) < 4 ? <AtButton onClick={
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
                }>更新坐标</AtButton> : null
              }
            </View>
          </View>
      }

    </View >
  )
}

const PayModalContent = (props) => {

  const task = props.task

  const [password, setPassword] = useState('')

  const handlePassword = value => {
    setPassword(value)
    props.changePassword(value)
    return value
  }

  const CSS = {
    itemLine: {
      fontSize: '15px',
      marginBottom: '3%'
    }
  }

  return (
    <View>
      <View style={CSS.itemLine}>采购金额：{task.p_money}元</View>
      <View style={CSS.itemLine}>配送金额：{task.d_money}元</View>
      <View style={CSS.itemLine}>总计：{Number(task.p_money) + Number(task.d_money)}元</View>
      <AtDivider></AtDivider>
      <AtInput
        name='password'
        title='支付密码'
        type='password'
        placeholder='输入支付密码'
        value={password}
        onChange={handlePassword}
      />
    </View>
  )
}

const StarModalContent = (props) => {

  const [star1, setStar1] = useState(0)
  const [star2, setStar2] = useState(0)

  const CSS = {
    itemList: {
      fontSize: '15px',
      marginTop: '3%',
      marginBottom: '3%'
    }
  }
  return (
    <View>
      <View style={CSS.itemList}>评价采购者：</View>
      <View>
        <AtRate
          value={star1}
          onChange={value => { setStar1(value); props.changeStar([value, star2]) }}
        />
      </View>
      <View style={CSS.itemList}>评价配送者：</View>
      <View>
        <AtRate
          value={star2}
          onChange={value => { setStar2(value); props.changeStar([star1, value]) }}
        />
      </View>
    </View>
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
  const [modalVisiable, setModalVisiable] = useState(false)
  const [password, setPassword] = useState('')
  const [star, setStar] = useState([0, 0])

  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    wx.request({
      url: SERVICE_URL + '/getTask?id=' + id,
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

  const confirmPayment = () => {
    console.log('pwd:', password)
    if (password === '111111') {
      setModalVisiable(false)
      wx.request({
        url: SERVICE_URL + '/finishPayment?id=' + task.id,
        method: 'get',
        success: function (res) {
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(() => {
            wx.switchTab({ url: '/pages/myTasks/myTasks' })
          }, 2000)
        },
        fail: function (res) {
          console.log('error')
        }
      })
    }
    else {
      wx.showToast({
        title: '支付失败：密码错误',
        icon: 'none',
        duration: 2000
      })
    }
  }

  const confirmStar = () => {
    console.log(star)
    wx.request({
      url: SERVICE_URL + '/finishStar?id=' + task.id + '&pstar=' + star[0] + '&dstar=' + star[1],
      method: 'get',
      success: function (res) {
        wx.showToast({
          title: '评价成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(() => {
          wx.switchTab({ url: '/pages/myTasks/myTasks' })
        }, 2000)
      },
      fail: function (res) {
        console.log('error')
      }
    })



    setModalVisiable(false)
  }

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
            <AtModal isOpened={modalVisiable}>
              <AtModalHeader>{Number(task.status) === 4 ? '支付' : '评价'}</AtModalHeader>
              <AtModalContent>
                {
                  Number(task.status) === 4 ? <PayModalContent task={task} changePassword={setPassword} /> : <StarModalContent task={task} changeStar={setStar} />
                }

              </AtModalContent>
              <AtModalAction> <Button onClick={() => setModalVisiable(false)}>取消</Button> <Button onClick={Number(task.status) === 4 ? confirmPayment : confirmStar}>确定</Button> </AtModalAction>
            </AtModal>
            {
              Number(task.status) === 4 ?
                <View style={{ position: 'fixed', bottom: '30px', left: '42%' }} onClick={() => setModalVisiable(true)}>
                  <AtFab>
                    <Text className='at-fab__icon at-icon at-icon-credit-card'></Text>
                  </AtFab>
                </View> : null
            }
            {
              Number(task.status) === 5 ?
                <View style={{ position: 'fixed', bottom: '30px', left: '42%' }} onClick={() => setModalVisiable(true)}>
                  <AtFab>
                    <Text className='at-fab__icon at-icon at-icon-star'></Text>
                  </AtFab>
                </View> : null
            }
          </View> : null
      }
    </ScrollView>
  )
}

export default MyPostedItem