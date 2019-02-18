<template>
<div>
  <func></func>
    <div class="j-component-bestsell">
      <ul class="list-unstyled">
        <li
         v-for = 'item of list'
                :key = "item.id"
        >
          <!-- <a href="javascript:void(0);"> -->
            <!-- <img class="lazy" src="../assets/images/j-c03.jpg"> -->
            <router-link :to="{name:'',params:{id:item.id},query:{dataName:'dataName'}}">
               <img class="lazy" :src="item.src">
               </router-link>
          <!-- </a> -->
        </li>
      </ul>
    </div>
    <tuan></tuan>
</div> 
</template>
<script>
import func from './func';
import tuan from './tuan';
export default {
  components:{func,tuan},
  props:['list','dataName'],
}
// console.log(list)
</script>

<style  scoped>
.j-component-bestsell > ul {
  margin-bottom: 0;
}

.j-component-bestsell > ul > li {
  margin: 0 10px 5px;
  padding-bottom: 5px;
}

.j-component-bestsell > ul > li > a {
  display: block;
  width: 100%;
  background: #f1f1f1;
  padding: 1px;
}

.j-component-bestsell > ul > li > a > img {
  width: 100%;
}

.j-component-bestsell > ul > li:last-child {
  border-bottom: none;
}


</style>
