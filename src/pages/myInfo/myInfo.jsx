import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { TaskCard } from '../../components/TaskCard'

const MyInfo = () => {

  return(
    <View>
      <TaskCard></TaskCard>
    </View>
  )
}

export default MyInfo