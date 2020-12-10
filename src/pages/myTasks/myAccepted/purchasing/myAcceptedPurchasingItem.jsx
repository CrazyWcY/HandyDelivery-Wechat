import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"

const MyAcceptedPurchasingItem = () => {
  return (
    <View>
      <View>
        <AtList>
          <View>任务标题</View>
          <AtListItem title='用户1' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' />
        </AtList>
      </View>
      <View>
        <AtList>
          <AtListItem title='货品名称' extraText='复旦大学纪念章' />
          <AtListItem title='期望采购地点' extraText='复旦大学' />
          <AtListItem title='预计薪酬' extraText='RMB 35' />
          <AtListItem title='期望交付日期' extraText='2020-12-30' />
          <AtListItem title='取件地址' extraText='上海交通大学（闵行）' />
        </AtList>
        <AtCard
          note='小Tips'
          extra='额外信息'
          title='描述'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          求复旦纪念章。
        </AtCard>
      </View>
    </View>
  )
}

export default MyAcceptedPurchasingItem