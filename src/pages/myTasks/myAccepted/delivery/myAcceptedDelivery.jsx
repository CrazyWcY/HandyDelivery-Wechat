import React, { useEffect, useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"
import { MyAcceptedDeliveryTaskCard } from '../../../../components/TaskCard'
import SERVICE_URL from '../../../../service/service'

const MyAcceptedDelivery = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    wx.request({
      url: SERVICE_URL + '/getAcceptedDeliveryTask?id=root',
      method: 'get',
      success: function(res) {
        console.log(res)
        setTasks(res.data.data)
      },
      fail: function(res) {
        console.log('error')
      }
    })
  }, [])

  useDidShow(() => {
    wx.request({
      url: SERVICE_URL + '/getAcceptedDeliveryTask?id=root',
      method: 'get',
      success: function(res) {
        console.log(res)
        setTasks(res.data.data)
      },
      fail: function(res) {
        console.log('error')
      }
    })
  })

  const handleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/myTasks/myAccepted/delivery/myAcceptedDeliveryItem?id=' + id
    })
  }

  return (
    <View style={{marginTop: '2%'}}>
      {
        tasks.map(task => <View onClick={() => handleClick(task.id)} style={{marginBottom: '2%'}}><MyAcceptedDeliveryTaskCard task={task} /></View>)
      }
    </View>
  )
}

export default MyAcceptedDelivery