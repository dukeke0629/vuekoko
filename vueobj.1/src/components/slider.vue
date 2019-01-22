<template>
   <div>
  <swipe class="my-swipe" :speed="500" :auto="3000">
    <swipe-item class="slide1"><img src="../assets/images/j-banner02.jpg"></swipe-item>
    <swipe-item class="slide2"><img src="../assets/images/j-banner04.jpg"></swipe-item>
  </swipe>
  <div class="j-hint">仅20元起送，24小时内极速达、</div>
   </div> 
</template>
<script  scoped>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';


export default {

  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },

  mounted(){

  }
  
}
</script>

<style>
.my-swipe {
  height: 190px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
 
.slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}

  .j-hint {
   height: 30px;
   width: 260px;
   margin: 5px auto;
   text-align: center;
   background-size: 110px auto;
   background-position: 20px -172px;
   line-height: 30px;
   padding-left: 36px;
   font-size: 1.4rem;
   border-bottom: 1px solid #e7e7e7;
 } 
</style>





