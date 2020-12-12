import React, { useEffect, useState } from 'react'
import { AtAvatar, AtCard } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

const PurchasingTaskCard = () => {

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
            <AtAvatar circle image='https://tse2-mm.cn.bing.net/th/id/OIP.vRY1U0-rSP2pXM-5qIQIuAAAAA?pid=Api&rs=1'></AtAvatar>
          </View>
          <View className='at-col' style={{ marginTop: '3%', marginLeft: '5%' }}>
            <View>胡博</View>
            <View style={{ fontSize: '12px', marginTop: '3%' }}>胡博yyds，刘博也是</View>
          </View>
        </View>
        <View className='at-row' style={{ fontSize: '14px', justifyContent: 'flex-end', marginRight: '5%', color: 'grey' }}>
          待接受
        </View>
      </View>

      <View className='at-row' style={{ padding: '2%', fontWeight: 'bold' }}>
        求购极品元神号
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
            style={{ width: '120px', height: '80px', background: '#fff', marginLeft: '20%' }}
            src='https://gw.alicdn.com/bao/uploaded/i4/O1CN012zRXQz26Thgy77IVL_!!0-fleamarket.jpg_790x10000Q75.jpg'
          />
        </View>
      </View>

      <View className='at-row' style={{ margin: '2%', fontSize: '12px', color: 'grey' }}>
        37分钟前
      </View>


    </View>
  )
}

const DeliveryTaskCard = () => {

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
            <AtAvatar circle image='https://tse2-mm.cn.bing.net/th/id/OIP.vRY1U0-rSP2pXM-5qIQIuAAAAA?pid=Api&rs=1'></AtAvatar>
          </View>
          <View className='at-col' style={{ marginTop: '3%', marginLeft: '5%' }}>
            <View>胡博</View>
            <View style={{ fontSize: '12px', marginTop: '3%' }}>胡博yyds，刘博也是</View>
          </View>
        </View>
        <View className='at-row' style={{ fontSize: '14px', justifyContent: 'flex-end', marginRight: '5%', color: 'grey' }}>
          待接受
        </View>
      </View>

      <View className='at-row' style={{ padding: '2%', fontWeight: 'bold' }}>
        求购极品元神号
      </View>

      <View className='at-row' style={{ paddingLeft: '2%', marginTop: '2%' }}>
        <View className='at-col'>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-shopping-bag at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }} >极品元神号</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-map-pin at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
            <View className='at-col' style={{ marginLeft: '3%', fontSize: '13px' }}>复旦大学江湾校区</View>
          </View>
          <View className='at-row' style={CSS.itemLine}>
            <View className='at-icon at-icon-home at-col at-col-1 at-col--auto' style={{ paddingTop: '1%' }}></View>
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
            style={{ width: '120px', height: '80px', background: '#fff', marginLeft: '20%' }}
            src='https://gw.alicdn.com/bao/uploaded/i4/O1CN012zRXQz26Thgy77IVL_!!0-fleamarket.jpg_790x10000Q75.jpg'
          />
        </View>
      </View>

      <View className='at-row' style={{ margin: '2%', fontSize: '12px', color: 'grey' }}>
        37分钟前
      </View>


    </View>
  )
}


const MyPostedPurchasingTaskCard = () => {
  return (
    <AtCard
      note='15分钟前'
      extra='待接受'
      title='极品元神号求购'
      thumb='https://tse1-mm.cn.bing.net/th/id/OIP.7zxaE1UHao-0mE4EOQ5wGgHaHa?pid=Api&rs=1'
    >
      <View className='at-row at-row__align--center' style={{marginBottom: '2%'}}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>极品元神号</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>交大闵行校区</View>
      </View>
    </AtCard>
  )
}

const MyAcceptedPurchasingTaskCard = () => {
  return (
    <AtCard
      note='15分钟前'
      extra='采购中'
      title='极品元神号求购'
      thumb='https://tse1-mm.cn.bing.net/th/id/OIP.7zxaE1UHao-0mE4EOQ5wGgHaHa?pid=Api&rs=1'
    >
      <View className='at-row at-row__align--center' style={{marginBottom: '2%'}}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>极品元神号</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>交大闵行校区</View>
      </View>
    </AtCard>
  )
}

const MyAcceptedDeliveryTaskCard = () => {
  return (
    <AtCard
      note='15分钟前'
      extra='配送中'
      title='极品元神号求购'
      thumb='https://tse1-mm.cn.bing.net/th/id/OIP.7zxaE1UHao-0mE4EOQ5wGgHaHa?pid=Api&rs=1'
    >
      <View className='at-row at-row__align--center' style={{marginBottom: '2%'}}>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-shopping-bag-2'></View>
        </View>
        <View className='at-col'>极品元神号</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>复旦江湾校区</View>
      </View>
      <View className='at-row at-row__align--center'>
        <View className='at-col at-col-1 at-col--auto'>
          <View className='at-icon at-icon-map-pin'></View>
        </View>
        <View className='at-col'>交大闵行校区</View>
      </View>
    </AtCard>
  )
}

export { PurchasingTaskCard, DeliveryTaskCard, MyPostedPurchasingTaskCard, MyAcceptedPurchasingTaskCard, MyAcceptedDeliveryTaskCard }