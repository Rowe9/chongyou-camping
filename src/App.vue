
<template>
  <div class="container">
    <my-header></my-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script setup>
import myHeader from './components/header/myHeader.vue';
</script>

<style scoped lang="scss">
.container{
  height:100%;
  // padding:0 30px;
  width:100%;
  margin:0 auto;
}

@media screen and (min-width: 1800px) {
  .container{
    height:100%;
    width:1200px;
    margin:0 auto;
}
}
</style>
