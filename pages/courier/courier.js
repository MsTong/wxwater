// var app = getApp();

// Page({
//   data: {},
//   //下拉刷新
//   onPullDownRefresh: function () {
//   },
//   onReady: function () {

//   },
//   onLoad: function (option) {

//   },
//   toAreaManagement() {
//     wx.navigateTo({ url: '/pages/areaManagement/areaManagement' })
//   }
// })
Page({
  data: {
    contentArr: [{
      title: '我的钱包',
      itemArr: [{
        itemName: '充值',
        imagePath: '/images/mine/recharge.png'
      }, {
        itemName: '余额',
        imagePath: '/images/mine/balance.png'

      }, {
        itemName: '提现',
        imagePath: '/images/mine/withdraw.png'

      }, {
        itemName: '扫一扫',
        imagePath: '/images/mine/sao.png'

      }]
    }, {
      title: '我的订单',
      itemArr: [{
        itemName: '待付款',
        imagePath: '/images/mine/nopay.png'

      }, {
        itemName: '配送中',
        imagePath: '/images/mine/nopay.png'

      }, {
        itemName: '待配送',
        imagePath: '/images/mine/nopay.png'

      }, {
        itemName: '全部订单',
        imagePath: '/images/mine/nopay.png'

      }]
    }, {
      title: '常用服务',
      itemArr: [{
        itemName: '卡包',
        imagePath: '/images/mine/card.png'

      }, {
        itemName: '积分',
        imagePath: '/images/mine/integration.png'

      }, {
        itemName: '设置',
        imagePath: '/images/mine/setting.png'

      }, {
        itemName: '客服',
        imagePath: '/images/mine/service.png'
      }]
    }],
    userInfo: '',
    level: 1,
    weight: wx.getSystemInfoSync().windowWidth - 220
  },
  onLoad: function (options) {

  },
  enterLevel() {

  },
  toaddress() {
    wx.navigateTo({
      url: "/pages/address/address"
    })
  },
  toaddorder() {
    wx.navigateTo({
      url: "/pages/order/order"
    })
  },
  todoingorder() {
    wx.navigateTo({
      url: "/pages/order/doingorder/doingorder"
    })
  },
  towaitorder() {
    wx.navigateTo({
      url: "/pages/order/waitorder/waitorder"
    })
  }
})