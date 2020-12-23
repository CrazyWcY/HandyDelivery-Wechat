import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Image, Text } from '@tarojs/components'
import { AtAvatar, AtInput, AtButton } from 'taro-ui'
import './chat.scss'
import { getCurrentInstance } from '@tarojs/taro'
import SERVICE_URL from '../../service/service'

const Dialog = (props) => {
  const data = props.data
  const goToInfo = () => {
    Taro.navigateTo({
      url: '/pages/personalInfo/personalInfo?id=' + data.id
    })
  }
  return (
    <View className={data.selfSend ? "chat-i" : "chat-i self"} >
      <View className="chat-l" onClick={goToInfo}>
        <AtAvatar circle size="small" image={data.avatar} onClick={goToInfo}></AtAvatar>
      </View>
      <View className="chat-r">
        <View className="chat-name">{data.nickName}</View>
        <View className="chat-text">
          <View className="chat-text-bg">
            {/* <Image src={telIcon} className="tel-img"></Image> */}
            <Text>{data.value}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const ItemLink = (props) => {
  const data = props.data
  const goToInfo = () => {
    Taro.navigateTo({
      url: '/pages/personalInfo/personalInfo?id=' + data.id
    })
  }

  const goToTask = (id) => {
    console.log(id)
    Taro.navigateTo({
      url: '/pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo?id=' + id
    })
  }

  return (
    <View className={data.selfSend ? "chat-i" : "chat-i self"} >
      <View className="chat-l" onClick={goToInfo}>
        <AtAvatar circle size="small" image={data.avatar} onClick={goToInfo}></AtAvatar>
      </View>
      <View className="chat-r">
        <View className="chat-name">{data.nickName}</View>
        <View className="chat-text" onClick={() => goToTask(data.itemId)}>
          <View className="chat-text-bg">
            {/* <Image src={telIcon} className="tel-img"></Image> */}
            <Text>{data.value}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}



const Chat = () => {

  useEffect(() => {
    const id = getCurrentInstance().router.params.id
    wx.request({
      url: SERVICE_URL + '/getUserById?id=' + id,
      method: 'get',
      success: function (res) {
        console.log(res)
        setUser(res.data.data)
      },
      fail: function (res) {
        console.log('error')
      }
    })

    wx.request({
      url: SERVICE_URL + '/getChatListById?id=' + id,
      method: 'get',
      success: function (res) {
        console.log(res)
        setData({
          list: res.data.data
        })
      },

      fail: function (res) {
        console.log('error')
      }
    })
  }, [])

  const [user, setUser] = useState(null)
  const [data, setData] = useState(null)
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (message !== '') {
      console.log(message)

      let newDataList = JSON.parse(JSON.stringify(data))
      newDataList.list.push({
        value: message,
        selfSend: false
      })

      setData(newDataList)
      setMessage('')
    }
  }

  return (
    <View>
      {
        data ?
          <View>
            <ScrollView className="chat-scroll" scrollY style={{ height: (wx.getSystemInfoSync().windowHeight - 100) + 'px' }}>
              <View className="chat-c">
                {
                  data.list.map(item => {
                    if(item.type === 'message') {
                      const messageItem = {
                        id: item.selfSend ? user.id : 'root',
                        nickName: item.selfSend ? user.name : 'WCY',
                        avatar: item.selfSend ? user.avatar : 'https://www.gx8899.com/uploads/allimg/2016062815/yddciyonaq3.jpg',
                        value: item.value,
                        selfSend: item.selfSend
                      }
                      return (<Dialog data={messageItem} />)
                    }
                    else {
                      const messageItem = {
                        id: item.selfSend ? user.id : 'root',
                        nickName: item.selfSend ? user.name : 'WCY',
                        avatar: item.selfSend ? user.avatar : 'https://www.gx8899.com/uploads/allimg/2016062815/yddciyonaq3.jpg',
                        value: '这是一个专属任务链接, 任务id：' + item.taskId,
                        selfSend: item.selfSend,
                        itemId: item.taskId
                      }
                      return (<ItemLink data={messageItem} />)
                    }
                    
                  }
                  )
                }
              </View>
            </ScrollView>

            <View className="footer">
              <View className="input-c">
                <AtInput
                  name='value1'
                  type='text'
                  placeholder='单行文本'
                  value={message}
                  onChange={value => setMessage(value)}
                >
                  <View>
                    <AtButton onClick={sendMessage} >发送</AtButton>
                  </View>

                </AtInput>
              </View>
            </View></View> : null
      }

    </View >
  )
}

export default Chat