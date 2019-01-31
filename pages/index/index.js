// pages/index/index.js
const moment = require('moment');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    time: '',
    five: 5,
    numberList: [1,2,3,4,5],
    list: ['周杰伦', '林俊杰', '文章', '古天乐', 'ttamm'],
    componentClick: function (t) {
      console.log('组件被点击,并且组件传出了{' + t + '}参数');
      wx.showToast({
        title: '组件被点击,并且组件传出了{' + t + '}参数',
        icon: 'none',
      });
    },
    position: {
      top: 0,
      bottom: 0,
    },
    scrollTop: 0,
  },

  showTime: function () {
    const time = moment().format('hh:mm:ss');
    this.setData({
      time,
    });
    setTimeout(this.showTime, 500);
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('路径是', this.route);
    this.showTime();    
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

  onPageScroll: function () {
    const query = this.createSelectorQuery();
    const $dom = query.select('#cur-dom');
    const _this = this;
    $dom.boundingClientRect(function (res) {
      _this.setData({
        position: {
          ..._this.data,
          top: res.top,
          bottom: res.bottom,
        }
      });
      console.log(res);
    });
    query.selectViewport().scrollOffset(function (res) {
      console.log('滚动信息', res);
      _this.setData({
        scrollTop: res.scrollTop,
      });
    });
    query.exec();
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
    console.log('我下拉了');
    wx.stopPullDownRefresh();
  },
  clickFun: function (e) {
    console.log(e);
    const a =e.target.dataset.a;
    wx.showToast({
      title: a,
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('我被上拉了');
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})