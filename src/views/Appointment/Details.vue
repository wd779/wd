<template>
  <div>
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="share-o" size="18" />
      </template>
    </van-nav-bar>
    <div class="info">
      <div class="top">
        <p>{{ data.title }}</p>
        <p>{{ data.price == 0 ? "免费" : "￥" + data.price }}</p>
        <p>共{{ data.total_periods }}课时 | {{ data.sales_num }}人已报名</p>
        <p>
          开课时间 &nbsp;{{
            new Date(data.created_at * 1000).toLocaleDateString()
          }}
        </p>
      </div>
      <div class="box">
        <p>教学团队</p>
        <div class="address">
          <img :src="data.cover_img" />
          <p>{{ data.address == undefined ? "团队" : data.address }}</p>
        </div>
      </div>
      <div class="box">
        <p>课程介绍</p>
        <div class="connect">
          {{ data.course_statement }}
        </div>
      </div>
      <div class="box">
        <p>课程大纲</p>
        <div class="li" v-for="item in 10" :key="item">
          <span class="dian">·</span>
          <van-tag type="warning">回放</van-tag>
          <span class="title">第一讲第一课时</span>
          <p>
            {{ data.address == undefined ? "团队" : data.address }}
            {{ new Date(data.created_at * 1000).toLocaleDateString() }}
            -
            {{ new Date(data.created_at * 1000).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
    <div class="btn">
      <van-button type="default" class="btn_n">立即学习</van-button>
    </div>
  </div>
</template>

<script>
import { GetCurriculum } from "../../utils/myApi";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      data: "",
    };
  }, // 计算属性
  computed: {}, // 侦听器
  watch: {}, // 组件方法
  methods: {
    async getdata() {
      // console.log(this.$route.query);
      var a = await GetCurriculum(this.$route.query.con.id);
      this.data = a.data.info;
      console.log(this.data);
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */ created() {},
  mounted() {
    new Date();
    this.getdata();
    // this.GetCurriculum().then(res=>{
    //     console.log(res);
    // })
  },
};
</script> 

<style lang="scss" scoped>
.info {
  height: 84vh;
  overflow: scroll;
}
.btn {
  height: 8vh;
}
.btn .btn_n {
  width: 100%;
  height: 100%;
  background: #fc5500;
  color: white;
}
.top {
  width: 100%;
  height: 1.5rem;
  background: white;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.top p {
  line-height: 0.33rem;
}
.top p:nth-child(1) {
  width: 100%;
  display: flex;
}
.top p:nth-child(2) {
  color: #fc5500;
}
.top p:nth-child(3) {
  color: #8c8c8c;
}
.top p:nth-child(4) {
  color: #8c8c8c;
}
.box {
  width: 100%;
  margin-top: 0.2rem;
  background: white;
  padding: 0 0.2rem;
  box-sizing: border-box;
}
.box p:nth-child(1) {
  padding-top: 0.1rem;
}
.box .li .dian {
  color: #ff976a;
  font-size: 0.1rem;
  font-weight: 900;
  padding: 0 0.05rem;
}
.box .li {
  margin: 0.03rem 0;
}
.box .li p {
  text-indent: 2em;
  color: #8c8c8c;
}
.box .li .title {
  margin-left: 0.2rem;
}
.address {
  width: 0.5rem;
  padding: 0.2rem 0;
}
.address img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.address p {
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
}
.connect {
  padding: 0.2rem 0;
}
</style>
