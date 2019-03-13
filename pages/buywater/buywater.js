// pages/buywater/buywater.js
const { $Toast } = require('../../dist/base/index');
const api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddress:true,
    count:0,
    type:'山泉水桶装水'
  },
  selectAddress() {
    wx.navigateTo({ url: '/pages/address/address' })
  },
  handleChange({ detail }) {
    this.setData({
      count: detail.value
    })
  },
  toOrder() {
    let params = {
      count:this.data.count,
      type: this.data.type
    }
    api._get('customer/orderWater',params).then(res => {
      if (res.code !== 0) {
        $Toast({
          content: res.msg
        });
      }
      this.setData({ defaultAddress: res.data.addressList[0] })
    }).catch(e => {
      $Toast({
        content: e
      });
      console.log(e)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._get('customer/getAddressList').then(res => {
      if (res.code !== 0) {
        $Toast({
          content: res.msg
        });
      }
      this.setData({ defaultAddress: res.data.addressList[0] })
    }).catch(e => {
      $Toast({
        content: e
      });
      console.log(e)
    })

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