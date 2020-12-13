import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtCard, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import { PurchasingTaskCard } from '../../../../components/TaskCard'

const PurchasingTask = (props) => {

  let cardLine = {
    fontSize: '12px',
    marginBottom: '3%'
  }

  let textLine = {
    marginLeft: '5px',
    paddingTop: '1px'
  }

  const handleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo?id=' + id
    })
  }

  return (
    <View onClick={() => handleClick(props.task.id)} style={{paddingBottom: '1%'}}>
      <PurchasingTaskCard task={props.task}></PurchasingTaskCard>
    </View>
  )
}

export default PurchasingTask