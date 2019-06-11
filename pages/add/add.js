// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgWidth: 0, imgHeight: 0,
    note: [
      {
        title: 'H1421',
        url: '/images/bulb1.jpg',
      },
      {
        title: '5764-LED',
        url: '/images/bulb2.jpg',
      },
      {
        title: 'H1691',
        url: '/images/bulb3.jpg',
      },
      {
        title: '5702-LED',
        url: '/images/bulb4.jpg',
      },
      {
        title: '2811-COB',
        url: '/images/bulb5.jpg'
      },

      {
        title: '2691-LED',
        url: '/images/bulb6.jpg'
      },
      {
        title: '2721-LED',
        url: '/images/bulb7.jpg'
      },
      {
        title: 'H6013',
        url: '/images/bulb8.jpg'
      },
      {
        title: 'H261-500',
        url: '/images/bulb9.jpg'
      }
    ]
  },

  //点击事件
  ballClickEvent: function (e) {
    // wx.navigateTo({
    //   // url: '/pages/adjust/adjust',
    //   // this.Modal=this.selectComponent("#modal");
    // })
    this.Modal.showModal();
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Modal=this.selectComponent("#modal");
  },
  _cancelEvent:function(){
    this.Modal.hideModal();
  },
  _confirmEventFirst:function(){
    this.Modal.hideModal();
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