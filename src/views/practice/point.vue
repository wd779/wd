<template>
  <div>
    <van-nav-bar title="题库选择" left-text left-arrow @click-left="onClickLeft" />
    <!-- 搜索框 -->
    <van-search shape="round" background="#fff" placeholder="请输入题库名称关键词" />
    <!-- 拉下选择 -->
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      @click-item="fyhdata"
    />
  </div>
</template>

<script>
import { NavBar } from "vant";
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
      items: [
        {
          text: "求导题库",
          children: [
            {
              text: "洛必达法则",
              id: 2
            }
          ]
        },
        {
          text: "极限题库",
          children: [
            {
              text: "数学",
              id: 2
            }
          ]
        },
        { text: "生物", children: [] },
        { text: "化学", children: [] },
        { text: "数学", children: [] }
      ],
      activeId: 1,
      activeIndex: 0
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
    },
    fyhdata() {
      this.$router.push("/shu");
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
.selector-container {
  min-height: 100%;
  border-top: 1px solid #eaeaea;
  display: flex;
  flex-grow: 1;
}
.left {
  width: 2.8rem;
}
.item {
  font-size: 0.4rem;
  font-size: 4vw;
  color: #595959;
  box-sizing: border-box;
  padding: 0.48rem 0.61333rem;
  padding: 4.8vw 6.13333vw;
}
.right {
  margin-right: 0.53333rem;
  margin-right: 5.33333vw;
  flex: 1;
}
.classify-name {
  font-size: 0.32rem;
  font-size: 3.2vw;
  color: #595959;
  margin-bottom: 0.4rem;
  margin-bottom: 4vw;
  font-weight: 400;
}
.van-ellipsis {
  background: rgb(233, 186, 186);
  width: 30.93333vw;
}
</style>
