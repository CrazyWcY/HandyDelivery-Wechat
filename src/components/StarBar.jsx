import React, { useEffect, useState } from 'react'
import { AtIcon, AtRate } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

const StarBar = (props) => {

  const starValue = props.star

  const type = props.type

  const CSS = {
    starBar: {
      border: 'solid 1px #B7EB8F',
      height: '70px',
      backgroundColor: '#F6FFED',
      borderRadius: '5px'
    },
    logo: {
      marginLeft: '3%'
    },
    overText: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginLeft: '3%'
    },
    title: {
      fontSize: '15px',
      marginBottom: '3%'
    }
  }

  return (
    <View>
      <View>
        <View className='at-row at-row__align--center' style={CSS.starBar}>
          <View className='at-col at-col-1 at-col--auto' style={CSS.logo}><AtIcon value='check' size='40' color='#74BDAC'></AtIcon></View>
          <View className='at-col' style={CSS.overText}>任务已结束</View>
          <View className='at-col' style={{marginRight: '2%'}}>
            <View style={CSS.title}>{type}</View>
            <AtRate size='30' value={starValue} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default StarBar