import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PurchasingTaskCard } from '../../components/TaskCard'

const MyInfo = () => {

  return(
    <View>
      <PurchasingTaskCard></PurchasingTaskCard>
    </View>
  )
}

export default MyInfo