// miniprogram/pages/profile/profile.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log(this.data)
  },



  getInfo: function(e) {
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })




  }
})