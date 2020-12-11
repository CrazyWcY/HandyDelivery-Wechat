import { View, Text, ScrollView, Map } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import { AtFab, AtTag, AtButton, AtAvatar, AtSegmentedControl } from "taro-ui"

const UnreceivedInfo = () => {
  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
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
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
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
      backgroundColor: '#DEF0F2',
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
  return (
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
  )
}

const PurchasingInfo = () => {
  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
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
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
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
      backgroundColor: '#DEF0F2',
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

  const markers = [
    {
      id: 0,
      latitude: 31.341285,
      longitude: 121.513646,
      width: 10,
      height: 10,
      anchor: { x: .5, y: 0.8 },
      title: '创意图',
      callout: { content: '创意图地标建筑' }
    }
  ]

  return (
    <View>
      <View style={CSS.userBar} className='at-row'>
        <View style={CSS.avatar} className='at-row'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <View style={{ marginLeft: '5%' }}>
            <View style={CSS.userName}>用户1</View>
            <View style={CSS.userInfo}>info</View>
          </View>
        </View>
      </View>
      <View style={CSS.infoCard}>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>任务接受时间</View>
          <View style={CSS.infoItem}>2020-12-11 11:03</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>采购完成时间</View>
          <View style={CSS.infoItem}>2020-12-15 9:00</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>实际采购地点</View>
          <View style={CSS.infoItem}>复旦大学</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>配送模式</View>
          <View style={CSS.infoItem}>自行配送</View>
        </View>
      </View>
      <Map longitude={121.513646} latitude={31.341285} markers={markers} />
    </View>
  )
}

const DeliveryInfo = () => {

  const [polyLines, setPolyLines] = useState(null)
  const [currLoc, setCurrLoc] = useState([{
    id: 0,
    longitude: 121.513433,
    latitude: 31.341287,
    width: 20,
    height: 20
  }])

  useEffect(() => {
    const QQMapWX = require('../../../libs/qqmap-wx-jssdk')
    const qqmapsdk = new QQMapWX({
      key: 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'
    })
    qqmapsdk.direction({
      from: '31.341285,121.513646',
      to: '31.026339,121.437515',
      success: function (res) {
        console.log(res)
        let coors = res.result.routes[0].polyline
        for (let i = 2; i < coors.length; i++) {
          coors[i] = coors[i - 2] + coors[i] / 1000000
        }
        console.log(coors)
        let coors_new = []
        for (let j = 0; j < coors.length; j++) {
          coors_new.push({
            longitude: parseFloat(coors[j + 1]),
            latitude: parseFloat(coors[j]),
          })
          j++;
        }
        console.log(coors_new)
        setPolyLines(
          [
            {
              points: coors_new,
              color: "#DC143C",
              width: 3
            }
          ]

        )
      }
    })
  }, [])

  const CSS = {
    head: {
      backgroundColor: '#7bbfea',
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
      boxShadow: '3px 2px 16px 1px grey',
      margin: '2%'
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
      backgroundColor: '#DEF0F2',
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

  const markers = [
    {
      id: 0,
      latitude: 31.341285,
      longitude: 121.513646,
      width: 10,
      height: 10,
      anchor: { x: .5, y: 0.8 },
      title: '创意图',
      callout: { content: '创意图地标建筑' }
    }
  ]

  const handleAPI = () => {

  }

  return (
    <View>
      <View style={CSS.userBar} className='at-row'>
        <View style={CSS.avatar} className='at-row'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <View style={{ marginLeft: '5%' }}>
            <View style={CSS.userName}>配送者</View>
            <View style={CSS.userInfo}>info</View>
          </View>
        </View>
      </View>
      <View style={CSS.infoCard}>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>任务接受时间</View>
          <View style={CSS.infoItem}>2020-12-11 11:03</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>取件地点</View>
          <View style={CSS.infoItem}>2020-12-15 9:00</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>目的地</View>
          <View style={CSS.infoItem}>复旦大学</View>
        </View>
        <View className='at-row at-row__justify--between' style={CSS.infoList}>
          <View style={CSS.infoTitle}>配送状态</View>
          <View style={CSS.infoItem}>配送中</View>
        </View>
        <AtButton onClick={
          () => {
            setCurrLoc([
              {
                id: 0,
                latitude: currLoc[0].latitude - 0.00001,
                longitude: currLoc[0].longitude - 0.00001,
                width: 10,
                height: 10
              }
            ])
          }
        }>更新坐标</AtButton>
      </View>
      {
        polyLines ? <Map longitude={121.513433} latitude={31.341287} scale={16} markers={currLoc} polyline={polyLines} /> : null
      }
    </View>
  )
}


const MyPostedItem = () => {
  const CSS = {
    head: {
      backgroundColor: '#64AB99',
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
      boxShadow: '3px 2px 16px 1px grey'
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
      backgroundColor: '#DEF0F2',
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

  const [current, setCurrent] = useState(0)

  const handleTabChange = v => {
    setCurrent(v)
  }

  const pages = [
    <UnreceivedInfo />,
    <PurchasingInfo />,
    <DeliveryInfo />
  ]

  return (
    <ScrollView>
      <View style={CSS.head}>
        <View className='at-row at-row__align--center'>
          <View className='at-col'>
            <AtTag type='primary' circle>配送中</AtTag>
          </View>
          <View style={CSS.title} className='at-col'>任务标题</View>
        </View>
      </View>
      <AtSegmentedControl
        values={['任务信息', '采购信息', '配送信息']}
        onClick={v => { setCurrent(v) }}
        current={current}
      />
      {
        pages[current]
      }

      <AtButton type='primary'>取消任务</AtButton>
    </ScrollView>

  )
}

export default MyPostedItem