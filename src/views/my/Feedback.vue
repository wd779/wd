<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">意见反馈</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <!-- 意见反馈 -->
    <div class="all">
      <div class="con-to">
        <div class="con">
          <div class="van">
            <textarea placeholder="请输入您的意见" maxlength="500" class="van-con"></textarea>
          </div>
        </div>
        <p class="max-len">0/500</p>
        <p class="btn">提交</p>
      </div>
    </div>
  </div>
</template>


<script>
import appHeader from "../../components/AppHeader.vue";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {}
};
</script> 


<style scoped lang="scss">
#app {
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
}
.all {
  line-height: 12.8vw;
}
.con-to {
  height: auto;
}
.con {
  border: 1px solid #ddd;
  border-radius: 1.33333vw;
  color: #323233;
  text-align: left;
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
  margin: 3vw;
}


.van {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: #fff;
}
.van-con {
  padding: 2.66667vw 2.66667vw;
  font-size: 3.2vw;
  line-height: 3.2vw;
  min-height: 0;
  height: 44vw;
  border: none;
}
.max-len {
  font-size: 3.2vw;
  text-align: right;
  color: #b7b7b7;
  margin: 1.3vw 5.3vw 0 0;
  background: #fff;
}
.btn {
  background-color: #eb6100;
  color: #fff;
  width: 92vw;
  margin: 13vw auto;
  border-radius: 1.06667vw;
  font-size: 4.53333vw;
  text-align: center;
  line-height: 11.73333vw;
}
</style>
