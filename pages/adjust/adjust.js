// pages/adjust/adjust.js
//获取应用实例
// const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switchBtn: true,
    sliderVal: 80,
    itemClass: 'circular',
    slideClass: 's_line',
    blockColor: '#507cd8'
  },


  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switchBtn': detail.value
    })
    if (detail.value) {
      this.setData({ itemClass: 'circular', slideClass: 's_line', sliderVal: 80, blockColor: '#507cd8' })
    } else {
      this.setData({ itemClass: 'circular_active', slideClass: 's_line_active', sliderVal: 0, blockColor: '#999' })
    }
  },
  ligth(e) {
    if (this.data.switchBtn) {
      if (e.currentTarget.dataset.lighteness == 1) {
        this.setData({ sliderVal: 30 })
      } else {
        this.setData({ sliderVal: 75 })
      }
    }
  }
})
