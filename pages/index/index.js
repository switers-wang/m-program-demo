// pages/index/index.js
import moment from 'moment';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: '',
    five: 5,
    list: ['周杰伦', '林俊杰', '文章', '古天乐', 'ttamm']
  },
  showTime: () => {
    for(;;) {
      setTimeout(() => {
        const time = moment().format('YYYY-MM-DD');
        this.setData({
          time,
        });
      }, 900);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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