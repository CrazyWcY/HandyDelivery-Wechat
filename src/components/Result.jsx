import { View, Text, ScrollView, Map, Image, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'

const Result = (props) => {

  const icon = props.icon
  const message = props.message

  const CSS = {
    message: {
      marginTop: '3%',
      fontSize: '20px'
    }
  }

  return (
    <View>
      <View className='at-row at-row__justify--center'>
        <AtIcon value={icon} size='50' color='#F00'></AtIcon>
      </View>
      <View className='at-row at-row__justify--center' style={CSS.message}>
        <View>{message}</View>
      </View>
    </View>
  )
}

export default Result
