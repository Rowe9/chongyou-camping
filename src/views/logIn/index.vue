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
            <el-input
              v-model="formLabelAlign.name"
              placeholder="Please input"
            />
            <!-- 验证码 -->
            <el-input
              v-model="formLabelAlign.name"
              placeholder="Please input"
            />
            <!-- 密码 -->
            <el-input
              v-model="input"
              type="password"
              placeholder="Please input password"
              show-password
            />
            <!-- 确认密码 -->
            <el-input
              v-model="input"
              type="password"
              placeholder="Please input password"
              show-password
            />
          </el-form>
        </div>
      </div>
    </div>

    <div class="footer"></div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const formLabelAlign = reactive({
  name: "",
  region: "",
  type: "",
});
</script>

<style lang="scss">
.container {
  .section {
    position: relative;
    width: 100%;
    height: 800px;
    background: url("../../assets/logIn/loginBg.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .login {
      width: 400px;
      height: 300px;
      background-color: pink;
      position: absolute;
      margin: 0 auto;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: left;
      .form {
        .el-input {
          margin-bottom: 20px;
          margin-left: 10px;
          border-radius: 10px !important;
        }
        :deep(.el-input__wrapper) {
          border-radius: 20px !important;
          background-color: pink;
        }
      }
    }
  }
}
</style>
