import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PurchasingTaskCard } from '../../components/TaskCard'
import Result from '../../components/Result'
import { AtButton, AtAvatar, AtList, AtListItem, AtDivider } from "taro-ui"
import SERVICE_URL from '../../service/service'

const MyInfo = () => {

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
      width: '95%',
      margin: '0 auto',
      backgroundColor: 'white',
      marginTop: '5%',
      marginBottom: '5%',
      boxShadow: '1px 1px 10px 1px #BEBEBE'
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
    details: {
      // width: '95%',
      // margin: '0 auto',
      borderRadius: '5px'
    },
    buttons: {
      width: '95%',
      margin: '0 auto',
      marginTop: '3%'
    }
  }

  const reset = () => {
    wx.request({
      url: SERVICE_URL + '/reload',
      method: 'get',
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '重置成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }

  const TBD = () => {
    wx.showToast({
      title: 'beta版本暂未上线',
      duration: 2000
    })
  }

  const [user, setUser] = useState(null)

  useEffect(() => {
    wx.request({
      url: SERVICE_URL + '/getUserById?id=root',
      method: 'get',
      success: function (res) {
        console.log(res)
        setUser(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  return (
    <View>
      {
        user ?
          <View>
            <View style={CSS.userBar} className='at-row'>
              <View style={CSS.avatar} className='at-row'>
                <AtAvatar circle image={user.avatar}></AtAvatar>
                <View style={{ marginLeft: '5%' }}>
                  <View style={CSS.userName}>{user.name}</View>
                  <View style={CSS.userInfo}>{user.signature}</View>
                </View>
              </View>
            </View>
            <View style={CSS.details}>
              <AtList>
                <AtListItem
                  title='用户ID'
                  extraText={user.id}
                  iconInfo={{ size: 25, color: '#78A4FA', value: 'user', }}
                />
                <AtListItem
                  title='地址'
                  extraText={user.address}
                  iconInfo={{ size: 25, color: '#78A4FA', value: 'map-pin', }}
                />
                <AtListItem
                  title='累计完成任务'
                  extraText={user.receiveNum}
                  iconInfo={{ size: 25, color: '#78A4FA', value: 'check', }}
                />
                <AtListItem
                  title='累计发起任务'
                  extraText={user.sendNum}
                  iconInfo={{ size: 25, color: '#78A4FA', value: 'bell', }}
                />
                <AtListItem
                  title='总星数'
                  extraText={user.star}
                  iconInfo={{ size: 25, color: '#78A4FA', value: 'star', }}
                />
              </AtList>
            </View>
          </View>



          : null
      }



      <View style={CSS.buttons}>
        <AtButton type='primary' onClick={TBD}>修改个人信息</AtButton>
        <AtDivider></AtDivider>
      </View>

      <AtList>
        <AtListItem
          title='关于'
          arrow='right'
          iconInfo={{ size: 25, color: '#78A4FA', value: 'link', }}
          onClick={TBD}
        />
        <AtListItem
          title='重置数据'
          note='beta管理员操作'
          iconInfo={{ size: 25, color: '#FF0000', value: 'reload', }}
          onClick={reset}
        />
      </AtList>

    </View>
  )
}

export default MyInfo