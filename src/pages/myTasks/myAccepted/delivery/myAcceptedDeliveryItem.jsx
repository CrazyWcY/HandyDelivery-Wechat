import { View, Text, ScrollView } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtFab, AtListItem, AtButton, AtCard, AtAvatar, AtDivider } from "taro-ui"
import { RouteMap } from '../../../../components/map'
import { getCurrentInstance } from '@tarojs/taro'

const MyAcceptedDeliveryItem = () => {
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

  const handleMap = () => {
    const start = {
      name: '上海交通大学（闵行校区）',
      latitude: '31.031863',
      longitude: '121.443219'
    }

    const end = {
      name: '复旦大学（江湾新校区）',
      latitude: '31.341285',
      longitude: '121.513646'
    }

    const MAP = new RouteMap(start, end)
    MAP.showRoutePlan()
  }

  return (
    <ScrollView>
      {
        task ?
          <View>
            <View style={CSS.head}>
              <View style={CSS.title} className='at-row at-row__justify--center'>{task.title}</View>
              <View className='at-row at-row__justify--center'>
                <View style={CSS.userBar} className='at-row'>
                  <View style={CSS.avatar} className='at-row'>
                    <AtAvatar circle image={task.author.avatar}></AtAvatar>
                    <View style={{ marginLeft: '5%' }}>
                      <View style={CSS.userName}>{task.author.name}</View>
                      <View style={CSS.userInfo}>{task.author.signature}</View>
                    </View>
                  </View>
                </View>
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
            </View>
            <View>
              <View style={CSS.infoCard}>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>货品名称</View>
                  <View style={CSS.infoItem}>{task.good}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>寄送地</View>
                  <View style={CSS.infoItem}>{task.p_send_location.name}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>取件地址</View>
                  <View style={CSS.infoItem}>{task.p_destination.name}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>期望交付日期</View>
                  <View style={CSS.infoItem}>{task.deadline}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>寄送费用</View>
                  <View style={CSS.infoItem}>{task.p_money}</View>
                </View>
              </View>
              <View className='at-row at-row__justify--center'>
                <View className='at-row'>
                  <AtButton type='secondary' onClick={handleMap}>查看路线规划</AtButton>
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

            <AtButton type='primary'>确认完成配送</AtButton>
          </View>
          : null

      }


    </ScrollView>

  )
}

export default MyAcceptedDeliveryItem