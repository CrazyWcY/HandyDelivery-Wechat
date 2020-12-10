import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"

const MyPosted = () => {

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/myTasks/myPosted/myPostedItem'
    })
  }

  return (
    <View>
      <AtCard
        note='小Tips'
        extra='额外信息'
        title='我发布的任务'
        thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        onClick={handleClick}
      >
        我发布的一个任务
    </AtCard>
    </View>
  )
}

export default MyPosted