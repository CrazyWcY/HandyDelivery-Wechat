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

const MessageCard = (props) => {

  const user = props.user

  let [data, setData] = useState({
    name: user.name,
    avatar: user.avatar,
    text: user.signature,
    time: '下午3:24',
    hint: 2,
  })

  const goToChat = (id) => {
    Taro.navigateTo({
      url: '/pages/chat/chat?id=' + id
    })
  }

  return (
    <View className="chatCard" onClick={() => goToChat(user.id)}>
      <BoxCard data={data}></BoxCard>
    </View>
  )
}

export default MessageCard