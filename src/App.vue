
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
}
</style>
