import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PurchasingTaskCard } from '../../components/TaskCard'
import Result from '../../components/Result'
import { AtButton } from "taro-ui"
import SERVICE_URL from '../../service/service'

const MyInfo = () => {

  const reset = () => {
    wx.request({
      url: SERVICE_URL + '/reload',
      method: 'get',
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '重置成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }

  return(
    <View>
      <Result icon='alert-circle' message='暂无信息' />
      <AtButton onClick={reset}>重置数据</AtButton>
    </View>
  )
}

export default MyInfo