import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PurchasingTask from './purchasingTask/purchasingTask'



const PurchasingTaskPool = () => {

  const pool = new Array(10).fill(<PurchasingTask/>)

  return (
    <View>
      {
        pool
      }
    </View>
  )
}

export default PurchasingTaskPool