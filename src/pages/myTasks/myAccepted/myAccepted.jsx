import React, { useEffect, useState } from 'react'
import { AtSegmentedControl } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import MyAcceptedPurchasing from './purchasing/myAcceptedPurchasing'
import MyAcceptedDelivery from './delivery/myAcceptedDelivery'

const MyAccepted = () => {

  const [current, setCurrent] = useState(0)

  const contents = [
    <MyAcceptedPurchasing />,
    <MyAcceptedDelivery />
  ]

  return (
    <View>
      <View className='at-row at-row__justify--center'>
        <View className='at-col' style={{ margin: '0 2% 0 2%' }}>
          <AtSegmentedControl
            values={['采购任务', '配送任务']}
            onClick={e => setCurrent(e)}
            current={current}
          />
        </View>
      </View>
      {
        contents[current]
      }
    </View>
  )
}

export default MyAccepted