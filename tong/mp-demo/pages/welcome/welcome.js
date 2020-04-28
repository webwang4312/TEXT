const app = getApp()

Page({
  data: {
    header: app.images.header,
    logo: app.images.logo
  },
  getUserInfo: function (e) {
    console.log(e)
    
    app.globalData.userInfo = e.detail.userInfo

    // 切换至用户首页
    wx.switchTab({
      url: '/pages/index/index',
      // url: '../index/index',
    })
  }
})