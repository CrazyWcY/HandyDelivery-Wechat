import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import MessageCard from './messageCard/messageCard'
import SERVICE_URL from '../../service/service'

const messageList = new Array(10).fill(<MessageCard />)

const Message = () => {

  const [friends, setFriends] = useState([])

  useEffect(() => {
    wx.request({
      url: SERVICE_URL + '/getFriendsById?id=root',
      method: 'get',
      success: function (res) {
        console.log(res)
        setFriends(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])


  return (
    <View>
      {
        friends.map(item => (
          <MessageCard user={item}/>
        ))
      }
    </View>
  )
}

export default Message