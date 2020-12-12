import React, { useEffect, useState } from 'react'
import { AtTabBar, AtFab } from 'taro-ui'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import DeliveryTaskPool from './deliveryTaskPool/deliveryTaskPool'
import PurchasingTaskPool from './purchasingTaskPool/purchasingTaskPool'

const TaskPools = () => {

  const [current, setCurrent] = useState(0)

  const contents = [
    <PurchasingTaskPool />,
    <DeliveryTaskPool />
  ]

  const handleClick = () => {
    Taro.navigateTo({
      url: '/pages/taskPools/newTask/newTask'
    })
  }

  return (
    <View>
      <View style={{ fontWeight: 'bold' }}>
        <AtTabBar
          tabList={[
            { title: '采购任务' },
            { title: '配送任务' }
          ]}
          onClick={e => setCurrent(e)}
          current={current}
          swipeable={true}
        />
      </View>
      {
        contents[current]
      }
      <View style={{ position: 'fixed', bottom: '30px', right: '30px' }}>
        <AtFab onClick={handleClick}>
          <Text className='at-fab__icon at-icon at-icon-add'></Text>
        </AtFab>
      </View>
    </View>


  )
}

export default TaskPools