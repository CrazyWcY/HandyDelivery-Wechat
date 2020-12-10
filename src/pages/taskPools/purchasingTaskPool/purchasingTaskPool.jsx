import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PurchasingTask from './purchasingTask/purchasingTask'



const PurchasingTaskPool = () => {

  let taskCard = {
    marginBottom: '2%'
  }

  const pool = new Array(10).fill(<View style={taskCard}><PurchasingTask/></View>)

  return (
    <View>
      {
        pool
      }
    </View>
  )
}

export default PurchasingTaskPool