import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"
import { MyAcceptedDeliveryTaskCard } from '../../../../components/TaskCard'

const MyAcceptedDelivery = () => {

  const contents = new Array(5).fill(<View style={{marginBottom: '2%'}}><MyAcceptedDeliveryTaskCard /></View>)

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/myTasks/myAccepted/delivery/myAcceptedDeliveryItem'
    })
  }

  return (
    <View onClick={handleClick} style={{marginTop: '2%'}}>
       {
        contents
      }
    </View>
  )
}

export default MyAcceptedDelivery