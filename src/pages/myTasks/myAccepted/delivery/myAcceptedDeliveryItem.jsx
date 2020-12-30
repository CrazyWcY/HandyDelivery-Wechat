import { View, Text, ScrollView, Button } from '@tarojs/components'
import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { AtFab, AtListItem, AtButton, AtCard, AtAvatar, AtDivider, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInputNumber } from "taro-ui"
import { RouteMap } from '../../../../components/map'
import { getCurrentInstance } from '@tarojs/taro'
import SERVICE_URL from '../../../../service/service'

const MyAcceptedDeliveryItem = () => {
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

  const [task, setTask] = useState(0)
  const [modalVisiable, setModalVisiable] = useState(false)
  const [money, setMoney] = useState(0)

  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    wx.request({
      url: SERVICE_URL + '/getTask?id=' + id,
      method: 'get',
      success: function (res) {
        console.log(res)
        setTask(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  const handleMap = () => {
    const start = {
      name: '上海科技大学',
      latitude: '31.182971',
      longitude: '121.601394'
    }

    const end = {
      name: '上海交通大学闵行校区',
      latitude: '31.0176',
      longitude: '121.43102'
    }

    const MAP = new RouteMap(start, end)
    MAP.showRoutePlan()
  }

  const goToUserInfo = id => {
    Taro.navigateTo({
      url: '/pages/personalInfo/personalInfo?id=' + id
    })
  }

  const handleMoney = value => {
    setMoney(value)
  }

  const handleFinish = () => {
    wx.request({
      url: SERVICE_URL + '/finishDeliveryTask?id=' + task.id + '&money=' + money,
      method: 'get',
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(() => {
          wx.switchTab({ url: '/pages/myTasks/myTasks' })
        }, 2000)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }

  return (
    <ScrollView>
      {
        task ?
          <View>
            <View style={CSS.head}>
              <View style={CSS.title} className='at-row at-row__justify--center'>{task.title}</View>
              <View className='at-row at-row__justify--center'>
                <View style={CSS.userBar} className='at-row' onClick={() => goToUserInfo(task.author.id)}>
                  <View style={CSS.avatar} className='at-row'>
                    <AtAvatar circle image={task.author.avatar}></AtAvatar>
                    <View style={{ marginLeft: '5%' }}>
                      <View style={CSS.userName}>{task.author.name}</View>
                      <View style={CSS.userInfo}>{task.author.signature}</View>
                    </View>
                  </View>
                </View>
                <View style={CSS.userBar} className='at-row'>
                  <View style={CSS.avatar} className='at-row'>
                    <AtAvatar circle image={task.puchaser.avatar}></AtAvatar>
                    <View style={{ marginLeft: '5%' }}>
                      <View style={CSS.userName}>{task.puchaser.name}</View>
                      <View style={CSS.userInfo}>{task.puchaser.signature}</View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={CSS.infoCard}>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>货品名称</View>
                  <View style={CSS.infoItem}>{task.good}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>寄送地</View>
                  <View style={CSS.infoItem}>{task.p_send_location.name}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>取件地址</View>
                  <View style={CSS.infoItem}>{task.p_destination.name}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>期望交付日期</View>
                  <View style={CSS.infoItem}>{task.deadline}</View>
                </View>
                <View className='at-row at-row__justify--between' style={CSS.infoList}>
                  <View style={CSS.infoTitle}>寄送费用</View>
                  <View style={CSS.infoItem}>{task.p_money}</View>
                </View>
              </View>
              <View className='at-row at-row__justify--center'>
                <View className='at-row'>
                  <AtButton type='secondary' onClick={handleMap}>查看路线规划</AtButton>
                </View>
              </View>
              <View style={CSS.detailsArea}>
                <View>{task.p_details}</View>
              </View>
              <View style={CSS.divider}>
              </View>
              <View style={CSS.timeArea}>
                <View style={CSS.timeLine}>发布于 {task.time}</View>
              </View>
            </View>
            {
              task.status > 3 ?
                <AtButton type='primary' disabled>已完成配送，等待发起人付款</AtButton>
                :
                <View style={{ width: '95%', margin: '0 auto' }}>
                  <AtButton type='primary' onClick={() => setModalVisiable(true)}>确认完成配送</AtButton>
                </View>
            }

          </View>
          : null

      }
      <AtModal isOpened={modalVisiable}>
        <AtModalHeader>确认完成配送</AtModalHeader>
        <AtModalContent>
          <View>请输入实际配送金额</View>
          <AtInputNumber min={0} max={999} step={1} value={money} onChange={handleMoney} />
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button onClick={handleFinish}>确定</Button>
        </AtModalAction>
      </AtModal>


    </ScrollView>

  )
}

export default MyAcceptedDeliveryItem