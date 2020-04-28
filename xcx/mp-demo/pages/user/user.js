const app = getApp()

const { header, avatar } = app.config.images
const { groups } = app.config.pages['user.user']

Page({
  data: {
    header,
    avatar,
    groups,
    hasUserInfo: false,
    userInfo: null
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: app.globalData.userInfo
      })
    }
  }
})