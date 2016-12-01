Page({
  data:{
    dataSource:[],
    product_group_id:'',
    title:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.par);
    this.setData({
        product_group_id:options.par,
        title:options.title
    })
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title
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
  reduceImageClick(par){
     var index = parseInt(par.currentTarget.id);
     var obj = this.data.dataSource[index];
     console.log(obj)
     if (obj.buy > 0){
       obj.buy -= 1;
       this.setData({
          dataSource:this.data.dataSource
      })
     }
     
  },
  addImageDidClick(par){
    var index = parseInt(par.currentTarget.id);
    var obj = this.data.dataSource[index];
    if (obj.buy < obj.stock){
       obj.buy += 1;
     }else{
       wx.showToast({
         title:"库存不足",
          duration:2000,
       });
     }
    this.setData({
      dataSource:this.data.dataSource
    })
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
          for(var i = 0 ; i < res.data.length;i++){
            var obj = res.data[i];
            obj.buy = parseInt(0);
          }

          that.setData({
              dataSource:res.data,
          })
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