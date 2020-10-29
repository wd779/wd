<template>
  <div class="smsLogin">
    <!-- 注册/验证码登录页面 -->
    <!-- logo -->
    <div class="logo">
      <img src="../../assets/2019pILfAg7Avr1567732916.png" alt />
    </div>
    <!-- 验证码登录 -->
    <van-form @submit="onSubmit">
      <div class="yan">
        <van-field v-model="mobile" name="用户名" label placeholder="请输入手机号" />
        <span @click="sms">获取验证码</span>
      </div>
      <van-field v-model="sms_code" name="验证码" label placeholder="请输入短信验证码" />
      <div class="pass">
        <span style="color: #b7b7b7;">*未注册的手机号将自动注册</span>
        <span style="color: #999;" @click="$router.push('/login')">使用密码登录</span>
      </div>
      <div style="margin: 0.3rem;">
        <van-button round block type="warning" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { AjaxLogin, AjaxSmsLogin } from "@/utils/myApi";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      mobile: "",
      sms_code: "",
      type: 2,
      sms_type: "",
      client: 1
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
.smsLogin {
  width: 100%;
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
    padding: 0 0.3rem;
    box-sizing: border-box;
    .yan {
      position: relative;
      span {
        position: absolute;
        z-index: 999;
        top: 0.2rem;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #eb6100;
      }
    }
    .van-field {
      line-height: 0.4rem;
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
}
</style>
