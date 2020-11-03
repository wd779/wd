<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的收藏</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <div v-for="item in list" :key="item.id">
      <Card :data="item" @CancelCollectioner="CancelCollectioner"></Card>
    </div>
  </div>
</template>

<script>

import Card from "../../components/Card copy";
import { GetCollect,CancelCollect } from "../../utils/myApi";
import appHeader from "../../components/AppHeader.vue";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader, Card },
  // 组件状态值
  data() {
    return {
      list: [],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async getinfo() {
      var res = await GetCollect();
      // console.log(res.data.list);
      this.list = res.data.list;
    },
    async CancelCollectioner (id){
      var res = await CancelCollect(id)
      // console.log(res);
      this.getinfo();
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.getinfo();
  },
};
</script> 

<style scoped lang="scss">
</style>
