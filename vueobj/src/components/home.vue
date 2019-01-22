<template>
  <div>
    <navbar ></navbar>
    <slider v-show="$root.bFoot"></slider>
    <list :list="list" :dataName="'home'" v-show="$root.bFoot"></list>
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
    this.$root.bLoading = true;
    this.$root.bFoot = false;

    $("#categoryMenu li").addClass("route");
    this.$http({
      url: "/data/footer.data"
    }).then(res => {
      setTimeout(() => {
        this.$root.bLoading = false;
        this.$root.bFoot = true;
        this.list = res.data;
      }, 3000);
    });
  }
};
</script>

   
