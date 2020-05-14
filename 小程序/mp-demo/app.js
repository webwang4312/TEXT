const config = require('./config/index')

const globalData = {
  userInfo: null
}

App({
  onLaunch: function() {
    // console.log('生命周期回调：监听小程序初始化')

    wx.login({
      success: res => {
        // console.log('wx.login', res)
      }
    })
    
    wx.getSetting({
      success: res => {
        // console.log('getSetting', res)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow() {
    console.log('生命周期回调：监听小程序启动或切前台')
  },
  onHide() {
    console.log('生命周期回调：监听小程序切后台')
  },
  onError() {
    console.log('错误监听函数')
  },
  onPageNotFound() {
    console.log('页面不存在监听函数')
  },
  onUnhandledRejection() {
    console.log('页面不存在监听函数')
  },
  globalData,
  config
})