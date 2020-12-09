import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtCard } from 'taro-ui'
import Taro from '@tarojs/taro'

const PurchasingTask = () => {

  const handleClick = () => {
    console.log('test')
    Taro.navigateTo({
      url: '/pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo'
    })
  }

  return (
    <AtCard
      note='小Tips'
      extra='额外信息'
      title='这是个采购任务'
      thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      onClick={handleClick}
    >
      这也是内容区 可以随意定义功能
    </AtCard>
  )
}

export default PurchasingTask