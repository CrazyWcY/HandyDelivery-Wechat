import { View } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtList, AtListItem, AtButton, AtCard } from "taro-ui"

const DeliveryTaskInfo = () => {

  return (
    <View>
      <View>
        <AtList>
          <View>任务标题</View>
          <AtListItem title='寄件人' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' />
          <AtListItem title='收件人' thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' />
        </AtList>
      </View>
      <View>
        <AtList>
          <AtListItem title='货品名称' extraText='复旦大学纪念章' />
          <AtListItem title='寄送地' extraText='复旦大学' />
          <AtListItem title='目的地' extraText='上海交通大学（闵行）' />
          <AtListItem title='期望交付日期' extraText='2020-12-30' />
          <AtListItem title='预计薪酬' extraText='RMB 35' />
        </AtList>
        <AtCard
          note='小Tips'
          extra='配送要求'
          title='描述'
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          请保证货品完好。
        </AtCard>
        <AtButton type='primary'>接受任务</AtButton>
      </View>
    </View>
  )
}

export default DeliveryTaskInfo