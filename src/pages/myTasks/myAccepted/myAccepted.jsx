import React, { useEffect, useState } from 'react'
import { AtSegmentedControl } from 'taro-ui'
import { View, Text } from '@tarojs/components'

const MyAccepted = () => {

  const [current, setCurrent] = useState(0)

  const contents = [
  ]

  return (
    <View>
      <AtSegmentedControl
        values={['采购任务', '配送任务']}
        onClick={e => setCurrent(e)}
        current={current}
      />
    </View>
  )
}

export default MyAccepted