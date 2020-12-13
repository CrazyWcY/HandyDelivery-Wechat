import React, { useEffect, useState } from 'react'
import { AtAvatar, AtCard } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { taskStatus } from '../service/status'


const PurchasingTaskCard = (props) => {

  const task = props.task

  const CSS = {
    itemLine: {
      marginBottom: '7%'
    }
  }

  return (
    <View style={{ border: '2px solid #F5F5F5', backgroundColor: 'white', boxShadow: '1px 1px 5px #DCDCDC' }}>
      <View className='at-row at-row__justify--between at-row__align--center' style={{ margin: '2%' }}>
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto' style={{ marginRight: '2%' }}>
            <AtAvatar circle image={task.author.avatar}></AtAvatar>
          </View>
          <View className='at-col' style={{ marginTop: '3%', marginLeft: '5%' }}>
            <View>{task.author.name}</View>
            <View style={{ fontSize: '12px', marginTop: '3%' }}>{task.author.signature}</View>
          </View>
        </View>
        <View className='at-row' style={{ fontSize: '14px', justifyContent: 'flex-end', marginRight: '5%', color: 'grey' }}>
          {taskStatus[task.status]}
        </View>
      </View>

      <View className='at-row' style={{ padding: '2%', fontWeight: 'bold' }}>
        {task.p_title}
      </View>

      <View className='at-row' style={{ paddingLeft: '2%', marginTop: '2%' }}>
        <View className='at-col'>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-shopping-bag at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }} >{task.good}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-map-pin at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.d_destination.name}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-credit-card at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.money}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-clock at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.deadline}</View>
          </View>
        </View>
        <View className='at-col'>
          <Image
            style={{ width: '120px', height: '80px', background: '#fff', marginLeft: '20%' }}
            src={task.good_pictures[0]}
          />
        </View>
      </View>

      <View className='at-row' style={{ margin: '2%', fontSize: '12px', color: 'grey' }}>
        发布于 {task.time}
      </View>

    </View>
  )
}

const DeliveryTaskCard = (props) => {

  const task = props.task

  console.log('task', task)

  const CSS = {
    itemLine: {
      marginBottom: '7%'
    }
  }

  return (
    <View style={{ border: '2px solid #F5F5F5', backgroundColor: 'white', boxShadow: '1px 1px 5px #DCDCDC' }}>
      <View className='at-row at-row__justify--between at-row__align--center' style={{ margin: '2%' }}>
        <View className='at-row'>
          <View className='at-col at-col-1 at-col--auto' style={{ marginRight: '2%' }}>
            <AtAvatar circle image={task.puchaser.avatar}></AtAvatar>
          </View>
          <View className='at-col' style={{ marginTop: '3%', marginLeft: '5%' }}>
            <View>{task.puchaser.name}</View>
            <View style={{ fontSize: '12px', marginTop: '3%' }}>{task.puchaser.signature}</View>
          </View>
        </View>
        <View className='at-row' style={{ fontSize: '14px', justifyContent: 'flex-end', marginRight: '5%', color: 'grey' }}>
          {taskStatus[task.status]}
        </View>
      </View>

      <View className='at-row' style={{ padding: '2%', fontWeight: 'bold' }}>
        {task.p_title}
      </View>

      <View className='at-row' style={{ paddingLeft: '2%', marginTop: '2%' }}>
        <View className='at-col'>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-shopping-bag at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }} >{task.good}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-map-pin at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.p_send_location.name}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-home at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.d_destination.name}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-credit-card at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>RMB {task.money}</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-clock at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>{task.deadline}</View>
          </View>
        </View>
        <View className='at-col'>
          <Image
            style={{ width: '120px', height: '80px', background: '#fff', marginLeft: '20%' }}
            src={task.good_pictures[0]}
          />
        </View>
      </View>

      <View className='at-row' style={{ margin: '2%', fontSize: '12px', color: 'grey' }}>
        发布于 {task.time}
      </View>


    </View>
  )
}


const MyPostedPurchasingTaskCard = (props) => {

  const task = props.task

  return (
    <AtCard
      note={task.time}
      extra={taskStatus[task.status]}
      title={task.p_title}
      thumb={task.author.avatar}
    >
      <View className='at-row at-row__align--center' style={{ marginBottom: '2%' }}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>{task.good}</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>{task.d_destination.name}</View>
      </View>
    </AtCard>
  )
}

const MyAcceptedPurchasingTaskCard = (props) => {

  const task = props.task

  return (
    <AtCard
      note={task.time}
      extra={taskStatus[task.status]}
      title={task.p_title}
      thumb={task.author.avatar}
    >
      <View className='at-row at-row__align--center' style={{ marginBottom: '2%' }}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>{task.good}</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>{task.p_destination.name}</View>
      </View>
    </AtCard>
  )
}

const MyAcceptedDeliveryTaskCard = (props) => {

  const task = props.task

  return (
    <AtCard
      note={task.time}
      extra={taskStatus[task.status]}
      title={task.p_title}
      thumb={task.author.avatar}
    >
      <View className='at-row at-row__align--center' style={{ marginBottom: '2%' }}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>{task.good}</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>{task.p_send_location.name}</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>{task.d_destination.name}</View>
      </View>
    </AtCard>
  )
}

export { PurchasingTaskCard, DeliveryTaskCard, MyPostedPurchasingTaskCard, MyAcceptedPurchasingTaskCard, MyAcceptedDeliveryTaskCard }