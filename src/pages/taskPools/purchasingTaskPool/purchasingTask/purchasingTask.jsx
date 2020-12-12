import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtCard, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import { PurchasingTaskCard } from '../../../../components/TaskCard'

const PurchasingTask = () => {

  let cardLine = {
    fontSize: '12px',
    marginBottom: '3%'
  }

  let textLine = {
    marginLeft: '5px',
    paddingTop: '1px'
  }

  const handleClick = () => {
    console.log('test')
    Taro.navigateTo({
      url: '/pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo'
    })
  }

  return (
    <View onClick={handleClick} style={{paddingBottom: '1%'}}>
      <PurchasingTaskCard></PurchasingTaskCard>
    </View>
  )
}

export default PurchasingTask