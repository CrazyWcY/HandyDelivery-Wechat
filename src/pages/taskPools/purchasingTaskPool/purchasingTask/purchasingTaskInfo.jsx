import { View, Text, ScrollView, Map, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtFab, AtListItem, AtButton, AtCard, AtAvatar, AtDivider } from "taro-ui"
import { getCurrentInstance } from '@tarojs/taro'
import SERVICE_URL from '../../../../service/service'

const PurchasingTaskInfo = () => {
  const CSS = {
    head: {
      backgroundColor: '#64AB99',
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
      boxShadow: '3px 2px 16px 1px grey'
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

  const [task, setTask] = useState(null)

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

  const goToUserInfo = id => {
    Taro.navigateTo({
      url: '/pages/personalInfo/personalInfo?id=' + id
    })
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

  const receiveTask = (task) => {
    if (task.author.id === 'root') {
      wx.showToast({
        title: '操作失败：不能接受自己发布的任务',
        icon: 'none',
        duration: 3000
      })
      return
    }
    else {
      wx.request({
        url: SERVICE_URL + '/receivePurchasingTask?id=' + task.id + '&user=root',
        method: 'get',
        success: function(res) {
          wx.showToast({
            title: '操作成功',
            icon: 'success', 
            duration: 2000
          })
          console.log(res)
          setTimeout(()=> {
            wx.switchTab({url: '/pages/taskPools/taskPools'})
          }, 2000)
        },
        fail: function(res) {
          console.log('error')
        }
      })
    }
  }


  return (
    <ScrollView>
      {
        task ? <View>
          <View style={CSS.head}>
            <View style={CSS.title} className='at-row at-row__justify--center'>{task.p_title}</View>
            <View className='at-row at-row__justify--center' onClick={() => goToUserInfo(task.author.id)}>
              <View style={CSS.userBar} className='at-row'>
                <View style={CSS.avatar} className='at-row'>
                  <AtAvatar circle image={task.author.avatar}></AtAvatar>
                  <View style={{ marginLeft: '5%' }}>
                    <View style={CSS.userName}>{task.author.name}</View>
                    <View style={CSS.userInfo}>{task.author.signature}</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
                <View style={CSS.infoItem}>RMB {task.money}</View>
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

          <View style={{ position: 'fixed', bottom: '30px', left: '42%' }} onClick={() => receiveTask(task)}>
            <AtFab>
              <Text className='at-fab__icon at-icon at-icon-check'></Text>
            </AtFab>
          </View>
        </View> : null
      }
    </ScrollView>
  )
}

export default PurchasingTaskInfo