<template>
  <div class="forgetPass">
    <!-- 找回密码页面 -->
    <!-- 头部 -->
    <div class="header">
      <p>设置密码</p>
    </div>
    <!-- 找回密码 -->
    <van-form @submit="onSubmit">
      <div class="yan">
        <van-field v-model="password" name="密码" placeholder="请输入密码" />
        <van-field
          v-model="checkPassword"
          name="密码"
          placeholder="请再次输入密码"
        />
      </div>
      <div style="margin: 0.3rem">
        <van-button round block type="warning">确定</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { AjaxPass } from "@/utils/myApi";
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
      password: "",
      checkPassword: "",
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async onSubmit() {
      // console.log("提交");
      if (this.password == "" || this.checkPassword == "") {
        this.$toast({
          message: "密码为空",
          position: "bottom",
        });
        return false;
      } else if (this.password !== this.checkPassword) {
        this.$toast({
          message: "两次密码不一致",
          position: "bottom",
        });
        return false;
      }
      var res = await AjaxPass({
        mobile: JSON.parse(localStorage.getItem("user")).mobile,
        sms_code: JSON.parse(localStorage.getItem("sms")),
        client:1,
        sms_type:"getPassword",
        password: this.password,
      });
      if (res.code == 200) {
        this.$router.push({ path: "/" });
      }else{
        this.$toast({
          message: res.msg,
          position: "bottom",
        });
      }
      console.log(res);
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {},
};
</script> 

<style scoped lang="scss">
.forgetPass {
  width: 100%;
  .header {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
    height: 0.45rem;
    align-items: center;
    font-size: 0.18rem;
  }
  .van-form {
    .yan {
      position: relative;
      span {
        position: absolute;
        z-index: 999;
        top: 0.1rem;
        right: 0.2rem;
        font-size: 0.12rem;
        color: #eb6100;
      }
    }
    .van-field {
      line-height: 0.4rem;
    }
  }
}
</style>
