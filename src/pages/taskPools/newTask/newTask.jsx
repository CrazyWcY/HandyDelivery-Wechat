import React, { useEffect, useState } from 'react'

import Taro, { useDidShow } from '@tarojs/taro'
import { View, Picker, Map, Text } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtList, AtListItem, AtTextarea, AtMessage, AtToast } from 'taro-ui'

const key = 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'

const referer = 'HandyDelivery-Wechat'

const location = JSON.stringify({
  latitude: 31,
  longitude: 121
})

const category = '生活服务,娱乐休闲'

const chooseLocation = requirePlugin('chooseLocation');


const NewTask = () => {

  const [formValue, setFormValue] = useState({
    title: '',
    itemName: '',
    purchasePlace: '',
    deadLine: '2020-12-09',
    address: '',
    phone: '',
    description: ''
  })

  const [lastMapInput, setLastMapInput] = useState('purchasePlace')

  const [toastVisiable, setToastVisiable] = useState(false)

  const handleSubmit = () => {

    const goBack = () => {
      setToastVisiable(false)
      wx.switchTab({url: '/pages/taskPools/taskPools'})
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
    setToastVisiable(true)
    console.log(formValue)

    setTimeout(goBack, 3000)
  }

  const handleChange = (e, attr) => {
    let newFormValue = formValue
    newFormValue[attr] = e
    setFormValue(newFormValue)
    return e
  }

  const handleOpenMap = (mapInput) => {
    console.log(formValue)
    setLastMapInput(mapInput)
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
    });
  }

  useDidShow(() => {
    const resLocation = chooseLocation.getLocation()
    console.log(resLocation)
    if (resLocation) {
      let newFormValue = formValue
      newFormValue[lastMapInput] = resLocation.address + resLocation.name
      console.log(newFormValue)
      setFormValue(newFormValue)
    }
  })


  return (
    <View>
      <AtMessage />
      <AtToast isOpened={toastVisiable} text="发布成功" status='success'></AtToast>
      <AtInput
        name='title'
        title='任务标题'
        type='text'
        placeholder='任务标题'
        value={formValue.title}
        onChange={value => handleChange(value, 'title')}
        required={true}
      />
      <AtInput
        name='purchasePlace'
        title='期望采购地点'
        type='text'
        placeholder='期望采购地点'
        value={formValue.purchasePlace}
        onChange={value => handleChange(value, 'purchasePlace')}
        required={true}
      />
      <AtInput
        name='itemName'
        title='货品名称'
        type='text'
        placeholder='货品名称'
        value={formValue.itemName}
        onChange={value => handleChange(value, 'itemName')}
        required={true}
      />
      <Picker mode='date' onChange={value => handleChange(value.detail.value, 'deadLine')}>
        <AtList>
          <AtListItem title='期望交付日期' extraText={formValue.deadLine} />
        </AtList>
      </Picker>

      <AtInput
        name='address'
        title='取件地址'
        type='text'
        placeholder='取件地址'
        value={formValue.address}
        onChange={value => handleChange(value, 'address')}
        required={true}
      />
      <AtInput
        name='phone'
        title='联系电话'
        type='value6'
        placeholder='联系电话'
        value={formValue.phone}
        onChange={value => handleChange(value, 'phone')}
        required={true}
      />
      <AtTextarea
        value={formValue.description}
        onChange={value => handleChange(value, 'description')}
        maxLength={200}
        placeholder='输入具体描述'
      />
      <AtButton onClick={handleOpenMap}>TEST:转到地点选择</AtButton>
      <AtButton type='primary' onClick={handleSubmit}>发布</AtButton>
      <AtButton onClick={handleSubmit}>发布专属任务</AtButton>
    </View>
  )
}

export default NewTask