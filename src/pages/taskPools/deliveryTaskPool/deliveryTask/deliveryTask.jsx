import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtCard } from 'taro-ui'
import { DeliveryTaskCard } from '../../../../components/TaskCard'

const DeliveryTask = () => {

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/taskPools/deliveryTaskPool/deliveryTask/deliveryTaskInfo'
    })
  }

  return (
    <View onClick={handleClick} style={{paddingBottom: '1%'}}>
      <DeliveryTaskCard></DeliveryTaskCard>
    </View>
  )
}

export default DeliveryTask