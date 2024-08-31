// pages/swiper/swiper.js
const audio = wx.createInnerAudioContext({});
Page({
  data: {
    progressWidth:0,
    currentIndex: 0,
    progressTime:60,
    mark:true,
    isSheepChecked:false,
    isListenChecked:false,
    isTalkChecked:true,
    isWhiteChecked:false,
    noiseVis:"hidden",
    crossVis:"visible",
    listenVis:"hidden",
    sheepVis:"hidden",
    urls: [
      "../../assets/image/4.gif"
    ],
    now: 0
  },
  onShow: function () {
    // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2C/rBAFJWDkHMiAfXNjAQ4cVDXIS64619.mp3";
    // audio.play();
  },
  onUnload(){
    audio.pause();
  },
  playbtn() {
    let that = this;
    let mark = that.data.mark;
    if (mark){
      that.timer = setInterval(that.run, 200); //that.timer关键点
      that.setData({
        mark:false,
        playPausetips:"stop"
      })
    }else{
      clearInterval(that.timer);
    that.setData({
      mark: true,
      playPausetips: "start"
    })
    }
  },
  changeFn(e){
    console.log(e)
    let current = e.detail
    if(current == 0){
      // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2D/rBAFJWDkKA-AM-oJAPWH4JbNdPg005.mp4";
      // audio.play();
    }else if(current == 1){
      // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2D/rBAFJWDkKjiAK3APAGWkxqFCixw033.mp4";
      // audio.play();
    }else if(current == 2){
      // audio.src = "http://api.ccycloud.cn/demoimage/group1/M00/02/2D/rBAFJWDkKJaAPpVvAPihER14U5U265.mp4";
      // audio.play();
    }
    this.setData({
      now: e.detail
    })
  },
  run(){
    let that = this;
    let totalProgressTime = 60 //秒
    let progressWidth = that.data.progressWidth; //显示进度
    let progressTime = that.data.progressTime; //时间
   
    if (progressWidth === 100) {
    wx.showToast({
    title: '结束回调处理',
    })
    clearInterval(that.timer);
    //wx.navigateTo({
    wx.redirectTo({
      url: '/pages/end/end',
    })
    return;
    }
    progressTime--;
    progressWidth = (totalProgressTime - progressTime) * (100 / 60)
    that.setData({
    progressWidth: progressWidth,
    progressTime: progressTime
    })
  },
  crossclick(e){
      this.setData({
        crossVis:"visible",
        noiseVis: "hidden",
        sheepVis:"hidden",
        listenVis:"hidden",
        isSheepChecked:false,
        isListenChecked:false,
        isTalkChecked:true,
        isWhiteChecked:false
       })
    // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2C/rBAFJWDkHMiAfXNjAQ4cVDXIS64619.mp3";
    //audio.play();
  },
  noiseclick(e){
    this.setData({
      noiseVis: "visible",
      crossVis:"hidden",
      sheepVis:"hidden",
      listenVis:"hidden",
      isSheepChecked:false,
      isListenChecked:false,
      isTalkChecked:false,
      isWhiteChecked:true,
      })
    // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2D/rBAFJWDkKA-AM-oJAPWH4JbNdPg005.mp4";
    // audio.play();
  },
  listenclick(e){
      this.setData({
        noiseVis: "hidden",
        crossVis:"hidden",
        sheepVis:"hidden",
        listenVis:"visible",
        isSheepChecked:false,
        isListenChecked:true,
        isTalkChecked:false,
        isWhiteChecked:false
       })
    // audio.src = "http://api.ccycloud.cn/demoimage/group1/M00/02/2C/rBAFJWDkHMeAO8qiAGqz3q5UYFg368.mp3";
    // audio.play();
  },
  sheepclick(e){
    this.setData({
      noiseVis: "hidden",
      crossVis:"hidden",
      listenVis:"hidden",
      sheepVis:"visible",
      isSheepChecked:true,
      isListenChecked:false,
      isTalkChecked:false,
      isWhiteChecked:false
      })
    // audio.src = "http://api.ccycloud.cn/demoimage/group1/M01/02/2C/rBAFJWDkHMWAEExzAAPsfhnNEhk648.m4a";
    // audio.play();
  }
 })
