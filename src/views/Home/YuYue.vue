<template>
  <div id="app">
    <div class="header">
      <span class="back">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC"
          @click="$router.go(-1)"
        />
      </span>
      <h3>预约课程</h3>
    </div>
    <div class="teacher-info">
      <img
        alt
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg"
      />
      <div>
        <p>
          <span>齐钰</span>
        </p>
        <p>女 8年教龄</p>
      </div>
      <a href="/teacher?id=36" class>查看详情</a>
    </div>
    <!-- 选择数据 -->
    <div class="op-title">
      选择时间
      <span>(北京时间)</span>
      <span class="lol"></span>
    </div>
    <!-- 星期 -->
    <div class="op-time">
      <div class="opt-block">
        <p class="active">
          <span>周一</span>
          <span>11/02</span>
          <i></i>
        </p>
        <p class>
          <span>周二</span>
          <span>11/03</span>
          <i style="display: none;"></i>
        </p>
        <p class>
          <span>周三</span>
          <span>11/04</span>
          <i style="display: none;"></i>
        </p>
        <p class>
          <span>周四</span>
          <span>11/05</span>
          <i style="display: none;"></i>
        </p>
        <p class>
          <span>周五</span>
          <span>11/06</span>
          <i style="display: none;"></i>
        </p>
        <p class>
          <span>周六</span>
          <span>11/07</span>
          <i style="display: none;"></i>
        </p>
      </div>
    </div>
    <!-- IMG -->
    <div class="empty">
      <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt />
      <p>暂无信息</p>
    </div>
    <!-- 按钮 -->
    <button class="course-btn van-button van-button--default van-button--normal">
      <span class="van-button__text">立即预约</span>
    </button>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
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

  mounted() {}
};
</script> 


<style scoped>
#app {
  height: 100%;
  background: #eee;
  box-sizing: border-box;
}
.header {
  height: 26.66667vw;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
  display: flex;
}
.back {
  width: 6.66vw;
  padding-left: 2.66vw;
}
h3 {
  font-size: 4.8vw;
  text-align: center;
  color: #fff;
  padding-left: 31vw;;
}
.teacher-info {
  margin: -15.2vw auto 0;
  height: 21.6vw;
  width: 94.66667vw;
  display: flex;
  align-items: center;
  padding: 0 4vw;
  background: #fff;
  border-radius: 1.06667vw;
  box-sizing: border-box;
}
.teacher-info img {
  width: 10.66667vw;
  height: 10.66667vw;
  margin-right: 3.2vw;
  border-radius: 50%;
  flex: none;
}
.teacher-info div {
  flex: 1;
}
.teacher-info div p {
  padding-bottom: 0.8vw;
}
.teacher-info div p:first-child span {
  font-size: 4vw;
  color: #595959;
  line-height: 5.6vw;
  padding-right: 1.33333vw;
}
.teacher-info div p:nth-child(2) {
  font-size: 3.2vw;
  color: #b7b7b7;
  line-height: 4.53333vw;
}
.teacher-info a {
  flex: none;
  width: 20.26667vw;
  height: 7.46667vw;
  line-height: 7.46667vw;
  background: #fff;
  border-radius: 4.13333vw;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #eb6100;
  border: none;
  text-align: center;
  border: 1px solid #eb6100;
}
.op-title {
  font-size: 4vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #595959;
  line-height: 13.33333vw;
  position: relative;
  padding-left: 6.66667vw;
  height: 13.33333vw;
}
.op-title span {
  font-size: 3.2vw;
}
.lol {
  position: absolute;
  left: 3.2vw;
  top: 4.5vw;
  width: 0.8vw;
  height: 4.26667vw;
  background: #eb6100;
}

/* 按钮 */
.course-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 11.73333vw;
  line-height: 11.73333vw;
  text-align: center;
  background: #eb6100;
  font-size: 4.53333vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
}
/* 星期 */
.op-time {
  margin: 0 auto;
  width: 94.66667vw;
  height: 19.73333vw;
  background: #fff;
  border-radius: 1.06667vw;
  padding: 0 2.66667vw;
  overflow: auto;
  display: flex;
  box-sizing: border-box;
}
.opt-block {
  height: 16.53333vw;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
}
.op-time .opt-block .active {
  color: #eb6100;
}
.op-time .opt-block p {
  flex-direction: column;
  width: 14.93333vw;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #595959;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.op-time .opt-block p i {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 5.6vw;
  height: 1.06667vw;
  background: #4169ff;
  border-radius: 0.53333vw;
  transform: translateX(-50%);
}
.op-time .opt-block p span:first-child {
  margin-bottom: 1.86667vw;
}
/* img */
.empty {
  padding-top: 5.33333vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.empty img {
  width: 40vw;
  height: 40vw;
}
.empty p {
  font-size: 4vw;
  color: #8c8c8c;
  margin-top: 5.33333vw;
}
</style>
