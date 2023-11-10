<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <input type="text" class="input" >
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        
        class="swiper-header"
      >
      <swiper-slide><img src="../../assets/homePic/蒙版组 1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/homePic/蒙版组 3(1).png" alt=""></swiper-slide>
      <swiper-slide><img src="../../assets/homePic/蒙版组 3(2).png" alt=""></swiper-slide>
      </swiper>
    </div>

    <!-- 第一部分 -->
    <section class="section" style="height:500px;">
      <div class="title">
        露营圣地
        <span>更多></span>
      </div>
    
      <!-- <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :loop="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper"
  >
    <swiper-slide><img src="../../assets/homePic/蒙版组 1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/homePic/为自由开导者 不可令其困厄于荆棘 心如花木 向野而生 1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/homePic/为自由开导者 不可令其困厄于荆棘 心如花木 向野而生 1.png" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/homePic/蒙版组 1.png" alt=""></swiper-slide>

    <swiper-slide><img src="../../assets/homePic/蒙版组 1.png" alt=""></swiper-slide>

  </swiper> -->


    </section>

    <!-- 第二部分 -->
    <section class="section">
      
    </section>

    <!-- 第三部分 -->
    <section class="section">
      
    </section>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style scoped lang="scss">
.container{
  background-color: rgba(233, 242, 236);
  .header{
      position:relative;
      width:100%;
      height:723px;
      // background: url('@/assets/homePic/蒙版组 1.png');
      background-repeat: no-repeat;
      background-size: cover;
      .input{
        position:absolute;
        // top:0px;
        // left:100px;
        z-index:600;
        width:800px;
        height:50px;
        margin-top:50px;
        left:50%;
        transform: translate(-50%);
        border-radius: 200px;
        border:none;
      }
      &:hover{
        border:none;
      }

      .swiper-header{
        width: 100%;
        background-size: cover;
        height:723px;

      img{
        width: 100%;
        }
      }

      // 左边箭头
      :deep(.swiper-button-prev:after) {
        content: 'prev';
        position: absolute;
        left: 200px;
        width: 24px;
        height: 187px;
        background-color: #237F42;
        opacity: 40%;
        font-size: 25px!important;
        color:black!important;
      }
      
      // 右边箭头
      :deep(.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after) {
        content: 'next';
        position: absolute;
        right: 200px;
        width: 24px;
        height: 187px;
        background-color: #237F42;
        opacity: 40%;
        font-size: 25px!important;
        color:black!important;

      }

      // 让箭头在小盒子内居中
      :deep(.swiper-button-prev:after){
        line-height: 7;
      }
      :deep(.swiper-button-next:after){
        line-height:7;
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
        margin:50px 0;
        position:relative;
        span{
          color: #999999;
          position:absolute;
          right:30px;
        }

       
      }


      .swiper {
        width: 600px;
        height: 300px;
        margin:0 auto;
        img{
          width: 100%;
          height: 100%;
        }
    } 
      
    }
    &:first-child{
        height:500px;
      }
    
    
    }  


</style>