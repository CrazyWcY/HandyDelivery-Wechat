import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtCard } from 'taro-ui'
import { DeliveryTaskCard } from '../../../../components/TaskCard'

const DeliveryTask = (props) => {

  const handleClick = (id) => {
    Taro.navigateTo({
      url: '/pages/taskPools/deliveryTaskPool/deliveryTask/deliveryTaskInfo?id=' + id
    })
  }

  return (
    <View onClick={() => handleClick(props.task.id)} style={{paddingBottom: '1%'}}>
      <DeliveryTaskCard task={props.task}></DeliveryTaskCard>
    </View>
  )
}

export default DeliveryTask