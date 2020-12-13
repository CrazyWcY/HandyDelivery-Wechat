import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtAvatar } from 'taro-ui'
import './boxCard.scss'

const BoxCard = (props) => {
  const data = props.data
  return (
    <View className="boxcard-c">
      <View className="boxcard-l">
        <AtAvatar circle size="18" image={data.avatar}></AtAvatar>
      </View>
      <View className="boxcard-r">
        <View className="boxcard-n">{data.name}</View>
        <View className="boxcard-v">{data.text}</View>
      </View>
      {/* <View className="boxcard-t">
        {children}
      </View> */}
    </View>
  )
}

const MessageCard = () => {
  let [data, setData] = useState({
    name: '王博yyds',
    avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
    text: '王博yyds，大家都知道',
    time: '下午3:24',
    hint: 2,
  })

  const goToChat = () => {
    Taro.navigateTo({
      url: '/pages/chat/chat'
    })
  }

  return (
    <View className="chatCard" onClick={goToChat}>
      <BoxCard data={data}></BoxCard>
    </View>
  )
}

export default MessageCard