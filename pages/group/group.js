Page({
  data:{
    dataSource:[],
    product_group_id:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.par);
    this.setData({
        product_group_id:options.par
    })
    this.getDataFromServe();
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
//   获取商品分组数据
  getDataFromServe(){
      if(this.data.product_group_id.length == 0){
          wx.showToast({
              title:"参数错误",
              duration:2000,
          })
      }
      var that = this;
      wx.request({
        url: 'http://www.jiuyunda.net:90/api/v1/HomePage/product_group_product_list',
        data: {
            "product_group_id":that.data.product_group_id,
            "sort_type":0
        },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
            that.setData({
                dataSource:res.data,
            })
            console.log(that.data.dataSource)
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  }
})