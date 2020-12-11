import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"

const MyAcceptedPurchasing = () => {

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/myTasks/myAccepted/purchasing/myAcceptedPurchasingItem'
    })
  }

  return (
    <AtCard
      note='小Tips'
      extra='额外信息'
      title='这是个我接受的采购任务'
      thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      onClick={handleClick}
    >
      这是个我接受的采购任务
    </AtCard>
  )
}

export default MyAcceptedPurchasing