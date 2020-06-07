const app = getApp()

const { header, logo } = app.config.images

Page({
  data: {
   
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      hasUserInfo: true
    })

    // 切换至用户首页
    this.switchToIndex()
  },
  switchToIndex: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})