<template>
  <div>
    <van-nav-bar title="习题收藏" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
       <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 模拟考试 -->
    <div class="pack-card">
      <div class="empty">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <p>暂无收藏记录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AjaxQues_collect } from "@/utils/practiceApi";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      value1: 0,
      option1: [
        { text: "题目类型", value: 0 },
        { text: "单选", value: 1 },
        { text: "多选", value: 2 },
        { text: "判断", value: 3 },
        { text: "连接", value: 4 }
      ]
    };
  },
    created() {
     AjaxQues_collect().then(res=>{
         console.log(res)
     })
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onClickLeft() {
      // 返回上一级
      this.$router.go(-1);
    }
  },

  mounted() {},

};
</script> 

<style scoped>
.pack-card {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
}
.empty {
  flex-direction: column;
  text-align: center;
}
img {
  width: 4rem;
  width: 40vw;
  height: 4rem;
  height: 40vw;
}
p {
  font-size: 0.4rem;
  font-size: 4vw;
  color: #8c8c8c;
  margin-top: 0.53333rem;
  margin-top: 5.33333vw;
}
</style>
