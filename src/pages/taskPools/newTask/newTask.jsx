import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Picker, Map } from '@tarojs/components'
import { AtButton, AtForm, AtInput, AtList, AtListItem } from 'taro-ui'


const NewTask = () => {

  const [formValue, setFormValue] = useState({
    title: '',
    itemName: '',
    purchasePlace: '',
    deadLine: '2020-12-09',
    address: '',
    phone: ''
  })

  const handleSubmit = () => {
    console.log(formValue)
  }

  const handleChange = (e, attr) => {
    let newFormValue = formValue
    newFormValue[attr] = e
    setFormValue(newFormValue)
    return e
  }


  return (
    <View>
      <AtForm>
        <AtInput
          name='title'
          title='任务标题'
          type='text'
          placeholder='任务标题'
          value={formValue.title}
          onChange={value => handleChange(value, 'title')}
        />
      </AtForm>
      <AtForm>
        <AtInput
          name='itemName'
          title='货品名称'
          type='text'
          placeholder='货品名称'
          value={formValue.itemName}
          onChange={value => handleChange(value, 'itemName')}
        />
      </AtForm>
      <AtForm>
        <AtInput
          name='purchasePlace'
          title='期望采购地点'
          type='text'
          placeholder='期望采购地点'
          value={formValue.purchasePlace}
          onChange={value => handleChange(value, 'purchasePlace')}
        />
      </AtForm>
      <Picker mode='date' onChange={value => handleChange(value.detail.value, 'deadLine')}>
        <AtList>
          <AtListItem title='期望交付日期' extraText={formValue.deadLine} />
        </AtList>
      </Picker>
      <AtForm>
        <AtInput
          name='address'
          title='取件地址'
          type='text'
          placeholder='取件地址'
          value={formValue.address}
          onChange={value => handleChange(value, 'address')}
        />
      </AtForm>
      <AtForm>
        <AtInput
          name='phone'
          title='联系电话'
          type='value6'
          placeholder='联系电话'
          value={formValue.phone}
          onChange={value => handleChange(value, 'phone')}
        />
      </AtForm>
      <Map />
      <AtButton onClick={handleSubmit}>发布</AtButton>
      <AtButton type='primary' onClick={handleSubmit}>发布专属任务</AtButton>
    </View>
  )
}

export default NewTask