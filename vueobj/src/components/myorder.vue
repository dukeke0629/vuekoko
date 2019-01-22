<template>
  <div id="user-b">
    <!--html5 nav-->
    <nav class="j-nav navbar">
      <div class="logo fl">
        <a href="user.html"></a>
      </div>
      <span class="user-title">我的订单</span>
      <div class="shopping-cart fr">
        <a href="index.html"></a>
      </div>
    </nav>
    <div class="myorder-tab">
      <div class="myorder-nav">
        <ul id="tab_btn" class="coupon-list">
          <li class="pick">全部订单</li>
          <li>
            <span class="bar"></span>待付款
          </li>
          <li>
            <span class="bar"></span>待收货
          </li>
        </ul>
        <div class="cl"></div>
      </div>
      <div class="myorder-content">
        <ul>
          <li class="mc-all cc-one tab_content show">
            <ul>
              <li>
                <a href="orderdetails.html">
                  <div class="mc-sum-box">
                    <div class="myorder-sum fl">
                      <img src="../assets/images/pay1.jpg">
                    </div>
                    <div class="myorder-text">
                      <h1>越南进口白肉火龙果</h1>
                      <h2>规格：2个装</h2>
                      <div class="myorder-cost">
                        <span>数量:1</span>
                        <span class="mc-t">￥14.00/件</span>
                      </div>
                    </div>
                  </div>
                  <div class="mc-sum-Am">
                    共1件商品，免运费
                    <span>
                      实付：
                      <span class="mc-t">￥14.00</span>
                    </span>
                  </div>
                  <h3>已付款，已发货</h3>
                </a>
              </li>
              <li>
                <div class="mc-sum-box">
                  <div class="myorder-sum fl">
                    <img src="../assets/images/myorder2.jpg">
                  </div>
                  <div class="myorder-text">
                    <h1>优选越南青皮金煌芒果</h1>
                    <h2>规格：4斤装</h2>
                    <div class="myorder-cost">
                      <span>数量:1</span>
                      <span class="mc-t">￥49.00/件</span>
                    </div>
                  </div>
                </div>
                <div class="mc-sum-Am">
                  共1件商品，免运费
                  <span>
                    实付：
                    <span class="mc-t">￥49.00</span>
                  </span>
                </div>
                <h3>未付款</h3>
              </li>
            </ul>
          </li>
          <li class="mc-all mc-two tab_content">
            <ul>
              <li>
                <div class="mc-sum-box">
                  <div class="myorder-sum fl">
                    <img src="../assets/images/myorder2.jpg">
                  </div>
                  <div class="myorder-text">
                    <h1>优选越南青皮金煌芒果</h1>
                    <h2>规格：4斤装</h2>
                    <div class="myorder-cost">
                      <span>数量:1</span>
                      <span class="mc-t">￥49.00/件</span>
                    </div>
                  </div>
                </div>
                <div class="mc-sum-Am">
                  共1件商品，免运费
                  <span>
                    实付：
                    <span class="mc-t">￥49.00</span>
                  </span>
                </div>
                <h3>未付款</h3>
              </li>
            </ul>
          </li>
          <li class="mc-all mc-three tab_content">
            <ul>
              <li>
                <div class="mc-sum-box">
                  <div class="myorder-sum fl">
                    <img src="../assets/images/pay1.jpg">
                  </div>
                  <div class="myorder-text">
                    <h1>越南进口白肉火龙果</h1>
                    <h2>规格：2个装</h2>
                    <div class="myorder-cost">
                      <span>数量:1</span>
                      <span class="mc-t">￥14.00/件</span>
                    </div>
                  </div>
                </div>
                <div class="mc-sum-Am">
                  共1件商品，免运费
                  <span>
                    实付：
                    <span class="mc-t">￥14.00</span>
                  </span>
                </div>
                <h3>已付款，已发货</h3>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--footer begin-->
    <footer class="footer">
      <nav>
        <ul>
          <li>
            <a href="index.html" class="nav-controller">
              <div class="fb-home"></div>首页
            </a>
          </li>
          <li>
            <a href="groups.html" class="nav-controller">
              <div class="fb-group"></div>我的拼团
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" class="nav-controller active">
              <div class="fb-list"></div>我的订单
            </a>
          </li>
          <li>
            <a href="user.html" class="nav-controller">
              <div class="fb-user"></div>个人中心
            </a>
          </li>
        </ul>
      </nav>
    </footer>
    <!--footer end-->
  </div>
</template>

<script>
  export default{
   
     mounted(){
       //TAB切换
    var tab_Btns_box=document.getElementById('tab_btn');
    var tab_Btns=tab_Btns_box.getElementsByTagName('li');
    var tab_contents=document.getElementsByClassName('tab_content');
    for(var i=0;i<tab_Btns.length;i++){
    tab_Btns[i].index=i;

    tab_Btns[i].onclick=function(){
     for(var i=0;i<tab_Btns.length;i++){
     if(i!==this.index){
     tab_Btns[i].classList.remove('pick')
     }
     }
     tab_Btns[this.index].className="pick";

     for(var j=0;j<tab_contents.length;j++){
     if(j!==this.index){
         tab_contents[j].classList.remove('show');
     }
         tab_contents[this.index].classList.add('show');
     }
    }
    }
    
}
  

  }

</script>

<style scoped>
.od-details {
  background-color: #f1f1f2;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
}
.od-express {
  height: auto;
}
.od-express ul {
  width: 282px;
  margin: 15px auto;
  overflow: hidden;
}
.od-express ul li {
  position: relative;
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 15px;
  border: 2px solid #999;
  line-height: 85px;
  font-size: 0.7rem;
  text-align: center;
  color: #999;
}
.od-express ul li.place-cur {
  border-color: #ce3b41;
  color: #ce3b41;
}
.od-express ul li::before,
.od-express ul li::after {
  background: url("../assets/images/home.png") no-repeat scroll 0% 0% / 125px
    auto;
  position: absolute;
  content: "";
  display: inline-block;
}
.od-express ul li::before {
  top: 20px;
  left: 16px;
  margin-top: -10px;
  height: 25px;
  width: 25px;
}
.od-express ul li::after {
  top: 22px;
  left: 63px;
  height: 15px;
  width: 30px;
  background-position: -48px -155px;
}
.od-express ul li.sign::after {
  background-position: -300px 300px;
}
.od-express ul li.place::before {
  background-position: -50px 0px;
}
.od-express ul li.delivery::before {
  background-position: -50px -25px;
}
.od-express ul li.sign::before {
  background-position: -50px -50px;
}
.od-express ul li.place-cur::before {
  background-position: -50px -75px;
}
.od-express ul li.delivery-cur::before {
  background-position: -50px -100px;
}
.od-express ul li.sign-cur::before {
  background-position: -50px -125px;
}
.od-express ul li.place-cur::after,
.od-express ul li.delivery-cur::after {
  background-position: -48px -180px;
}
.od-infor {
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
}
.od-infor table {
  border-collapse: collapse;
  width: 100%;
  color: #666;
}
.od-infor table tr td {
  padding: 4px 0;
}
.od-infor .od-red {
  color: #ce3b41;
}
.od-infor .od-red span {
  color: #999;
}
.od-box h4 {
  font-size: 1rem;
  font-weight: 400;
  color: #666;
  padding: 15px 10px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #e9e9e9;
}
.od-box .mc-sum-box {
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
}
</style>