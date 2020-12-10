import { View, Text, ScrollView } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtFab, AtListItem, AtButton, AtCard, AtAvatar, AtDivider } from "taro-ui"

const PurchasingTaskInfo = () => {
  const CSS = {
    head: {
      backgroundColor: '#26c59e',
    },
    title: {
      color: 'white',
      fontSize: '20px',
      paddingTop: '3%',
      fontWeight: 'bold'
    },
    userBar: {
      width: '90%',
      backgroundColor: 'white',
      marginTop: '5%',
      marginBottom: '5%',
    },
    userName: {
      fontSize: '15px',
      fontWeight: 'bold'
    },
    userInfo: {
      fontSize: '10px',
      paddingTop: '15%'
    },
    avatar: {
      paddingTop: '3%',
      paddingBottom: '3%',
      paddingLeft: '3%',
      paddingRight: '3%'
    },
    infoCard: {
      backgroundColor: '#9cf8d8',
      margin: '3% 3%',
      borderRadius: '20px'
    },
    infoList: {
      padding: '3% 3%',
      width: '90%'
    },
    infoTitle: {
      fontWeight: 'bold',
      fontSize: '12px'
    },
    infoItem: {
      color: 'grey',
      fontSize: '12px'
    },
    detailsArea: {
      margin: '5% 5% 15% 5%'
    },
    timeArea: {
      margin: '5% 5%'
    },
    timeLine: {
      fontSize: '12px',
      color: 'grey',
      marginTop: '3%'
    },
    divider: {
      height: '5px',
      width: '80%',
      margin: 'auto',
      borderBottom: 'solid 1px grey'
    }
  }

  const handleTabChange = v => {
    setCurrent(v)
  }

  return (
    <ScrollView>
      <View style={CSS.head}>
        <View style={CSS.title} className='at-row at-row__justify--center'>任务标题</View>
        <View className='at-row at-row__justify--center'>
          <View style={CSS.userBar} className='at-row'>
            <View style={CSS.avatar} className='at-row'>
              <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
              <View style={{ marginLeft: '5%' }}>
                <View style={CSS.userName}>用户1</View>
                <View style={CSS.userInfo}>info</View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={CSS.infoCard}>
          <View className='at-row at-row__justify--between' style={CSS.infoList}>
            <View style={CSS.infoTitle}>货品名称</View>
            <View style={CSS.infoItem}>复旦大学纪念章</View>
          </View>
          <View className='at-row at-row__justify--between' style={CSS.infoList}>
            <View style={CSS.infoTitle}>期望采购地点</View>
            <View style={CSS.infoItem}>复旦大学</View>
          </View>
          <View className='at-row at-row__justify--between' style={CSS.infoList}>
            <View style={CSS.infoTitle}>预计薪酬</View>
            <View style={CSS.infoItem}>RMB 35</View>
          </View>
          <View className='at-row at-row__justify--between' style={CSS.infoList}>
            <View style={CSS.infoTitle}>期望交付日期</View>
            <View style={CSS.infoItem}>2020-12-30</View>
          </View>
          <View className='at-row at-row__justify--between' style={CSS.infoList}>
            <View style={CSS.infoTitle}>取件地址</View>
            <View style={CSS.infoItem}>上海交通大学（闵行）</View>
          </View>
        </View>
        <View style={CSS.detailsArea}>
          <View>求复旦纪念章。</View>
        </View>
        <View style={CSS.divider}>
        </View>
        <View style={CSS.timeArea}>
          <View style={CSS.timeLine}>发布于 2020-12-10 21:15</View>
          <View style={CSS.timeLine}>任务失效时间： 2020-12-30 23:59</View>
        </View>
      </View>

      <View style={{position: 'fixed', bottom: '30px', left: '42%'}}>
      <AtFab>
        <Text className='at-fab__icon at-icon at-icon-check'></Text>
      </AtFab>
      </View>
    </ScrollView>

  )
}

export default PurchasingTaskInfo