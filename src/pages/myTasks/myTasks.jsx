import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import MyPosted from './myPosted/myPosted'
import MyAccepted from './myAccepted/myAccepted'


const contents = [
  <MyPosted />,
  <MyAccepted />,
  <View></View>
]

const MyTasks = () => {

  const [current, setCurrent] = useState(0)

  return (
    <View>
      <View style={{fontWeight: 'bold', marginBottom: '3%'}}>
      <AtTabBar
        tabList={[
          { title: '我发布的任务' },
          { title: '我接受的任务' },
          { title: '待接收专属任务', text: 2 },
        ]}
        onClick={e => {
          setCurrent(e)
        }}
        current={current}
      />
      </View>
      {
        contents[current]
      }
    </View>
  )
}

export default MyTasks