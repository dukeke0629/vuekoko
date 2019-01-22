<template>
	<footer class="footer">
        <nav>
            <ul>
                <li><router-link to="/home"><a href="groups.html;" class="nav-controller active"><div class="fb-home"></div>首页</a></router-link></li>
                <li><router-link to="/group"><a href="groups.html" class="nav-controller"><div class="fb-group"></div>我的拼团</a></router-link></li>
                <li><router-link to="/myorder"><a href="myorder.html" class="nav-controller"><div class="fb-list"></div>我的订单</a></router-link></li>
                <li><router-link to="/user"><a  class="nav-controller"> <div class="fb-user"></div>个人中心</a></router-link></li>
            </ul>
        </nav>
    </footer>
</template>
<script>
export default {
  
}
</script>

<style scoped>
  
.footer {
    width: 100%;
    max-width: 640px;
    height: 60px;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    background-color: #FFF;
    border-top: medium none #ECEDED;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;
}

.footer li {
    float: left;
    width: 25%;
    text-align: center;
    margin-top: 10px;
    height: 100%;
}

.footer a {
    color: #777;
    font-size: 1.4rem;
}

#user-b {
    margin-bottom: 68px;
}

#user-b .footer a {
    font-size: .875rem;
}

.footer a.active {
    color: #2ad2c9;
}

.footer .nav-controller {
    position: relative;
    height: 100%;
    display: block;
}

.fb-home,
.fb-group,
.fb-list,
.fb-user {
    background-image: url("../assets/images/footer-icon.png");
    background-repeat: no-repeat;
    background-size: 30px auto;
    height: 31px;
    margin: -3px auto auto;
    width: 30px;
    background-position: 0px 4px;
}

.fb-home {
    background-position: 0px -124px;
}

.active .fb-home {
    background-position: 0px 0;
}

.fb-group {
    background-position: 0px -156px;
}

.active .fb-group {
    background-position: 0px -31px;
}

.fb-list {
    background-position: 0px -187px;
}

.active .fb-list {
    background-position: 0px -62px;
}

.fb-user {
    background-position: 0px -218px;
}

.active .fb-user {
    background-position: 0px -92px;
}
</style>
