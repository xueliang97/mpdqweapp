// import requestUrl from './utils/util.js'
App({

  data: {
    deviceInfo: {}
  },
  onLaunch: function () {
    this.data.deviceInfo = wx.getSystemInfoSync();
    console.log(this.data.deviceInfo);
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  /*onLaunch: function () {
    // 登录;用户打开小程序时，会调用wx.login获取code，将code发送到后台获取openid。后台保存opendi并返回用户信息
    //（首次登录信息为空，非首次登录信息存在）
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          requestUrl.requestUrl({
            url:  "" ,
            params: {
              code: res.code
            },
            method: "post",
          })   
            .then((data) => {//then接收一个参数，是函数，并且会拿到我们在requestUrl中调用resolve时传的的参数
              console.log(data);//返回openId
              this.globalData.openId = res.openId;
            })
            .catch((errorMsg) => {
              console.log(errorMsg)
            })
        }
      }
    })  
    
  },*/

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  globalData: {
    userInfo: "",//用户信息
    openId: "",//登录用户的唯一标识
    appid: 'wx242f88b4c25643c2',//appid  
    secret: 'e0dassda466b98dd75bac9ad5b760218075b0577def2424234209bwXXXXXXXXXXXXXX',//secret秘钥
  },

  appData:{
    userinfo : null
  }
})
