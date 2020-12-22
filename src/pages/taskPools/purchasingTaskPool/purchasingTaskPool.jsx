import React, { useEffect, useState } from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PurchasingTask from './purchasingTask/purchasingTask'
import SERVICE_URL from '../../../service/service'

const PurchasingTaskPool = () => {

  const [tasks, setTasks] = useState([])

  let taskCard = {
    marginBottom: '2%'
  }

  
  useEffect(() => {
    wx.request({
      url: 'http://127.0.0.1:5000/getPurchasingTasks',
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
      url: 'http://127.0.0.1:5000/getPurchasingTasks',
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
  

  const pool = new Array(2).fill(<View style={taskCard}><PurchasingTask/></View>)

  return (
    <View>
      {
        tasks.map(task => <View style={taskCard}><PurchasingTask task={task}/></View>)
      }
    </View>
  )
}

export default PurchasingTaskPool