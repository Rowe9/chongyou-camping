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
            <!-- 验证码 -->
            <el-input
              v-model="formLabelAlign.code"
              placeholder="输入6位短信验证码"
              class="code"
            />
            <div class="getCode">获取校验码</div>
            <!-- 密码 -->
            <el-input
              v-model="formLabelAlign.password"
              type="password"
              placeholder="设置密码"
              show-password
            />
            <!-- 确认密码 -->
            <el-input
              v-model="formLabelAlign.confirmPassword"
              type="password"
              placeholder="确认密码"
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
          <div class="title">扫码下载[向野APP]</div>
          <div class="QRcode">
            <img src="../../assets/register/二维码@2x.png" alt="" />
          </div>
          <div class="footer">
            <div class="left">已有账号？</div>
            <div class="right">登录</div>
          </div>
        </div>
      </div>
    </div>

    <div class="pageFooter">
      <img src="../../assets/register/footerBg.png" alt="" />
      <img src="../../assets/register/footer.png" alt="" class="footerText" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  phone: "",
  code: "",
  password: "",
  confirmPassword: "",
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
    background: url("../../assets/register/loginBg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .login {
      padding: 10px;

      width: 450px;
      height: 270px;
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
        // :deep(.el-input__inner) {
        //   width: 30px;
        // }
        .code {
          position: relative;
        }
        .getCode {
          position: absolute;
          color: green;
          width: 90px;
          height: 31px;
          line-height: 31px;

          right: 200px;
          top: 62px;

          border: 1px solid green;
          border-radius: 20px;
          font-size: 14px;
          text-align: center;
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
        img {
          width: 130px;
          height: 130px;
          margin-top: -50px;
        }
        .title {
          font-size: 14px;
          margin-bottom: 80px;
          margin-top: 30px;
          margin-left: 5px;
        }
        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 30px;
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
