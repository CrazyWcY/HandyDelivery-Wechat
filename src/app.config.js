export default {
  pages: [
    'pages/index/index',
    'pages/taskPools/taskPools',
    'pages/myTasks/myTasks',
    'pages/myInfo/myInfo',
    'pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo',
    'pages/taskPools/newTask/newTask',
    'pages/test/test',
    'pages/message/message',
    "pages/personalInfo/personalInfo",
    "pages/chat/chat",

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "list": [
      {
        "pagePath": 'pages/taskPools/taskPools', //此处路径要写不带 ‘/’的
        "text": "任务池",            //tab名字
      },
      {
        "pagePath": 'pages/message/message',
        "text": "消息",
      },
      {
        "pagePath": 'pages/myTasks/myTasks', //此处路径要写不带 ‘/’的
        "text": "我的任务",            //tab名字
      },
      {
        "pagePath": 'pages/myInfo/myInfo', //此处路径要写不带 ‘/’的
        "text": "我的",            //tab名字
      },
    ],
    "position": "bottom",  //tabBar的位置 top 或 bottom
    "custom": false  //自定义tabBar时为true
  }
}
