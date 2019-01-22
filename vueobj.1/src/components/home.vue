<template>
  <div>
    <navbar></navbar>
    <slider></slider>
    <list :list="list" :dataName ="'home'"></list>
  </div>
</template>
<script>
import "../assets/css/frameui.css";
import "../assets/css/widget/slider.css";
import "../assets/css/index.css";

import navbar from "./navbar";
import slider from "./slider";
import list from "./list";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    navbar,
    slider,
    list
  },
  mounted() {
    $("#categoryMenu li").addClass("route");
    this.$http({
      url: "/data/footer.data"
    }).then(
      res =>console.log( (this.list = res.data))
      );
  }
};
</script>

   
