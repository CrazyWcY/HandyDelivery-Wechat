import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import DeliveryTask from './deliveryTask/deliveryTask'

const pool = new Array(10).fill(<DeliveryTask />)

const DeliveryTaskPool = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    wx.request({
      url: 'http://127.0.0.1:5000/getDeliveryTasks',
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

  return (
    <View>
      {
        tasks.map(task => <View><DeliveryTask task={task}/></View>)
      }
    </View>
  )
}

export default DeliveryTaskPool