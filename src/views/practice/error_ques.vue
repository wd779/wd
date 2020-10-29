<template>
  <div>
    <van-nav-bar title="仿真模拟" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <!-- 模拟考试 -->
    <div class="pack-card">
      <div class="empty">
        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
        <p>请稍等，模拟考正在赶来得路上啦</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      value2: "a",
      value3: "one",
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "考点专练", value: 3 },
        { text: "仿真模考", value: 4 }
      ],
      option2: [
        { text: "巩固全部错题", value: "a" },
        { text: "全部", value: "b" },
        { text: "进行中", value: "c" },
        { text: "已结束", value: "d" }
      ],
      option3: [
        { text: "移除错题", value: "one" },
        { text: "全部", value: "two" },
        { text: "已做", value: "three" },
        { text: "未做", value: "fore" }
      ]
    };
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
  // 以下是生命周期钩子 注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {}
};
</script> 


<style scoped>
.van-dropdown-item {
  text-align: center;
}
.pack-card {
  width: 100%;
  box-sizing: border-box;
  padding: .8rem;
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
