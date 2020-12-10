import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtCard, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'

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
    <AtCard
      note='35分钟前'
      extra={'胡博'}
      title='求购极品元神号'
      thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
      onClick={handleClick}
    >
      <View>
        <View className='at-row' style={cardLine}>
          <AtIcon value='shopping-bag'></AtIcon>
          <View style={textLine}>极品元神号</View>
        </View>
        <View className='at-row' style={cardLine}>
          <AtIcon value='map-pin'></AtIcon>
          <View style={textLine}>交通大学闵行校区</View>
        </View>
        <View className='at-row' style={cardLine}>
          <AtIcon value='credit-card'></AtIcon>
          <View style={textLine}>RMB 1000</View>
        </View>
        <View className='at-row' style={cardLine}>
          <AtIcon value='clock'></AtIcon>
          <View style={textLine}>剩余 200 小时</View>
        </View>
      </View>
    </AtCard>
  )
}

export default PurchasingTask