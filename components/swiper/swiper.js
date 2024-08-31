// components/swiper/swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // v: String

    imgs: Array


  },

  /**
   * 组件的初始数据
   */
  data: {

    current: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    change(e){
      this.setData({
        current: e.detail.current
      });
      this.triggerEvent("c", e.detail.current);
    }
  }
})
