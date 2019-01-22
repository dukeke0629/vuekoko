<template>
  <div id="app">  
    <!-- <home></home> -->
    <loading v-show="$root.bLoading"></loading>
    <router-view ></router-view>
    <footbar ></footbar>
  </div>
</template>
<script>  
  // import home from './components/home';
  import footbar from './components/footbar';
  export default{
    name:'app',
    components:{      
      // home,
      footbar
    },
    mounted () {
      // console.log('app', 'this.$http')
    }
  }
</script>


<style>

</style>