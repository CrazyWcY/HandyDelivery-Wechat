import { View, Text } from '@tarojs/components'
import './boxCard.scss'
import { AtNavBar, AtAvatar, AtInput, AtBadge } from 'taro-ui'

const BoxCard = () => {
  return (
    <View className="boxcard-c">
      <View className="boxcard-l">
        <AtAvatar circle size="18" image={data.avatar}></AtAvatar>
      </View>
      <View className="boxcard-r">
        <View className="boxcard-n">{data.name}</View>
        <View className="boxcard-v">{data.text}</View>
      </View>
      {/* <View className="boxcard-t">
        {children}
      </View> */}
    </View>
  )
}

export default BoxCard