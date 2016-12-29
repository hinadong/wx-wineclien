Page({
  data:{
    shopid : '',
    model:[]
  },
  onLoad:function(options){
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
      }
    })
    this.setData({
        shopid:options.id
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.getDataFromServe();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
    //   从服务器获取商品详情数据
  getDataFromServe(){
      var that = this;
      wx.request({
        url: 'http://www.jiuyunda.net:90/api/v2/product/product_details?=56c45924c2fb4e2050000022&product_id=579f083daf48431f98bfc669',
        data: {
            'userinfo_id':'56c45924c2fb4e2050000022',
            'product_id' : that.data.shopid,
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
            that.setData({
                model:res.data
            })
            console.log(that.data.model);
            wx.setNavigationBarTitle({
              title: res.data.product_info.title,
              success: function(res) {
              }
            })
        },
        fail: function() {
            console.log('失败');
        },
        complete: function() {
        }
      })
  }
})