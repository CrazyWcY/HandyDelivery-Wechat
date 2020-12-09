import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtButton, AtAvatar } from 'taro-ui'

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
      wx.switchTab({url: '/pages/taskPools/taskPools'})
    })
    
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary' openType='getUserInfo' onGetUserInfo={handleWXGetUserInfo} >微信授权登录</AtButton>
    </View>
  )
}

export default Index