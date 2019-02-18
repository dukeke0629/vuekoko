<template>
    <nav class="j-nav navbar index-nav">
      <div class="logo fl">
        <a href="javascript:void(0);"></a>
      </div>
      <div class="city">
        <a id="showSiteBtn" href="javascript:;" target="_self">广州</a>
        <input id="switchGPS" name="switchGPS" type="hidden">
      </div>
    </nav>

</template>
<style scoped>

.navbar {
  min-height: 42px;
  background: #76d49b none repeat scroll 0% 0%;
}

.j-nav {
  transform: translate3d(0px, 0px, 0px);
}

.none-box {
  width: 100%;
  height: 42px;
}

.j-nav .logo,
.j-nav .shopping-cart {
  padding-top: 2px;
}

.j-nav .logo a,
.j-nav .shopping-cart a {
  background-size: 125px auto;
  background-position: 10px -266px;
  width: 50px;
  height: 40px;
  display: block;
}

.index-nav .logo a {
  width: 100px !important;
}

.j-nav .city {
  float: right;
  padding: 6px 0 0 0;
}

.j-nav .city a {
  width: 62px;
  height: 30px;
  padding: 2px 0px 0px 22px;
  display: block;
  font-size: 1.4rem;
  color: #fff;
  background-size: 110px auto;
  background-position: -90px -137px;
}


</style>
