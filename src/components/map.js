

class LocationMap {
  constructor(latitude, longitude) {
    this.key = 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'
    this.referer = 'HandyDelivery-Wechat'
    this.location = JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
    this.category = '生活服务,娱乐休闲'
    this.chooseLocation = requirePlugin('chooseLocation');

  }

  showChooseLocation() {
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + this.key + '&referer=' + this.referer + '&location=' + this.location + '&category=' + this.category
    });
  }

  

  getLocation() {
    return this.chooseLocation.getLocation()
  }
}

class RouteMap {
  constructor(start, end) {
    this.key = 'R7GBZ-LTQAS-U43OX-6EAWB-2ZFUT-CYFAM'
    this.referer = 'HandyDelivery-Wechat'
    this.category = '生活服务,娱乐休闲'
    this.routePlan = requirePlugin('routePlan')
    this.startPoint = JSON.stringify(start)
    this.endPoint = JSON.stringify(end)
    /*
    this.endPoint = JSON.stringify({  //终点
      'name': '吉野家(北京西站北口店)',
      'latitude': 39.89631551,
      'longitude': 116.323459711
    });
    */
  }

  showRoutePlan() {
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + this.key + '&referer=' + this.referer + '&startPoint=' + this.startPoint + '&endPoint=' + this.endPoint
    });
  }

}

export { LocationMap, RouteMap }