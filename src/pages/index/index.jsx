import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton, AtAvatar, AtDivider } from 'taro-ui'

const Index = () => {

  const [user, setUser] = useState(null)

  const handleWXGetUserInfo = e => {
    console.log(e.detail)
    setUser(e.detail.userInfo)

    Taro.navigateTo({
      url: '/pages/taskPools/taskPools'
    }).catch((error) => {
      console.log(error)
      /* 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
      wx.switchTab({ url: '/pages/taskPools/taskPools' })
    })

  }
  const CSS = {
    title: {
      color: '#64AB99',
      fontSize: '25px',
      fontWeight: 'bold',
      height: '300px',
      lineHeight: '300px',
      //marginLeft: '13%',
      textAlign: 'center'
    },
    card: {
      width: '90%',
      margin: '0 auto',
      borderRadius: '20px',
      backgroundColor: '#DEF0F2'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '400',
      padding: '3%'
    },
    cardLine: {
      fontSize: '15px',
      padding: '3%'
    },
    button: {
      width: '90%',
      margin: '0 auto',
      marginTop: '15%'
    },
    footer: {
      fontSize: '13px',
      color: '#BEBEBE',
      textAlign: 'center'
    }
  }

  return (
    <View className='index'>
      <View className='at-row at-row__justify--center'>
        <View style={CSS.title} className='at-col'>HandyDelivery 随手递</View>
      </View>
      <View style={CSS.card}>
        <View style={CSS.cardTitle}>应用将申请以下权限：</View>
        <View style={CSS.cardLine}>· 用户信息</View>
        <View style={CSS.cardLine}>· 位置信息</View>
      </View>
      <View style={CSS.button}>
        <AtButton type='primary' openType='getUserInfo' onGetUserInfo={handleWXGetUserInfo} >确认授权并登录</AtButton>
      </View>
      <AtDivider />
      <View>
        <View style={CSS.footer}><Text>Designed by Chongyu Wang, Jiahong Hu and Xiaorui Liu</Text></View>
        <View style={CSS.footer}><Text>2020© SJTU</Text></View>
      </View>
    </View>
  )
}

export default Index