import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useEffect, useState } from 'react'
import { AtAvatar, AtIcon, AtButton, AtCard } from 'taro-ui'
import './personalInfo.scss'
import { getCurrentInstance } from '@tarojs/taro'
import SERVICE_URL from '../../service/service'

const taskList = [
    <AtCard
        title='同济大学文化衫'
        thumb='https://tse3-mm.cn.bing.net/th/id/OIP.nddWJ7oK3q7HNj-Jn_HozQAAAA?pid=Api&rs=1'
    >
        求购同济大学文化衫
    </AtCard>,
    <AtCard
        title='复旦大学纪念册'
        thumb='https://tse3-mm.cn.bing.net/th/id/OIP.nddWJ7oK3q7HNj-Jn_HozQAAAA?pid=Api&rs=1'
    >
        求购复旦大学纪念册
    </AtCard>,
    <AtCard
        title='上交马克杯'
        thumb='https://tse3-mm.cn.bing.net/th/id/OIP.nddWJ7oK3q7HNj-Jn_HozQAAAA?pid=Api&rs=1'
    >
        上交校庆礼品
    </AtCard>,
    <AtCard
        title='上交电院纪念衫'
        thumb='https://tse3-mm.cn.bing.net/th/id/OIP.nddWJ7oK3q7HNj-Jn_HozQAAAA?pid=Api&rs=1'
    >
        求上交电院迎新会纪念T恤
    </AtCard>
]


const PersonalInfo = () => {
    let [user, setUser] = useState({
        name: 'IST之光',
        avatar: 'http://ist.sjtu.edu.cn/getpic/20200907134805552_wangchongyu.png',
        signature: '王博yyds，大家都知道',
        address: '软件学院 | IST',
        receiveNum: 124,
        sendNum: 512
    })

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
    }, [])


    const goToChat = () => {
        Taro.navigateTo({
            url: '/pages/chat/chat'
        })
    }

    return (
        <View>
            <View className="upper-info">
                <AtAvatar size="large" circle image={user.avatar}></AtAvatar>
                <View className="upper-name">{user.name}</View>
                <View className="upper-school">{user.school}</View>
                <View className="orders">
                    <text>接单</text>
                    <View className="num">{user.receiveNum}</View>
                    <text>发单</text>
                    <View className="num">{user.sendNum}</View>
                    <text>累计星数</text>
                    <View className="num">{user.star}</View>
                </View>
            </View>
            <View className="lower">
                <View className="middle-box">
                    <View className="title">
                        <View className="title-text">个性签名</View>
                    </View>
                    <View className="content">
                        <View>{user.signature}</View>
                    </View>
                </View>
            </View>

            <View className="lower" style={{marginBottom: '250px'}}>
                <View className="task-box">
                    <View className="title">
                        <View className="title-text">历史任务</View>
                    </View>
                    <View className="task-area">
                        {
                            taskList.map(item => (
                                <View style={{ marginBottom: '2%' }}>
                                    {item}
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>

            <View className="footer">
                <AtButton disabled={true} type='primary'> 已关注 </AtButton>
            </View>
        </View>
    )
}

export default PersonalInfo