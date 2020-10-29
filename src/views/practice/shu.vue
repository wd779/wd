<template>
  <div>
    <van-nav-bar title="数学" left-text left-arrow @click-left="onClickLeft" />
    <!-- 题库按钮 -->
    <van-cell>
      <div class="point-container">
        <div class="select">
          <div class="f-left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA2CAYAAACfkiopAAAFTElEQVRoQ+2ba2hcRRTHz7m7IeLbD1JbH/VV4gPxgVpFKrYqFS0mtq575yaVfBEfRbBI8YuStB8UpB9U6gM/aHCTObMGq62VqFRNUbRWLT76QYWKDyREUGNq0Ibd+5e57A2bdpO9N+mm697Mh7Dsnjkzv3vOnZlz5oSJiDzP2wJgnf2ckNbFruuuZeZXEgJsMf8holZWSu0joosjgu8noqcdx9lboEKxUh/HdxjApcx8LxFdFlHvnIn5jn9tvi+/24IfIKLjI4y8a2RkZOXAwMDBCLKBiFKqn4jujCpfazkAW40xa+w4FvxvIjquyqDDLS0ti7q7u/24k1NKfU9ES+L2q4U8M6/QWn8Qgv9FRCdONxAzb9Rad1uZzs7Ok8fHx5/wfX9hpT7M/HsqlXq0t7d3yP7uuu49zPxiLUBi6hxn5tO01n9GBgfQaozZXnLfJ4loQ5VB+0SkowS+lJl3x5xkLcR/EpGzQ8XW1ataHMAqY8xbJfAcEQVQ07SdInKz/T2bzV7lOM6eWpDE0QngZ2PM4ljgzNymtd5WAn+BiOyKPWUDsM0Y0xaAt2evcXznkziTrIUsgEJTU9PpuVzut8DVXdcdY+Zjq7zj/3vwAJa5Q2vdF77jI0R0UhLAAewzxlwSgu8iouuTAF5iXC8iT1lXv5KZP0sQuEW9j+1fz/NWA3h5qv0cwN3GGLua29NYrMVNKbWCiN6rxYI1C52dAXgJaAGA24jIeoBTrtT3/efz+fxXMwHPZDLnpNPpR2YxySPZdZSIekXk6wnwqNrjWjyq3rmWmweP+sTnLT7Nkyo/uUV9oHMtN+Hqrusus4s2Mx8WQgLoMsZ8PJPFLZvNXug4zjNzDVZpPACjdvfK5/M7AnCl1MNEtHmqyZUf9eK6uuu6NzBzEAPXS2Pmh9jzvJUA3k7SAcYa0oalnxLR1QkCz4rIq5Hi8UYIS0uGHRSR5fZzpJxbo4CXZ5KSZHGbKF0kIsOhxaumnhrB4gB+NcacSURIFDgR/SAi54WLeJJc/d/m5uaFPT09NuOUrMWNiG4XkTdD8KpXSI3wjpdc/EMRCdJs1tX3EtHlSTnAMPMarfVWe2S9FUBwWTDNWb0h0sshH4BMIoMUIlo/EZbaqx77LlfKuTVSWMrMPXaBm089RY2V48bjUfXOtdy8xaM+8YazuOd5iwHYepXDcm5VLhRGQTjIxKeWbRcT18T1dqHgOE6ur6/vm/IrJHt9eswUSbopr5BSqdSSYrFoz78/hrU05VnWOr1CWsvZbPYKx3G+iHGAsRnTB0vyy0TkI/u5vb39It/3bcnHCQD6jTF32e/rpTCgnC9INrquu5OZb4wB/i4R2TKPCeiwb0dHR0uxWPyWiL4TkQvqERzABmPMZntW/4OITokB/hIRfS4iz1Xqo5RqA+AVi0XV399frDOLfykiQVwSuxTE9gmzGFaBUupxW1EhIpNqYTOZTKrewAG0G2P0jDIw5VZWSj1ARM+WvtskIl2HekE9WRzAWcaYX2YF7nne/QAmuXt5IWD4AOoIfHhoaOiMwcHBwozBK0GX7eHdxpiNdQi+X0TOD+cVKecGYLUx5nXbyXXddcy8pcpJr0tENpW2uet83w+2vKPcxtLp9IJcLjcWWrxqES8z36K1fueQd3pajtDtlVK2JNyWhh/1BmC5MWYwDritAT0XwPsxZ7+2UCi8lk6n7cOdVFcTU8+REn9DRO4Iwe2Bo2UazUUAO5i5dYajbwdwU7XqyRnqjt2NmZdqrffYfbyTmW2pV8UGAMwcO3yNPaO563CAmVeFQUqi/hkHwGP/AQL7u4r8M5lcAAAAAElFTkSuQmCC"
              alt
              @click="ret"
            />
            <span>题库选择</span>
          </div>
          <img src="https://wap.365msmk.com/img/setting@2x.07fa0236.png" alt @click="showPopup" />
        </div>
      </div>
    </van-cell>
<!-- 遮罩层 -->
    <van-popup v-model="show" round="boolean" position="bottom" :style="{ height: '30%' } " close-on-click-overla="boolean">
      <div class="kk">
        考点专练设置
        <i class="van-icon van-icon-close"></i>
      </div>
      <div class="van-action-sheet__content">
        <div class="tip">设置考点专练出题数量</div>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">随机15道</van-radio>
          <van-radio name="2">按顺序做题</van-radio>
        </van-radio-group>
        <div class="btn">确定</div>
      </div>
    </van-popup>
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
    return {
      show: false,
      radio: "1"
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
    // 弹出层
    showPopup() {
      this.show = true;
    },
    ret(){
        this.$router.push("/point");
    }
  }
};
</script> 

<style scoped>
.point-container {
  padding: 4vw;
  /* padding: 0.4rem; */
}
.select {
  font-size: 0.4rem;
  font-size: 4vw;
  color: #262626;
  margin-bottom: 0.53333rem;
  margin-bottom: 5.33333vw;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.f-left {
  float: left;
}
img {
  width: 4.13333vw;
  margin-right: 0.13333rem;
  margin-right: 1.33333vw;
}
.van-icon {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0;
  right: 0.4rem;
  top: 0.42667rem;
  display: inline-block;
  font-size: 4vw;
}
.kk {
  text-align: center;
}
.tip {
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  color: #595959;
  padding: 0.66667rem 0.4rem;
  padding: 6.66667vw 4vw;
  font-weight: 300;
}
.btn {
  color: #fff;
  background-color: #eb6100;
  text-align: center;
  height: .4rem;
  line-height: .4rem;
}
.van-radio-group {
  font-size: 0.37333rem;
  font-size: 3.73333vw;
  margin-bottom: 0.93333rem;
  margin-bottom: 9.33333vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  display: flex;
}
</style>
