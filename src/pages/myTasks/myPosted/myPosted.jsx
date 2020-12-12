import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"
import { MyPostedPurchasingTaskCard } from '../../../components/TaskCard'

const MyPosted = () => {

  let contents = new Array(5).fill(<View style={{marginBottom: '2%'}}><MyPostedPurchasingTaskCard /></View>)

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/myTasks/myPosted/myPostedItem'
    })
  }

  return (
    <View onClick={handleClick}>
      {
        contents
      }
    </View>
  )
}

export default MyPosted