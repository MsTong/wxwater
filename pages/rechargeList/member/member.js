// pages/rechargeList/rechargeList.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowItem:{
      title:'111',
      subtitle:'222',
      money:111,
      type:'member'
    }
  },
  toPurchase(event) {
    wx.navigateTo({
      url: '/pages/rechargeList/member/memberPay/memberPay'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.data.nowItem) {
      this.setData({ nowItem: app.data.nowItem})
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})