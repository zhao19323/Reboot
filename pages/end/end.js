const app = getApp()

Page({
  data: {
    progressWidth:0,
    progressTime:10,
    mark:true,
    playPausetips:"start"
  },
  btnclick(){
    wx.navigateTo({
      url: '/pages/fullpage/fullpage',
    })
  }
 })
