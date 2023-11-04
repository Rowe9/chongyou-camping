<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <input type="text" class="input">
    </div>

    <!-- 第一部分 -->
    <section class="section">
      <div class="title">
        露营圣地
        <span>更多></span>
      </div>
    </section>

    <!-- 第二部分 -->
    <section class="section">
      
    </section>

    <!-- 第三部分 -->
    <section class="section">
      
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.container{
  background-color: rgba(233, 242, 236);
  .header{
    
      position:relative;
      width:100%;
      height:723px;
      background: url('@/assets/homePic/蒙版组 1.png');
      background-repeat: no-repeat;
      background-size: contain;
      .input{
        position:absolute;
        width:800px;
        height:50px;
        margin-top:50px;
        left:50%;
        transform: translate(-50%);
        border-radius: 200px;
      }
    }
    
    .section{
      .title{
        width: 100%;
        text-align: center;
        height: 20px;
        font-size: 20px;
        font-family: Source Han Sans-Normal, Source Han Sans;
        font-weight: 350;
        color: #237F42;
        line-height: 20px;
        span{
          color: #999999;
        }
      }
      &:first-child{

      }
    }
    
    
    }  


</style>