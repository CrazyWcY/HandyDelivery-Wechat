import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PurchasingTaskCard } from '../../components/TaskCard'
import Result from '../../components/Result'

const MyInfo = () => {

  return(
    <View>
      <Result icon='alert-circle' message='暂无信息' />
    </View>
  )
}

export default MyInfo