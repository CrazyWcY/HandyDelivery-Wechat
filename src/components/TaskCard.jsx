import React, { useEffect, useState } from 'react'
import { AtAvatar, AtFab } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

const UserBar = () => {

  const CSS = {
    itemLine: {
      marginBottom: '7%'
    }
  }
  return (
    <View style={{ border: '2px solid #DEF0F2' }}>
      <View className='at-row at-row__justify--between at-row__align--center' style={{ margin: '2%' }}>
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto' style={{ marginRight: '2%' }}>
            <AtAvatar circle text='凹凸实验室'></AtAvatar>
          </View>
          <View className='at-col' style={{ marginTop: '3%', marginLeft: '5%' }}>
            <View>USERNAME</View>
            <View style={{ fontSize: '12px', marginTop: '3%' }}>USERINFO</View>
          </View>
        </View>
        <View className='at-row' style={{ fontSize: '14px', justifyContent: 'flex-end', marginRight: '5%', color: 'grey' }}>
          待接受
        </View>
      </View>

      <View className='at-row' style={{ padding: '2%', fontWeight: 'bold' }}>
        标题名
      </View>

      <View className='at-row' style={{ paddingLeft: '2%', marginTop: '2%' }}>
        <View className='at-col'>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-shopping-bag at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }} >极品元神号</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-map-pin at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>交通大学闵行校区</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-credit-card at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>RMB 1000</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-clock at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>剩余 200 小时</View>
          </View>
        </View>
        <View className='at-col'>
          <Image
            style={{ width: '80px', height: '80px', background: '#fff', marginLeft: '20%' }}
            src='https://wiki.mbalib.com/w/images/thumb/5/5b/%E5%BE%AE%E4%BF%A1.png/180px-%E5%BE%AE%E4%BF%A1.png'
          />
        </View>
      </View>

      <View className='at-row' style={{ margin: '2%', fontSize: '12px', color: 'grey' }}>
        37分钟前
      </View>


    </View>
  )
}

const TaskCard = () => {

  return (
    <View>
      <UserBar></UserBar>
    </View>
  )
}

export { TaskCard }