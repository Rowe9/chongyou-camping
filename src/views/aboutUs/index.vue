<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <input type="text" class="input" />

      <!-- 轮播图 -->
      <div class="block text-center">
        <el-carousel height="600px">
          <el-carousel-item>
            <img src="../../assets/homePic/蒙版组 1.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img
              src="../../assets/homePic/蒙版组 1.png"
              alt=""
            /> </el-carousel-item
          ><el-carousel-item>
            <img
              src="../../assets/homePic/蒙版组 1.png"
              alt=""
            /> </el-carousel-item
          ><el-carousel-item>
            <img src="../../assets/homePic/蒙版组 1.png" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <!-- 第一部分 -->
    <section class="section">
      <div class="text">
        城市的喧嚣和繁忙常常让人感到疲惫和压力。在这个快节奏的社会中，我们渴望一种彻底的放松<br />
        而什么比与大自然亲密接触更能让我们远离喧嚣，重新充满活力呢？答案就是露营！
        <br />
        露营是一种独特的户外体验，它让我们能逃离城市的喧嚣，沉浸在大自然的怀抱中。
        <br />
        当我们远离高楼大厦和拥挤的街道，来到郁郁葱葱的森林、湖泊边或山脉间，一切都变得宁静而美好。<br />
        在这里，我们可以听到鸟儿的歌唱、风吹过树梢的声音，感受到清新的空气和自然的气息。<br />
      </div>
    </section>

    <section class="section">
      <img src="../../assets/aboutUs/了解我们.png" alt="" class="learnUs" />
      <img src="../../assets/aboutUs/合作伙伴.png" alt="" class="compare" />
      <img src="../../assets/aboutUs/品牌入驻.png" alt="" class="brand" />
      <img src="../../assets/aboutUs/加入我们.png" alt="" class="joinUs" />
    </section>
  </div>

  <div class="footer">
    <img src="../../assets/homePic/页尾@2x.png" alt="" />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  background-color: rgba(233, 242, 236);

  .header {
    position: relative;
    width: 100%;
    height: 600px;
    // background: url('@/assets/homePic/蒙版组 1.png');
    background-repeat: no-repeat;
    background-size: cover;
    .input {
      position: absolute;
      // top:0px;
      // left:100px;
      z-index: 600;
      width: 800px;
      height: 50px;
      margin-top: 50px;
      left: 50%;
      transform: translate(-50%);
      border-radius: 200px;
      border: none;
    }
    &:hover {
      border: none;
    }

    .el-carousel__item img {
      width: 100%;
      height: 100%;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }

  .section {
    margin-top: 100px;
    // margin-bottom: 100px;

    .text {
      margin-bottom: 50px;
      text-align: center;
      width: 100%;
      line-height: 1.5;
      color: #666666;
      font-size: 18px;
    }
  }
  &:first-child {
    // width: 100%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // margin-top: 40px;
    // align-items: center;

    // .text {
    //   width: 100%;
    //   height: 100px;
    //   line-height: 100px;
    //   align-items: center;
    //   font-size: 16px;
    // }
  }
  section:nth-of-type(2) {
    width: 100%;
    height: 1980px;

    background: url("../../assets/aboutUs/aboutUsBg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .learnUs {
      position: absolute;
      width: 800px;
      height: 450px;
      margin: 0 auto;
      top: 885px;
      left: 50%;
      transform: translate(-50%);
    }
    .compare {
      position: absolute;
      width: 800px;
      height: 360px;
      margin: 0 auto;
      top: 1390px;
      left: 50%;
      transform: translate(-50%);
    }
    .brand {
      position: absolute;
      width: 800px;
      height: 250px;
      margin: 0 auto;
      top: 1890px;
      left: 50%;
      transform: translate(-50%);
    }
    .joinUs {
      position: absolute;
      width: 800px;
      height: 600px;
      margin: 0 auto;
      top: 2300px;
      left: 50%;
      transform: translate(-50%);
    }
  }
}

.footer {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
