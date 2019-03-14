Page({
  data: {
    contentArr: [{
      title: '我的钱包',
      itemArr: [{
        itemName: '充值',
        imagePath: '/images/mine/recharge.png',
        url:'/pages/myWallet/recharge/recharge'
      }, {
        itemName: '余额',
        imagePath: '/images/mine/balance.png',
        url: '/pages/order/order'

      }, {
        itemName: '提现',
        imagePath: '/images/mine/withdraw.png',
          url: '/pages/order/order'


      }, {
        itemName: '扫一扫',
        imagePath: '/images/mine/sao.png'

      }]
    }, {
      title: '我的订单',
      itemArr: [{
        itemName: '待配送',
        imagePath: '/images/mine/nopay.png',
        url: '/pages/order/order?current=1'


      }, {
        itemName: '配送中',
        imagePath: '/images/mine/sending.png',
          url: '/pages/order/order?current=2'


      }, {
        itemName: '已完成',
        imagePath: '/images/mine/nosend.png',
          url: '/pages/order/order?current=3'


      }, {
        itemName: '全部订单',
        imagePath: '/images/mine/nopay.png',
          url: '/pages/order/order?current=0'
      }]
    }, {
      title: '常用服务',
      itemArr: [{
        itemName: '卡包',
        imagePath: '/images/mine/card.png',
        url: '/pages/cardBag/cardBag'
      }, {
        itemName: '积分',
        imagePath: '/images/mine/integration.png'

      }, {
        itemName: '设置',
        imagePath: '/images/mine/setting.png',
        url: '/pages/setting/setting'

      }, {
        itemName: '客服',
        imagePath: '/images/mine/service.png'
      }]
    }],
    userInfo: '',
    level:1,
    weight: wx.getSystemInfoSync().windowWidth - 220
  },
  onLoad: function (options) {

  },
  enterLevel() {
  },
  toDetail(event) {
    console.log(event)
    const jumpUrl = event.currentTarget.dataset.item.url
    wx.navigateTo({
      url: jumpUrl
    })
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