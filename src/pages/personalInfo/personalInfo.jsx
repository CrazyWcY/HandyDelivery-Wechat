import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtAvatar, AtIcon } from 'taro-ui'
import './personalInfo.scss'


const PersonalInfo = () => {
  let [data, setData] = useState({
    name: 'IST之光',
    avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
    text: '王博yyds，大家都知道',
    school: '软件学院 | IST',
    receiveNum: 124,
    sendNum: 512,
    time: '下午3:24',
    hint: 2,
  })


  const goToChat = () => {
    Taro.navigateTo({
      url: '/pages/chat/chat'
    })
  }

  return (
    <View>
      <View className="upper-info">
        <AtAvatar size="large" circle image={data.avatar}></AtAvatar>
        <View className="upper-name">{data.name}</View>
        <View className="upper-school">{data.school}</View>
        <View className="orders">
          <text>接单</text>
          <View className="num">{data.receiveNum}</View>
          <text>发单</text>
          <View className="num">{data.sendNum}</View>
        </View>
      </View>
      <View className="lower">
        <View className="middle-box">
          <View className="title">
            <View className='at-icon at-icon-camera'></View>
            <View className="title-text">TA的相册</View>
          </View>
        </View>
        <View className="middle-box">
          <View className="title">
            <View className='at-icon at-icon-user'></View>
            <View className="title-text">个性签名</View>
          </View>
          <View className="content">
            <View>{data.text}</View>
          </View>
        </View>
        <View className="middle-box">
          <View className="title">
            <View className='at-icon at-icon-user'></View>
            <View className="title-text">个人信息</View>
          </View>
          <View className="content">
            <View>{'IST的传说'}</View>
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