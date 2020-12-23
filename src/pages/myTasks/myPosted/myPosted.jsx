import React, { useEffect, useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"
import { MyPostedPurchasingTaskCard } from '../../../components/TaskCard'
import SERVICE_URL from '../../../service/service'

const MyPosted = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    wx.request({
      url: SERVICE_URL + '/getPostedTask?id=root',
      method: 'get',
      success: function (res) {
        console.log(res)
        setTasks(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  useDidShow(() => {
    wx.request({
      url: SERVICE_URL + '/getPostedTask?id=root',
      method: 'get',
      success: function (res) {
        console.log(res)
        setTasks(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  })

  const handleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/myTasks/myPosted/myPostedItem?id=' + id
    })
  }

  return (
    <View>
      {
        tasks.map(task => <View onClick={() => handleClick(task.id)} style={{marginBottom: '2%'}}><MyPostedPurchasingTaskCard task={task} /></View>)
      }
    </View>
  )
}

export default MyPosted