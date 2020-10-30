<template>
  <div class="info">
    <div class="header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>个人信息</p>
      <p></p>
    </div>
    <ul class="ul-box">
      <li>
        <van-cell is-link @click="showPopup">
          <div>
            <span>头像</span>
          </div>
          <div>
            <span>头像</span>
          </div>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>昵称</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>手机号</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>性别</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>出生日期</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>所在城市</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>学科</span>
        </van-cell>
      </li>
      <li>
        <van-cell is-link @click="showPopup">
          <span>年级</span>
        </van-cell>
      </li>
    </ul>
    <van-popup position="bottom" v-model="show">内容</van-popup>
  </div>
</template>

<script>
import { AjaxInfo,AjaxEdit } from "../../utils/myApi";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      show: false
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    showPopup() {
      this.show = true;
    },
    async info(){
      let res = await AjaxInfo()
      console.log(res);
      let a = await AjaxEdit()
      console.log(a);
    }
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.info()
  }
};
</script> 

<style scoped lang="scss">
.info {
  width: 100%;
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
  .ul-box {
    width: 100%;
    padding: 0 0.15rem;
    box-sizing: border-box;
    background-color: #fff;
    margin: 0.1rem 0;
    li {
      width: 100%;
      border-bottom: 0.01rem solid #ccc;
      .van-cell {
        div {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
