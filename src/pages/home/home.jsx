import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton, AtAvatar, AtTabBar } from 'taro-ui'

const Home = () => {

  const [current, setCurrent] = useState(0)

  const handleClick = e => {
    setCurrent(e)
  }

  return (
    <View>
      {/*
      <AtTabBar
        fixed
        tabList={[
          { title: '任务池', iconType: 'tag' },
          { title: '任务', iconType: 'numbered-list' },
          { title: '我的', iconType: 'user' }
        ]}
        onClick={handleClick}
        current={current}
      />
      */}
    </View>
  )
}

export default Home