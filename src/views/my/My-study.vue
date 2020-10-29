<template>
  <div class="box">
    <!-- 头部组件 -->
    <app-header>
      <template>
        <!-- <div slot="left"></div> -->
        <div slot="title">我的学习</div>
        <div slot="right">
          <van-icon name="coupon-o" />
        </div>
      </template>
    </app-header>
    <!-- 滚动标签栏 -->
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
        <ul class="ul-box">
          <li>
            <div class="div-box">
              <p>22号李老师大课堂开课啦</p>
              <div class="div-top">
                <i>□</i>
                <span>02月22日 10:00 ~ 02月23日 20:00</span> |
                <span>共3课时</span>
              </div>
              <div class="div-bottom">
                <van-progress pivot-text stroke-width="3" :percentage="0" />
                <span>已学习0%</span>
              </div>
              <span></span>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
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
  components: {
    appHeader
  },
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
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.ul-box {
  width: 100%;
  padding: 0.1rem 0.15rem;
  box-sizing: border-box;
  li {
    width: 100%;
    padding: 0.24rem 0.15rem;
    box-sizing: border-box;
    box-shadow: 0 0 0.1rem #ccc;
    border-radius: 0.06rem;
    .div-box {
      p {
        color: #333;
        line-height: 0.16rem;
      }
      .div-top {
        font-size: 0.1rem;
        line-height: 0.16rem;
        padding: 0.1rem 0 0.32rem 0;
        color: #666;
        i {
          margin-right: 0.05rem;
        }
      }
      .div-bottom {
        display: flex;
        align-items: center;
        .van-progress {
          width: 1.2rem;
        }
        span {
          font-size: 0.08rem;
          color: #8c8c8c;
          margin-left: 0.15rem;
        }
      }
    }
  }
}
</style>
