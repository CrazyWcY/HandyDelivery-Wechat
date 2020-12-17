import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtAvatar, AtIcon } from 'taro-ui'
import './personalInfo.scss'
import { getCurrentInstance } from '@tarojs/taro'

const PersonalInfo = () => {
  let [user, setUser] = useState({
    name: 'IST之光',
    avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
    signature: '王博yyds，大家都知道',
    address: '软件学院 | IST',
    receiveNum: 124,
    sendNum: 512
  })

  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    wx.request({
      url: 'http://127.0.0.1:5000/getUserById?id=' + id,
      method: 'get',
      success: function (res) {
        console.log(res)
        setUser(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])


  const goToChat = () => {
    Taro.navigateTo({
      url: '/pages/chat/chat'
    })
  }

  return (
    <View>
      <View className="upper-info">
        <AtAvatar size="large" circle image={user.avatar}></AtAvatar>
        <View className="upper-name">{user.name}</View>
        <View className="upper-school">{user.school}</View>
        <View className="orders">
          <text>接单</text>
          <View className="num">{user.receiveNum}</View>
          <text>发单</text>
          <View className="num">{user.sendNum}</View>
        </View>
      </View>
      <View className="lower">
        <View className="middle-box">
          <View className="title">
            <View className='at-icon at-icon-user'></View>
            <View className="title-text">个性签名</View>
          </View>
          <View className="content">
            <View>{user.signature}</View>
          </View>
        </View>
      </View>

      <View className="footer">
        <View onClick={goToChat}>打招呼</View>
        <View>+关注</View>
      </View>
    </View>
  )
}

export default PersonalInfo