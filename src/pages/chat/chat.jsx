import React, { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View, Image, Text } from '@tarojs/components'
import { AtAvatar, AtInput } from 'taro-ui'
import './chat.scss'


const Dialog = (props) => {
  const data = props.data
  const goToInfo = () => {
    Taro.navigateTo({
      url: '/pages/personalInfo/personalInfo'
    })
  }
  return(
    <View className={data.selfSend?"chat-i":"chat-i self"} >
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

const Chat = () => {
  let [data, setData] = useState({
    list:[{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博真帅',
      selfSend: false,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博yyds',
      selfSend: true,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博真帅',
      selfSend: false,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博yyds',
      selfSend: true,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅',
      selfSend: false,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds',
      selfSend: true,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅',
      selfSend: false,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds王博yyds',
      selfSend: true,
    },{
      nickName: 'IST之光',
      avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
      value: '王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅王博真帅',
      selfSend: false,
    },
  ]
  })

  return(
    <View>
      <ScrollView className="chat-scroll" scrollY>
        <View className="chat-c">
          {data.list.map(item=>
          <Dialog data={item}/>)
          }
        </View>
      </ScrollView>

      <View className="footer">
        <View className="input-c">
          <AtInput
            name='value1'
            type='text'
            placeholder='单行文本'
          // value={this.state.value1}
          // onChange={this.handleChange.bind(this)}
          />
        </View>
        {/* <View className="more-c">
          <View className="more-icon">
            {
              <View>
                <Ionicons className="icon" name="mic-outline"/>
                <Ionicons className="icon" name="mic-outline"/>
                <Ionicons className="icon" name="mic-outline"/>
              </View>
            }
          </View>
        </View> */}
      </View>
    </View >
  )
}

export default Chat