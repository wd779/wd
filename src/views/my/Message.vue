<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">消息通知</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <!-- 课程通知 -->
    <ul>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-course.d8a2c8d5.png" alt />
        </div>
        <div class="info">
          <span>课程通知</span>
          <p class="content">您报名的课程《李老师18号20号地理大课堂开课啦》已经有3天没有学习了，快去学习吧</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-system.db56e51b.png" alt />
        </div>
        <div class="info">
          <span>系统通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-order.41755990.png" alt />
        </div>
        <div class="info">
          <span>订单通知</span>
          <p>您的课程订单《》取消成功</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-oto.d8a2c8d5.png" alt />
        </div>
        <div class="info">
          <span>约课通知</span>
          <p>暂无消息</p>
        </div>
      </li>
      <li>
        <div class="icon">
          <img src="https://wap.365msmk.com/img/icon-msg-exam.8a210fd7.png" alt />
        </div>
        <div class="info">
          <span>考试通知</span>
          <p>暂无消息</p>
        </div>
      </li>
    </ul>
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
ul {
  margin-top: 0;
  border-top: .2vw solid #f5f5f5;
  background: #fff;
  padding: 1.33333vw 4vw;
//   margin: 2.66667vw 0;
}
li {
  height: auto;
  line-height: normal;
  display: flex;
  color: #595959;
  border-bottom: .01vw solid #e0dddd;
}
.icon {
  padding: 2.6vw 0;
  margin-right: 4vw;
}
.icon img {
  width: 11.73333vw;
  height: 11.73333vw;
  border-radius: 50%;
}
.info {
  display: flex;
  flex-direction: column;
  color: #595959;
  padding: 0.2rem 0;
  padding: 2vw 0;
  position: relative;
}
span {
  font-size: 4vw;
  margin-bottom: 2.6vw;
}
p {
  font-size: 3.4vw;
}
</style>
