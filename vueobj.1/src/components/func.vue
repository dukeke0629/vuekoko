<template>
    <div class="j-component-func" id="m-banner">
      <ul class="list-unstyled" id="categoryMenu">
        <li class="route1">
          <a href="register.html">
            <span class="glyphicon fdayicon fdayicon-all"></span>新用户
          </a>
        </li>
        <li class="route2">
          <a href="meal.html">
            <span class="glyphicon fdayicon fdayicon-order"></span>套餐
          </a>
        </li>
        <li class="route3">
          <a href="invite.html">
            <span class="glyphicon fdayicon fdayicon-contact"></span>邀请红包
          </a>
        </li>
        <li class="route4">
          <a href="#">
            <span class="glyphicon fdayicon fdayicon-client"></span>企业团购
          </a>
        </li>
      </ul>
    </div>
</template>
<style scoped>
 
.j-component-func {
  width: 100%;
  padding: 5px 10px;
}

.list-unstyled {
  list-style: outside none none;
}

.j-component-func {
  padding: 10px;
  border-bottom: 1px solid #f4f4f4;
  margin-bottom: 10px;
}

.j-component-func > ul {
  overflow: hidden;
}

.j-component-func > ul > li {
  float: left;
  width: 25%;
  text-align: center;
  padding: 2px 0;
}

.j-component-func > ul > li > a {
  display: block;
  font: 1em/25px "microsoft yahei";
  color: #505050;
}

.j-component-func .fdayicon {
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 45%;
  margin: 0 auto;
  background: #2ad2c9 url("../assets/images/home.png") no-repeat scroll 0% 0% /
    117px auto;
}

.j-component-func .fdayicon-all {
  background-position: 12px 12px;
}

.j-component-func .fdayicon-order {
  background-position: 12px -26px;
  background-color: #ff9545;
}

.j-component-func .fdayicon-contact {
  background-position: 12px -64px;
  background-color: #ff585d;
}

.j-component-func .fdayicon-client {
  background-position: 11px -103px;
  background-color: #aec95f;
}

.route1,
.route2,
.route3,
.route4 {
  -webkit-transform: rotateY(90deg);
  transform: rotateY(90deg);
}

.route1 {
  -webkit-transition: -webkit-transform 0.3s ease-out 0s;
  transition: transform 0.3s ease-out 0s;
}

.route2 {
  -webkit-transition: -webkit-transform 0.3s ease-out 1.2s;
  transition: transform 0.3s ease-out 0.2s;
}

.route3 {
  -webkit-transition: -webkit-transform 0.3s ease-out 0.4s;
  transition: transform 0.3s ease-out 0.4s;
}

.route4 {
  -webkit-transition: -webkit-transform 0.3s ease-out 0.6s;
  transition: transform 0.3s ease-out 0.6s;
}

.route {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
</style>