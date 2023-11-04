<template>
<div>找不到此页面</div>
<button @click="backToHome">回到首页</button>
</template>

<script setup>
import router from '../../router';

function backToHome(){
  router.push('/home')
}
</script>

<style scoped lang="scss">

</style>