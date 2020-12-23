import React, { useEffect, useState } from 'react'

import Taro, { useDidShow } from '@tarojs/taro'
import { View, Picker, Button } from '@tarojs/components'
import { AtButton, AtInputNumber, AtInput, AtList, AtListItem, AtTextarea, AtMessage, AtToast, AtImagePicker, AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import SERVICE_URL from '../../../service/service'
import ChooseFriend from './chooseFriend'

const key = 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'

const referer = 'HandyDelivery-Wechat'

const location = JSON.stringify({
  latitude: 31.0176,
  longitude: 121.43102
})

const category = '生活服务,娱乐休闲'

const chooseLocation = requirePlugin('chooseLocation');

const NewTask = () => {

  const [formValue, setFormValue] = useState({
    title: '',
    itemName: '',
    purchasePlace: {
      name: '',
      longitude: null,
      latitude: null
    },
    deadLine: '2020-12-09',
    address: {
      name: '',
      longitude: null,
      latitude: null
    },
    money: 0,
    phone: '',
    description: '',
    imgFiles: []
  })

  const [currMap, setCurrMap] = useState(null) // 最近一次选择的地点项目：0-期望采购地点 1-取件地址
  const [toastVisiable, setToastVisiable] = useState(false)
  const [modalVisiable, setModalVisiable] = useState(false) // 控制专项任务好友选择框
  const [imgFiles, setImgFiles] = useState([])
  const [friend, setFriend] = useState(null) // 专项任务选择的好友信息


  const handleSubmit = (special = false) => {

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

    console.log(formValue)

    if (special===true) {
      console.log('special submit')
      setModalVisiable(true)
    }
    else {
      wx.request({
        url: SERVICE_URL + '/createNewTask',
        method: 'post',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          data: JSON.stringify(formValue)
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
      <AtMessage />
      <AtToast isOpened={toastVisiable} text="发布成功" status='success'></AtToast>
      <AtModal isOpened={modalVisiable}>
        <AtModalHeader>选择好友</AtModalHeader>
        <AtModalContent>
          <ChooseFriend changeFriend={setFriend} formValue={formValue}></ChooseFriend>
        </AtModalContent>
        <AtModalAction> <Button onClick={() => { setModalVisiable(false) }}>取消</Button> </AtModalAction>
      </AtModal>
      <AtInput
        name='title'
        title='任务标题'
        type='text'
        placeholder='任务标题'
        value={formValue.title}
        onChange={value => handleChange(value, 'title')}
        required={true}
      />
      <View onClick={() => handleOpenMap(0)}>
        <AtInput
          name='purchasePlace'
          title='期望采购地点'
          type='text'
          placeholder='点击以选择期望采购地点'
          value={formValue.purchasePlace.name}
          // onChange={value => handleChange(value, 'purchasePlace')}
          required={true}
        />
      </View>
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
      <View onClick={() => handleOpenMap(1)}>
        <AtInput
          name='address'
          title='取件地址'
          type='text'
          placeholder='取件地址'
          value={formValue.address.name}
          required={true}
        />
      </View>
      <View>
        预期金额
        <AtInputNumber
          min={0}
          max={5000}
          step={1}
          value={formValue.money}
          onChange={value => { handleChange(value, 'money') }}
        />
      </View>

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
      <AtImagePicker
        files={imgFiles}
        onChange={files => { setImgFiles(files); handleChange(files, 'imgFiles') }}
        count={3}
        length={3}
        multiple={true}
      />
      <AtButton type='primary' onClick={handleSubmit}>发布</AtButton>
      <AtButton onClick={() => handleSubmit(true)}>发布专属任务</AtButton>
    </View>
  )
}

export default NewTask