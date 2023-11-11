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
    <section class="section" style="height: 500px">
      <div class="title">
        露营圣地
        <span>更多></span>
      </div>

      <!-- 轮播图 -->
      <el-carousel :interval="4000" type="card" height="400px" width="100px">
        <el-carousel-item>
          <img src="../../assets/homePic/蒙版组 3(1).png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/homePic/蒙版组 3(2).png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/homePic/蒙版组 3(1).png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/homePic/蒙版组 3(2).png" alt="" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/homePic/蒙版组 3(1).png" alt="" />
        </el-carousel-item>
      </el-carousel>
    </section>

    <!-- 第二部分 -->
    <section class="section">
      <div class="title">
        热门资讯
        <span>更多 ></span>
      </div>

      <div class="hotInformation">
        <div class="leftBox">
          <img src="../../assets/homePic/热门资讯1.png" alt="" />
          <div class="text">
            <div class="leftBoxTitle">露营治好了这届年轻人的「城市病」</div>
            <div class="leftBoxContent">
              在问到为什么会“入坑”露营时，他们给出了很多理由，其中“亲近自然”是最容易引发共鸣的答案。对群里的年轻人来说，大自然就是治疗“城市病”的良药。露营可以让他们暂时摆...
            </div>
          </div>
        </div>
        <div class="rightBox">
          <img src="../../assets/homePic/热门资讯2.png" alt="" />
          <img src="../../assets/homePic/热门资讯3.png" alt="" />
          <img src="../../assets/homePic/热门资讯4.png" alt="" />
          <img src="../../assets/homePic/热门资讯2.png" alt="" />
        </div>
      </div>
    </section>

    <!-- 第三部分 -->
    <section class="section">
      <img src="../../assets/homePic/交友论坛@2x.png" alt="" />
    </section>

    <!-- 第四部分 -->
    <section class="section">
      <div class="title">
        装备购买
        <span>更多 ></span>
      </div>

      <!-- <div class="equipContainer">
        <div
          class="panel active"
          @click="panelClick"
          style="background-image: url('../../assets/homePic/装备购买4.png')"
        ></div>
        <div
          class="panel"
          @click="panelClick"
          style="background-image: url('../../assets/homePic/装备购买4.png')"
        ></div>
        <div
          class="panel"
          @click="panelClick"
          style="background-image: url('../../assets/homePic/装备购买4.png')"
        ></div>
        <div
          class="panel"
          @click="panelClick"
          style="background-image: url('../../assets/homePic/装备购买4.png')"
        ></div>
      </div> -->

      <div class="equipContainer">
        <div class="panel active panel1">
          <img src="../../assets/homePic/装备购买4.png" alt="" />
          <div class="panelText">
            <div class="panelTextTitle">折叠椅便携露营轻质木纹户外折椅子</div>
            <div class="desc">月销量：286</div>

            <div class="panelTextFooter">
              <div class="price">￥46</div>
              <div class="button">查看</div>
            </div>
          </div>
        </div>

        <div class="panel">
          <img src="../../assets/homePic/装备购买1.png" alt="" />
        </div>

        <div class="panel">
          <img src="../../assets/homePic/装备购买2.png" alt="" />
        </div>

        <div class="panel">
          <img src="../../assets/homePic/装备购买3.png" alt="" />
        </div>
      </div>
    </section>

    <section class="section">
      <img src="../../assets/homePic/活动专题@2x.png" alt="" />
    </section>

    <!-- footer -->
    <my-footer></my-footer>
  </div>
</template>

<script setup>
import myFooter from "../../components/footer/myFooter.vue";

// const panels = document.querySelectorAll(".panel");

// function panelClick(e) {
//   console.log("dianji", e);
//   // panels.classList.remove("active");
//   removeActive();
//   e.target.classList.add("active");
// }

// function removeActive() {
//   panels.forEach((item) => {
//     console.log(panels, item.classList, "panels");
//     item.classList.remove("active");
//   });
// }

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log("dianji");
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
</script>

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
    .title {
      width: 100%;
      text-align: center;
      height: 20px;
      font-size: 20px;
      font-family: Source Han Sans-Normal, Source Han Sans;
      font-weight: 350;
      color: #237f42;
      line-height: 20px;
      margin: 50px 0;
      position: relative;
      span {
        color: #999999;
        position: absolute;
        right: 15px;
        font-size: 12px;
        font-weight: 700;
      }
    }

    .swiper {
      width: 600px;
      height: 300px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &:first-child {
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
  section:nth-of-type(2) {
    height: 540px;

    .hotInformation {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .leftBox {
        position: relative;
        flex: 1;
        img {
          width: 640px;
          height: 415px;
        }
        .text {
          position: absolute;
          bottom: 0;
          width: 620px;
          height: 62px;
          background-color: #fff;
          padding: 10px 10px;
          .leftBoxTitle {
            font-weight: 700;
            font-size: 16px;
            margin-bottom: 10px;
          }
          .leftBoxContent {
            font-size: 15px;
            color: #666666;
            line-height: 1.5;
          }
        }
      }

      .rightBox {
        flex: 1;
        display: flex;
        flex-wrap: wrap;

        img {
          width: 300px;
          height: 200px;
          margin-left: 10px;
          // margin-right: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
  section:nth-of-type(3) {
    img {
      width: 100%;
      height: 100%;
    }
  }
  section:nth-of-type(4) {
    .equipContainer {
      display: flex;

      .panel {
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 80vh;
        border-radius: 50px;
        color: #fff;
        cursor: pointer;
        // flex: 0.5;
        flex: 1;
        margin: 10px;
        position: relative;
        -webkit-transition: all 700ms ease-in;
        img {
          width: 100%;
        }
      }
      // .panel1 {
      //   position: relative;
      // }

      .panel.active {
        .panelText {
          width: 276px;
          height: 90px;
          background: rgba(255, 255, 255, 0.0196);
          box-shadow: inset 46px 0px 99px 0px rgba(255, 255, 255, 0.3412);
          opacity: 1;
          position: absolute;
          bottom: 170px;
          padding: 10px 10px;
          border-radius: 10px;
          .panelTextTitle {
            font-size: 16px;
            font-family: Source Han Sans-Bold, Source Han Sans;
            font-weight: 700;
            color: #ffffff;
            line-height: 16px;
          }
          .desc {
            color: rgb(223, 223, 223);
            opacity: 1;
            font-size: 12px;
            margin-top: 8px;
          }
          .panelTextFooter {
            display: flex;
            .price {
              color: #f34747;
              margin-top: 8px;
              font-size: 14px;
            }
            .button {
              background-color: #237f42;
              width: 66px;
              height: 24px;
              color: #fff;
              text-align: center;
              line-height: 24px;
              font-size: 12px;
              border-radius: 5px;
              margin-left: 170px;
            }
          }
        }
      }
    }
  }
  section:nth-of-type(5) {
    margin-top: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
