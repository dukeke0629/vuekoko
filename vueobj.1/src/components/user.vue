<template>
    <div id="user-b">
		<!--html5 nav-->
		<nav class="j-nav navbar">
	        <div class="logo fl">
				<a href="index.html"></a>
			</div>
			<span class="user-title">个人中心</span>
			<div class="shopping-cart fr">
				<a href="index.html"></a>
			</div>
	    </nav>
		<section class="m-component-user" id="m-user">
	        <div class="m-user-avatar text-center">
	            <span class="avatarPic"><img style="display: inline;" class="lazy img-circle" src="../assets/images/user-img0.jpg"></span>
	            <div class="user_btn">
	            <router-link to="/login">	<a href="login.html" class="this">登录</a></router-link>
	            	<router-link to="/reg"><a href="register.html">注册</a></router-link>
	            </div>
	        </div>
	        
	        <div class="head_list">
	        	<ul class="m-user-list">
	        		<li><span>￥0.00</span><br>账户余额</li>
	        		<li><a href="coupon.html"><span class="bar"></span><span>4</span><br>优惠卷</a></li>
	        		<li><a href="myorder.html"><span class="bar"></span><span>2</span><br>我的订单</a></li>
	        	</ul>
	        </div>
	        <ul class="m-user-content">
	            <li>
	                <div class="m-user-item">
	                   <a href="/user/orders" class="user-order">邀请好友得大礼包</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="groups.html" class="user-coupon">我的团单</a>
	                </div>
	            </li>
	            <li>
	            	<div class="m-user-item">
	                   <a href="/user/coupon" class="user-site">管理收货地址</a>
	                </div>
	                <div class="m-user-item">
	                   <a href="/user/coupon" class="user-set">设置</a>
	                </div>
	                <div class="m-user-item">
	                   <div class="user-score"><span class="pull-right">400-110110</span>联系客服</div>
	                </div>
	            </li>
	            <li class="m-user-footer">
	            粤ICP备8888888 广东·广州
	            </li>
	        </ul>
	    </section>
	    <!--footer begin-->
		<footer class="footer">
	        <nav>
	            <ul>
	                <li><a href="index.html" class="nav-controller"><div class="fb-home"></div>首页</a></li>
	                <li><a href="groups.html" class="nav-controller"><div class="fb-group"></div>我的拼团</a></li>
	                <li><a href="myorder.html" class="nav-controller"><div class="fb-list"></div>我的订单</a></li>
	                <li><a href="javascript:void(0);" class="nav-controller active"><div class="fb-user"></div>个人中心</a></li>
	            </ul>
	        </nav>
	    </footer>
  </div>
</template>
<style scoped>
	.user-title {
    position: absolute;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 34px;
    margin-top: 5px;
    font: 1.25em/34px "microsoft yahei";
    color: rgba(255, 255, 255, 0.95);
    overflow: hidden;
    text-align: center;
}
.user_btn {
  height: 35px;
  width: 160px;
  margin: 15px auto 5px;
}
.user_btn a {
  display: inline-block;
  float: left;
  text-align: center;
  width: 80px;
  color: #2ad2c9;
  position: inherit;
  background: #fff;
  height: 35px;
  line-height: 35px;
  border-radius: 0 5px 5px 0;
}
.user_btn a.this {
  background: #2ad2c9;
  color: #fff;
  border-radius: 5px 0 0 5px;
}
#user-b .j-nav .shopping-cart a{ background-position: -32px -225px;}
.m-component-user { background-color: #F1F1F1; margin-bottom: 64px;}
.m-user-avatar {
    padding: 15px 0px;
    color: #323232;
}
.head_list{
    margin-bottom: 10px;
    background-color: #fff;
}  
.m-user-list{ 
    overflow: hidden;
    padding: 10px 0;
}
.m-user-list li{
    float: left;
    width: 33.33%;
    text-align: center;
}
.m-user-list li span{ color: #2AD2C9;}
.m-user-list li span.bar {
  float: left;
  width: 1px;
  height: 42px;
  margin-top: 2px;
  background-color: #89F0EB;
  vertical-align: middle;
}
.m-user-content { margin-bottom: 0px;}
.m-user-content > li {
    padding: 0px 10px;
    margin-bottom: 10px;
    background: #FFF none repeat scroll 0% 0%;
}
.m-user-content > li.m-user-footer{
    text-align: center;
    line-height: 35px;
    margin: 0;
    color: #999;
}
.m-user-item {
    position: relative;
    padding: 12px 0px;
    border-bottom: 1px solid #F1F1F1;
    font-size: 1em;
    color: #323232;
}
.m-user-item > div, 
.m-user-item > a {
    position: relative;
    display: block;
    padding: 0px 0px 0px 30px;
    color: #323232;
    text-decoration: none;
}
.m-user-content > li .m-user-item:last-child { border-bottom: medium none;}
.m-user-item > div::before, 
.m-user-item > a::before,
.m-user-item > a::after{
    background-image: url("../assets/images/content-icon.png");
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    margin-top: -10px;
    height: 25px;
    content: "";
    display: inline-block;  
}
.m-user-item > div::before, 
.m-user-item > a::before{
    background-size: 365px 50px;
    left: 0px;
    width: 25px;
}
.m-user-item > a::after {
    background-size: 365px 50px;
    background-position: -340px -11px;
    right: -5px;
    width: 10px;
}
.user-order::before { background-position: 1px -1px;}
.user-site::before { background-position: -54px -1px;}
.user-set::before { background-position: -82px -1px;}
.user-score::before { background-position: -26px -28px;}
.user-coupon::before { background-position: -26px -1px;}
.m-user-item > a > span {
    margin-right: 15px;
    color: #2ad2c9;
}
.m-user-item > div > span { color: #2ad2c9;}
.pull-right {
    float: right !important;
}
.m-user-quit { padding: 0px 10px 10px;}
.btn-block {
    display: block;
    width: 100%;
}
.btn-warning {
    color: #FFF;
    background-color: #F0AD4E;
    border-color: #EEA236;
}
/*
 * 优惠卷
 */
.gray { 
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);  
    filter: grayscale(100%);
    filter: gray;
}
.coupon-nav,
.myorder-nav{ margin: 10px;}
.coupon-list{
    height: 35px;
    line-height: 35px;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #2AD2C9;
    background-color: #FFF;
    color: #2AD2C9;
}
.coupon-list li{
    float: left;
    width: 33.33%;
    text-align: center;
}
.coupon-list li.pick{
    background-color: #2AD2C9;
    color: #FFF;
}
.coupon-list li span.bar {
    float: left;
    width: 1px;
    height: 35px;
    background-color: #2AD2C9;
    vertical-align: middle;
}
.coupon-content ul{ margin: 10px;}
.myorder-content ul{ margin: 10px 0;}
.cc-all ul,.mc-all{ margin: 0;}
.cc-all ul li{ 
    padding: 5px 0;
    border-bottom: 1px solid #EDEDED;
}
.cc-all ul li .coupon-sum,
.cc-two ul li .coupon-sum>.cc-mask {
    position: relative;
    width: 115px;
    height: 60px;
    background: #fff none repeat scroll 0% 0%;
}
.cc-two ul li .coupon-sum>.cc-mask{
    position: absolute;
    top: 0;
    opacity: 0.6;
    z-index: 2;
}
.cc-all ul li .coupon-text {
    height: 60px;
    line-height: 30px;
    padding-left: 125px;
    text-shadow: 0px 0px 1px #F0F0F0;
    color: #2AD2C9;
}
.cc-two ul li .coupon-text{ color: #CE3B41;}
.cc-three ul li .coupon-text{ color: #959595;}
.cc-all ul li .coupon-text>span{
    color: #ccc;
    text-shadow: none;
}
.tab_content{ display: none !important;}
.show{ display: block !important;}
/*
 * 我的订单
 */
.myorder-content{ background-color: #f3f3f3; }
.mc-all ul li{ 
    border-bottom: 1px solid #EDEDED;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 8px;
    border-top: 1px solid #EDEDED;
}
.mc-all ul li h3{
    font-size: 0.75rem;
    font-weight: 100;
    padding-left: 5px;
    padding: 5px;
    color: #CE3B41;
}
.mc-sum-box{ background-color: #fff;}
.myorder-sum,.myorder-sum > .mc-mask {
    position: relative;
    width: 90px;
    height: 90px;
    background: #FFF none repeat scroll 0% 0%;
}
.myorder-text {
    height: 90px;
    line-height: 30px;
    padding-left: 95px;
    text-shadow: 0px 0px 1px #F0F0F0;
    color: #2AD2C9;
    position: relative;
}
.myorder-text h1{
    font-size: 1rem;
    font-weight: 400;
}
.myorder-text .myorder-cost,
.myorder-text h2{
    color: #999;
    font-weight: 100;
    text-shadow: none;
    font-size: .75rem;
}
.myorder-text .myorder-cost .mc-t{
    font-size: .875rem;
    color: #CE3B41;
    float: right;
}
.myorder-text > span {
    color: #CCC;
    text-shadow: none;
}
.mc-sum-Am{
    padding: 5px;
    color: #666;
}
.mc-sum-Am span{float: right;}
.mc-sum-Am span.mc-t{color: #CE3B41; padding-right: 15px;}
</style>
  