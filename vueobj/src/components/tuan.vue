<template>
    <div id="tuan" class="tuan">
      <div class="tuan_g" data-vtuan="0" data-cat="1" data-num="12058" >
        <i></i>
        <a href="detail.html">
          <div class="tuan_g_img">
            <div class="tally_box">
              <p>3人团</p>
              <p>2.5折</p>
            </div>
            <img src="../assets/images/j-c01.jpg">
          </div>
          <div class="tuan_g_info">
            <p class="tuan_g_name">越南进口火龙果（2粒）【直降2.80元】</p>
            <p
              style="display: black;"
              class="tuan_g_cx"
            >外皮红艳张扬，果肉绵软白嫩，汁液丰富，富含维生素C，丰富的水溶性膳食纤维，前者美白皮肤，后者有助减肥，降血糖，润肠，预防肠癌，美容瘦身。</p>
          </div>

          <div class="tuan_g_core">
            <div id="triangle-right"></div>
            <div class="tuan_g_price">
              <span>3人团只需</span>
              <b>¥14.00</b>
            </div>
            <div class="tuan_g_btn">我要拼</div>
          </div>
          <div class="tuan_g_yj">
            <s>原价:￥16.80</s>
          </div>
        </a>
      </div>
    </div>
</template>
<script>
  // export default{
  //   data () {
  //     return {
  //       detail:{}
  //     }
  //   },
  //   mounted () {
  //     let id = this.$router.params.id-0;
  //     let dataName = this.$doute.quire.dataName;
  //     this.$http({
  //       url:'/data/article_'+dataName+'.data'
  //     }).then(
  //       res=>this.detail=res.data[id-1]
  //     )
  //   }
  // }
</script>
<style>
    .tuan {
  padding: 0px 10px;
  margin-bottom: 70px;
}

.tuan_g {
  background-color: #fff;
  border: 1px solid #f1f1f1;
  margin-bottom: 10px;
  padding-bottom: 10px;
  position: relative;
}

.tuan_g_img {
  display: block;
  position: relative;
}

.tuan_g_img .tally_box {
  position: absolute;
  width: 50px;
  height: 50px;
  background-image: url("../assets/images/content-icon.png");
  background-repeat: no-repeat;
  background-size: 365px 50px;
  background-position: -238px 0px;
  margin-left: 10px;
}

.tuan_g_img .tally_box p {
  color: #fff;
  text-align: center;
  line-height: 21px;
}

.tuan_g_img img {
  display: block;
  overflow: hidden;
}

.tuan_g_core::before,
.tuan_g_btn::after,
.tp_lk::after,
.ti_users_blank::after,
.ti_users3 .ti_users_blank::after,
.ti_boss::before,
.step_more::after,
.registericon::after {
  background-image: url("../assets/images/content-icon.png");
  background-repeat: no-repeat;
  background-size: 365px 50px;
}

.tuan_g_info {
  padding: 7px 10px 10px;
}

.tuan_g_name {
  color: #191919;
  font-size: 1.6rem;
  margin-bottom: 5px;
}

.tuan_g_cx {
  color: #707070;
  line-height: 18px;
  font-size: 1.2rem;
}

.tuan_g_core {
  color: #fff;
  display: block;
  height: 34px;
  line-height: 34px;
  margin-bottom: 5px;
  position: relative;
  width: 290px;
}

.tuan_g_core::before {
  background-position: -127px -8px;
  content: " ";
  height: 34px;
  left: 0;
  position: absolute;
  top: 0;
  width: 36px;
}

.tuan_g_price {
  float: left;
  height: 34px;
  margin-left: 4px;
  overflow: hidden;
  padding-left: 45px;
  width: 180px;
  color: #2ad2c9;
  border-top: 1px solid #2ad2c9;
  border-bottom: 1px solid #2ad2c9;
  line-height: 34px;
}

.tuan_g_price span {
  vertical-align: 1px;
  font-size: 1.2rem;
}

.tuan_g_price b {
  font-size: 2rem;
  font-weight: 400;
}

#triangle-right {
  width: 0;
  height: 0;
  border-top: 17px solid transparent;
  border-left: 10px solid rgb(51, 189, 182);
  border-bottom: 17px solid transparent;
  position: absolute;
  left: 36px;
  top: 0px;
}

.tuan_g_btn {
  background-color: #ff585d;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  float: left;
  height: 34px;
  line-height: 34px;
  padding-left: 10px;
  padding-right: 14px;
  position: relative;
}

.tuan_g_btn::after {
  background-position: 0px -37px;
  content: " ";
  height: 12px;
  position: absolute;
  right: 2px;
  top: 11px;
  width: 10px;
}

.tuan_g .tuan_g_yj {
  padding-left: 47px;
  font-size: 1.4rem;
  color: #707070;
}
</style>