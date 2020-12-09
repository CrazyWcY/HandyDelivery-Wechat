import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import DeliveryTask from './deliveryTask/deliveryTask'

const pool = new Array(10).fill(<DeliveryTask />)

const DeliveryTaskPool = () => {
  return (
    <View>
      {
        pool
      }
    </View>
  )
}

export default DeliveryTaskPool