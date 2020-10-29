<template>
  <div>
    <div class="header">
      <slot name="left">
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </slot>
      <slot name="title">找回密码</slot>
      <slot name="right">1</slot>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
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
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
  box-sizing: border-box;
  height: 0.45rem;
  align-items: center;
  font-size: 0.18rem;
  background-color: #fff;
}
</style>
