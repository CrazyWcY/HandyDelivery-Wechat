import React, { useEffect, useState } from 'react'

import Taro, { useDidShow } from '@tarojs/taro'
import { View, Picker, Map, Text } from '@tarojs/components'
import { AtButton, AtInputNumber, AtInput, AtList, AtListItem, AtTextarea, AtMessage, AtToast, AtImagePicker } from 'taro-ui'
import { getCurrentInstance } from '@tarojs/taro'


const key = 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'

const referer = 'HandyDelivery-Wechat'

const location = JSON.stringify({
  latitude: 31.0176,
  longitude: 121.43102
})

const category = '生活服务,娱乐休闲'

const chooseLocation = requirePlugin('chooseLocation');

const ConfirmPurchasing = () => {

  const [currId, setCurrId] = useState(null)
  const [formValue, setFormValue] = useState({
    purchasePlace: {
      name: '',
      longitude: null,
      latitude: null
    },
    address: {
      name: '',
      longitude: null,
      latitude: null
    },
    money: 0,
    description: ''
  })

  const [currMap, setCurrMap] = useState(null) // 最近一次选择的地点项目：0-期望采购地点 1-取件地址
  const [toastVisiable, setToastVisiable] = useState(false)
  const [imgFiles, setImgFiles] = useState([])
  const [task, setTask] = useState(null)


  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    setCurrId(id)
    wx.request({
      url: 'http://127.0.0.1:5000/getTask?id=' + id,
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



  const handleSubmit = () => {

    const goBack = () => {
      setToastVisiable(false)
      wx.switchTab({
        url: '/pages/taskPools/taskPools',
        success: function (e) {
          var page = getCurrentPages().pop();
          if (page == undefined || page == null) return;
          page.onLoad();
        }
      })

    }

    for (let val in formValue) {
      console.log(val)
      if (formValue[val] === '') {
        Taro.atMessage({
          'message': '字段' + val + '为空',
          'type': 'error',
        })
        return
      }
    }

    let finalForm = JSON.parse(JSON.stringify(formValue))
    finalForm.id = currId

    console.log(finalForm)

    
    wx.request({
      url: 'http://127.0.0.1:5000/finishPurchasingTask',
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        data: JSON.stringify(finalForm)
      },
      success: function (res) {
        console.log(res)
        setToastVisiable(true)
        setTimeout(goBack, 3000)
      },
      fail: function (res) {
        console.log('error')
      }
    })
  }

  const handleChange = (e, attr) => {
    let newFormValue = JSON.parse(JSON.stringify(formValue))
    newFormValue[attr] = e
    setFormValue(newFormValue)
    return e
  }

  const handleOpenMap = (mapItem) => {
    setCurrMap(mapItem)
    console.log(formValue)
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
  }

  useDidShow(() => {
    const resLocation = chooseLocation.getLocation()

    console.log('loc', resLocation)

    if (resLocation) {
      let newFormValue = JSON.parse(JSON.stringify(formValue))
      currMap === 0 ?
        newFormValue.purchasePlace = {
          // name: resLocation.address + resLocation.name,
          name: resLocation.name,
          longitude: resLocation.longitude,
          latitude: resLocation.latitude
        } :
        newFormValue.address = {
          name: resLocation.name,
          longitude: resLocation.longitude,
          latitude: resLocation.latitude
        }
      console.log(newFormValue)
      setFormValue(newFormValue)
    }
  })

  return (
    <View>
      {
        task ?
          <View>
            <AtMessage />
            <AtToast isOpened={toastVisiable} text="发布成功" status='success'></AtToast>
            <AtInput
              name='title'
              title='任务标题'
              type='text'
              placeholder={task.p_title}
              value={task.p_title}
              editable={false}
            />
            <View onClick={() => handleOpenMap(0)}>
              <AtInput
                name='purchasePlace'
                title='实际采购地点'
                type='text'
                placeholder='点击以选择期望采购地点'
                value={formValue.purchasePlace.name}
                required={true}
              />
            </View>
            <AtInput
              name='itemName'
              title='货品名称'
              type='text'
              placeholder={task.good}
              value={task.good}
              editable={false}
            />
            <AtInput
              name='deadline'
              title='最迟交付日期'
              type='text'
              value={task.deadline}
              editable={false}
            />

            <View onClick={() => handleOpenMap(1)}>
              <AtInput
                name='address'
                title='寄件地址'
                type='text'
                placeholder='点击以选择寄件地址'
                value={formValue.address.name}
                required={true}
              />
            </View>

            <View>
              实际配送金额
              <AtInputNumber
                min={0}
                max={5000}
                step={1}
                value={formValue.money}
                onChange={value => { handleChange(value, 'money') }}
              />
            </View>

            <AtTextarea
              value={formValue.description}
              onChange={value => handleChange(value, 'description')}
              maxLength={200}
              placeholder='输入具体描述'
            />

            <AtButton type='primary' onClick={handleSubmit} >确认完成采购任务</AtButton>
          </View> : null
      }

    </View>
  )
}

export default ConfirmPurchasing