<template>
  <div class="login">
    <!-- 登录页面 -->
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/2019pILfAg7Avr1567732916.png" alt />
    </div>
    <!-- 登录 -->
    <van-form @submit="onSubmit">
      <!-- 用户名 -->
      <van-field v-model="mobile" name="用户名" label placeholder="请输入手机号" />
      <!-- 密码  -->
      <van-field v-model="password" type="password" name="密码" label placeholder="请输入密码" />
      <div class="pass">
        <span @click="$router.push('/forgetPass')">找回密码</span>
        <span @click="$router.push('/smsLogin')">注册/验证码登录</span>
      </div>
      <div>
        <van-button round block type="warning" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { AjaxLogin } from "@/utils/myApi";
export default {
  // 组件名称
  name: "Login",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      mobile: "",
      password: "",
      type: 1,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {}
};
</script> 

<style scoped lang="scss">
.login {
  .logo {
    width: 100%;
    padding: 0 0.4rem;
    box-sizing: border-box;
    img {
      width: 2.36rem;
      margin: 0.5rem 0.3rem;
    }
  }
  .van-form {
    padding: 0 0.4rem;
  }
  .pass {
    font-size: 0.12rem;
    color: #999;
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    margin-bottom: 0.4rem;
    padding: 0 0.1rem;
  }
}
</style>
