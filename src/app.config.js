export default {
  pages: [
    'pages/index/index',
    'pages/taskPools/taskPools',
    'pages/myTasks/myTasks',
    'pages/myInfo/myInfo',
    'pages/taskPools/purchasingTaskPool/purchasingTask/purchasingTaskInfo',
    'pages/taskPools/deliveryTaskPool/deliveryTask/deliveryTaskInfo',
    'pages/taskPools/newTask/newTask',
    'pages/myTasks/myPosted/myPostedItem',
    'pages/myTasks/myAccepted/delivery/myAcceptedDeliveryItem',
    'pages/myTasks/myAccepted/purchasing/myAcceptedPurchasingItem',
    'pages/test/test'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#74BDAC',
    navigationBarTitleText: '随手递',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    "list": [
      {
        "pagePath": 'pages/taskPools/taskPools', //此处路径要写不带 ‘/’的
        "text": "任务池",            //tab名字
        "iconPath": 'icons/nav-list.png',
        "selectedIconPath": 'icons/nav-list.png'
      },
      {
        "pagePath": 'pages/myTasks/myTasks', //此处路径要写不带 ‘/’的
        "text": "我的任务",            //tab名字
        "iconPath": 'icons/calculator.png',
        "selectedIconPath": 'icons/calculator.png'
      },
      {
        "pagePath": 'pages/myInfo/myInfo', //此处路径要写不带 ‘/’的
        "text": "我的",            //tab名字
        "iconPath": 'icons/user center.png',
        "selectedIconPath": 'icons/user center.png'
      },
    ],
    "position": "bottom",  //tabBar的位置 top 或 bottom
    "custom": false  //自定义tabBar时为true
  },
  plugins: {
    "chooseLocation": {
      "version": "1.0.5",
      "provider": "wx76a9a06e5b4e693e"
    },
    "routePlan": {
      "version": "1.0.8",
      "provider": "wx50b5593e81dd937a"
    }
  },

  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序定位"
    }
  }
}
