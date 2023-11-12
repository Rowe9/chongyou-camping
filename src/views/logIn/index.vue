<template>
  <div class="container">
    <div class="section">
      <div class="login">
        <div class="form">
          <el-form
            label-width="50px"
            :model="formLabelAlign"
            style="max-width: 300px"
          >
            <!-- 手机号 -->
            <el-input v-model="formLabelAlign.phone" placeholder="手机号" />

            <!-- 密码 -->
            <el-input
              v-model="formLabelAlign.password"
              type="password"
              placeholder="设置密码"
              show-password
            />
          </el-form>

          <div class="checkBox">
            <el-checkbox
              v-model="formLabelAlign.checked"
              label="我已阅读并同意向野网（服务协议）"
              size="large"
            />
          </div>

          <div class="registerBtn">注册</div>
        </div>

        <div class="rightBox">
          <div class="sanfang">
            <img src="../../assets/logIn/weibo.png" alt="" />
            <img src="../../assets/logIn/qq.png" alt="" />
            <img src="../../assets/logIn/weixin.png" alt="" />
          </div>
          <div class="footer">
            <div class="left">已有账号？</div>
            <div class="right">注册</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageFooter">
      <img src="../../assets/logIn/footerBg.png" alt="" />
      <img src="../../assets/logIn/footer.png" alt="" class="footerText" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  phone: "",
  password: "",
  checked: false,
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .section {
    position: relative;
    width: 100%;
    height: 800px;
    background: url("../../assets/logIn/loginBg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .login {
      padding: 20px;
      padding-top: 40px;

      width: 450px;
      height: 190px;
      background-color: rgba(255, 255, 255, 0.477);
      // opacity: 90%;
      border-radius: 20px;
      position: absolute;
      margin: 0 auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: left;
      display: flex;
      // align-items: center;
      // justify-content: center;
      .form {
        // padding: 10px;
        .el-input {
          width: 250px !important;

          margin-bottom: 20px;
          margin-left: 10px;
          border-radius: 10px !important;
          font-size: 14px;
        }
        :deep(.el-input__wrapper) {
          border-radius: 20px !important;
          background-color: #ffffff94 !important;
        }

        .checkBox {
          margin-left: 10px;
          margin-top: -20px;
        }
        .registerBtn {
          width: 250px;
          height: 30px;
          background-color: green;
          line-height: 30px;
          text-align: center;
          color: #fff;
          border-radius: 20px;
          margin-left: 10px;
        }
      }

      .rightBox {
        // margin-top: 50px;

        img {
          width: 130px;
          //   height: 130px;
          //   margin-top: -50px;
          height: 40px;
          margin-bottom: 10px;
          margin-left: 30px;
        }
        // .title {
        //   font-size: 14px;
        //   margin-bottom: 80px;
        //   margin-top: 30px;
        //   margin-left: 5px;
        // }
        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          //   margin-top: 30px;
          .left {
            font-size: 12px;
          }
          .right {
            color: green;
          }
        }
      }
    }
  }

  .pageFooter {
    position: absolute;
    bottom: 0;
    img {
      width: 100%;
      height: 100%;
    }
    .footerText {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      height: 100px;
    }
  }
}
</style>
