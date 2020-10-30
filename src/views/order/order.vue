<template>
  <div class="fyh_zhy">
    <!-- taba标签页 -->
    <div>
      <van-tabs v-model="active">
        <van-tab title="待上课">
          <div class="empty">
            <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt />
            <p>还没有待上课记录哦</p>
            <button @click="$router.push('/login')" v-show="!deng" >登录注册</button>
            <button @click="$router.push('/fudao')" v-show="deng" >立即约课</button>
          </div>
        </van-tab>
        <van-tab title="已上课">
          <div class="empty">
            <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt />
            <p>还没有上课记录哦</p>
            <button @click="$router.push('/fudao')" >立即约课</button>
          </div>
        </van-tab>
        <van-tab title="已取消">
          <div class="empty">
            <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt />
            <p>还没有取消上课记录哦</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
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
      active: 0,
      deng:false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    
  },

  mounted() {
      if( sessionStorage.getItem("token") ){
            this.deng=true
      }else{
           this.deng=false
      }
  }
};
</script> 

<style scoped>
.header {
  height: 11.73333vw;
  position: fixed;
  z-index: 1;
  width: 100%;
  background: #fff;
  margin-bottom: .1rem;
}
h3 {
  font-size: 4.8vw;
  color: #595959;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 66.66667vw;
  line-height: 11.73333vw;
   font-weight: 500;
  font-size: 4.8vw;
  color: #595959;
}
.empty {
  text-align: center;
}
img {
  /* display: block;
  width: 47.73333vw;
  padding: 0.9rem; */
  display: block;
  width: 47.73333vw;
  height: 34.4vw;
  margin: 26.66667vw auto 2.66667vw;
}
p {
  font-size: 3.73333vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #b7b7b7;
  line-height: 5.33333vw;
  margin-bottom: 6.66667vw;
  text-align: center;
}
button {
  margin: 0 auto;
  display: block;
  width: 23.46667vw;
  height: 7.46667vw;
  font-size: 3.46667vw;
  color: #fff;
  background: #eb6100;
  border-radius: 0.66667vw;
  border: none;
}
.van-tabs {
  box-sizing: content-box;
  height: 100%;
  padding-bottom: 0.2rem;
}
</style>
