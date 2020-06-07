//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    recommendlist: null,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    iconList: [{
      icon: 'chat-o',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'like-o',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'phone-o',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'phone-o',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'phone-o',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'phone-o',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }, {
      icon: 'point-gift-o',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'phone-o',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'phone-o',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'phone-o',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
  },
  luyou: function () {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  //事件处理函数
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: "http://152.136.185.210:8000/api/n3/home/multidata", //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          recommendlist: res.data.data.recommend.list
        });
      },
    })
  },
})
