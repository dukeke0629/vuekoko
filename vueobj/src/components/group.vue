<template>
   <div id="user-b">
        <nav class="j-nav navbar">
            <div class="logo fl">
                <a href="index.html"></a>
            </div>
            <span class="user-title">我的拼团</span>
            <div class="shopping-cart fr">
                <a href="index.html"></a>
            </div>
        </nav>
        <div class="groups-box">
            <!-- 我的拼团列表 -->
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <a href="groupsdetails.html" class="btn fr">查看团详情</a>
                    <a href="orderdetails.html" class="btn fr">查看订单详情</a>
                </div>
            </div>
            <div class="groups-m mc-sum-box">
                <div>
                    <div class="myorder-sum fl"><img src="../assets/images/pay1.jpg"></div>
                    <div class="myorder-text">
                        <h1>越南进口白肉火龙果 </h1>
                        <h2>规格：2个装</h2>
                        <div class="tuan_g_core">
                            <div class="tuan_g_price">
                                <span>成团价</span>
                                <b>¥14.00</b>
                            </div>
                            <div class="tuan_g_btn"></div>
                        </div>
                    </div>
                </div>
                <div class="groups-dowm-bnt">
                    拼团进行中
                    <a href="groupsdetails.html" class="btn fr">查看团详情</a>
                    <a href="orderdetails.html" class="btn fr">查看订单详情</a>
                </div>
            </div>
        </div>
        <!--footer begin-->
        <footer class="footer">
            <nav>
                <ul>
                    <li><a href="index.html" class="nav-controller"><div class="fb-home"></div>首页</a></li>
                    <li><a href="groups.html" class="nav-controller active"><div class="fb-group"></div>我的拼团</a></li>
                    <li><a href="myorder.html" class="nav-controller"><div class="fb-list"></div>我的订单</a></li>
                    <li><a href="javascript:void(0);" class="nav-controller "><div class="fb-user"></div>个人中心</a></li>
                </ul>
            </nav>
        </footer>
        <!--footer end-->
    </div>
</template>
<style scoped>
  .pay-box,
.groups-box,
.groupsdetails-box{ background-color: #f2f2f2;}
.pay-box .mc-sum-box{ padding: 10px;}
.pay-m,
.groups-m{
    background-color: #fff;
    border-top: 1px solid #E9E9E9;
    border-bottom: 1px solid #E9E9E9;
    margin-bottom: 10px;
    overflow: hidden;
}
.pay-site{ 
    height: 50px;
    line-height: 25px;
    color: #333;
}
.pay-site-left{
    width: 60px;
    font-weight: 600;
    text-align: center;
}
.pay-site-left,
.pay-site-right{ height: 50px;}
.pay-site-right{ color: #666;}
.pay-freight{ padding: 15px 10px;}
.pay-freight p{ color: #5b5b5b;}
.pay-freight p b{ 
    color: #CE3B41;
    font-size: 1.4rem;
}
.pay-m .am-g{ padding: 10px;}
.pay-m .am-u-lg-6{ margin: 5px 0;}
.pay-manner{ 
    position: relative;
    line-height: 38px; 
    padding-left: 40px;
    margin-left: 40px;
    border-top: 1px solid #5EB95E;
    border-right: 1px solid #5EB95E;
    border-bottom: 1px solid #5EB95E;
    
}
.pay-manner::before{
  background-size: 125px 355px;
  background-position: -95px -326px;
  content: " ";
  height: 30px;
  left: 5px;
  position: absolute;
  top: 5px;
  width: 30px;
}
.pay-manner2{
    border-top: 1px solid #3BB4F2 ;
    border-right: 1px solid #3BB4F2 ;
    border-bottom: 1px solid #3BB4F2 ;  
}
.pay-manner2::before{ background-position: -95px -296px;}
.pay-mu{
    width: 100%;
    float: left;
    position: relative;
}
.pay-mu .pay-input-group { 
    position: relative;
    margin: 5px 10px;
}
.pay-input-group-label{   
    padding: 10px;
    float: left;
    height: 20px;
    width: 20px;
}
.pay-input-group-success .pay-input-group-label {
    border-color: #5EB95E;
    background: #5EB95E none repeat scroll 0% 0%;
    color: #FFF;
}
.pay-input-group-secondary .pay-input-group-label {
    border-color: #3BB4F2;
    background: #3BB4F2 none repeat scroll 0% 0%;
    color: #FFF;
}
.pay-input-group-label:first-child { border-right: 0px none;}
.pay-m .btn{
    width: 92%;
    background-color: #CE3B41;
    margin: 10px 4%;
    color: #fff;
}
.pay-box .step,
.groups-m-s .step{ font-size: .865rem;}
.pay-box .step .step_item,
.groups-m-s .step .step_item {
    float: left;
    padding-left: 7%;
    position: relative;
    width: 18%;
}
/*
 * groups 我的拼团
 */
.groups-box,
.groupsdetails-box{
    padding-top: 10px;
}
.groups-box .pay-m { padding: 10px;}
.groups-box .tuan_g_core::before {
    background-position: -129px -9px;
    height: 31px;
    width: 31px;
}
.groups-box .tuan_g_btn { height: 31px;}
.groups-box .tuan_g_btn::after {
    right: 5px;
    top: 10px;
}
.groups-box .tuan_g_price {
    width: 98px;
    height: 29px;
    line-height: 29px;
    padding-left: 33px;
}
.groups-box .tuan_g_price span { font-size: .75rem;}
.groups-box .tuan_g_price b { font-size: .875rem;}
.groups-box .groups-dowm-bnt{ 
    padding: 5px;
    margin: 5px;
    line-height: 34px;
    color: #CE3B41;
    border-top: 1px solid #EDEDED;
}
.groups-box .groups-dowm-bnt .btn{
    background-color: #FFF;
    border-radius: 5px;
    margin: 4px 2px;
    padding: 5px 7px;
    border: 1px solid #CCC;
    color: #666;
    font-size: 0.75rem;
}
/*
 *  groupsdetails 拼团详情
 */
.win-groups{
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
    color: #666;
    font-size: .75rem;
    background-color: #e6efdf;
    border-top: 1px solid #78a154;
    border-bottom: 1px solid #78a154;
}
.win-groups .win-icon{ 
    font-size:1rem;
    color: #78a154;
    position: relative;
    width: 100px;
    margin: 0 auto;
}
.groups-m .mc-sum-box {
    background-color: #FFF;
    padding: 10px;
}
h2 .mc-t {
    font-size: 0.75rem;
    color: #CE3B41;
}
h2 .mc-t>b{
    font-size: 1rem;
    font-weight: 100;
}
.groups-avata{
    background-color: #f2f2f2;
    padding: 10px;
}
.groups-avata-img{
    height: 110px;
    padding-top: 20px;
}
.groups-avata-img ul{
    width: 192px;
    margin: 0 auto;
}
.groups-avata-img ul li,
.man-name ul li .man-name-img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:2px solid #fff;
    float: left;
    margin: 0 5px;
    overflow: hidden;
}
.groups-avata-img ul.colonel{
    position: relative;

}
.groups-avata-img ul.colonel::before,
.win-icon::before{
    background-size: 125px 355px;
    background-position: -95px -262px;
    content: " ";
    height: 30px;
    left: 32px;
    position: absolute;
    top: -10px;
    width: 30px;
}
.win-icon::before{
    background-position: -98px -231px;
    height: 25px;
    left: -10px;
    top: 0px;
    width: 25px;
}
.groups-avata p.man-number{
    font-size: 1rem;
    font-weight: 600;
    color: #666;
    text-align: center;
}
.groups-avata p.man-number>span{ 
    padding: 0 5px;
    font-size: 1.2rem;
    color: #CE3B41;
}
.count_down2 {
    height: 30px;
    color: #666;
    line-height: 30px;
    font-size: 1rem;
    margin-top: 10px;
    text-align: center;
}
.count_down2 span {
    background-color: #333;
    color: #fff;
    border-radius: 5px;
    margin: 4px;
    width: 25px;
    height: 25px;
    display: inline-block;
    text-align: center;
    line-height: 25px;
}
.man-name ul li{
    height: 55px;
    line-height: 55px;
    padding: 5px;
    margin-top: 10px;
    background-color: #D7D7D7;
    color: #999;
}    
.man-name ul li.colonel{
    background-color: #333;
    color: #fff;
}
.man-name ul li.colonel span{ 
    float: right;
    font-size: .75rem;
    color: #8C8C8C;
}
.invite-btn{
    position: fixed;
    width: 100%;
    bottom: 0px;
    height: 40px;
    background-color: #CE3B41;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
@media screen and (min-width: 640px){ 
    .invite-btn{ max-width: 640px;}
}
  

</style>
