import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import SERVICE_URL from '../../../service/service'

const ChooseFriend = (props) => {

  const [data, setData] = useState([])

  useEffect(() => {
    wx.request({
      url: SERVICE_URL + '/getFriendsById?id=root',
      method: 'get',
      success: function (res) {
        console.log(res)
        setData(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  const handleSubmit = (friend) => {
    let newFormValue = JSON.parse(JSON.stringify(props.formValue))
    newFormValue.special_user = friend
    console.log(newFormValue)
    wx.request({
      url: SERVICE_URL + '/createNewSpecialTask',
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        data: JSON.stringify(newFormValue)
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }

  return (
    <AtList>
      {
        data.map(item => <AtListItem
          title={item.name}
          note={item.signature}
          thumb={item.avatar}
          onClick={() => handleSubmit(item)}
        />)
      }

    </AtList>
  )
}

export default ChooseFriend
