import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import MessageCard from './messageCard/messageCard'

const messageList = new Array(10).fill(<MessageCard/>)

const Message = () => {
  return (
    <View>
      {
        messageList
      }
    </View>
  )
}

export default Message