<template>
  <div>
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="share-o" size="18" @click="share" />
      </template>
    </van-nav-bar>
    <div class="info">
      <div class="top">
        <p>
          <span>{{ data.title }}</span>
          <van-icon
            class="top_right"
            name="star-o"
            @click="Collection"
            v-show="isshow == 0 ? true : false"
          />
          <van-icon
            class="top_right"
            name="star"
            @click="CancelCollection"
            v-show="isshow == 1 ? true : false"
          />
        </p>
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
      <van-button
        type="default"
        v-if="isbuy == 0"
        class="btn_n"
        @click="onsignUp"
        >立即报名</van-button
      >
      <van-button type="default" v-if="isbuy == 1" class="btn_n"
      @click="ToStudy"
        >立即学习</van-button
      >
    </div>
    <!-- 二维码 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper">
        <div class="block">
          <p>分享</p>
          <div>
            <img :src="imrUrl" />
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import {
  GetCurriculum,
  Collect,
  CancelCollect,
  SignUp
} from "../../utils/myApi";
import QRCode from "qrcode";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      data: "",
      id: "",
      show: false, //判断是否让遮罩层出现
      imrUrl: "", // 图片的地址
    };
  }, // 计算属性
  computed: {
    isshow() {
      return this.data.is_collect;
    },
    isbuy() {
      return this.data.is_join_study;
    },
  }, // 侦听器
  watch: {}, // 组件方法
  methods: {
    async onsignUp() {
      console.log(this.$route.query.con.id);
      let res = await SignUp({
        shop_id: this.$route.query.con.id,
        type:5
      });
      if (res.code == 200) {
        this.$toast('报名成功');
        this.$router.push({path:"/MyStudy"})
      }else if (res.code == 201){
        // console.log(res.msg);
        this.$toast(res.msg);
      }
      // console.log(res);
    },
    ToStudy(){
      this.$router.push({path:"/MyStudy"})
    },
    share() {
      console.log("分享");
      this.show = true;
      let url = location.href;
      // console.log(url);
      QRCode.toDataURL(url)
        //在这里拿到地址，把它赋值给data里面定义的值imrUrl
        .then((tpian) => {
          // console.log(tpian);
          this.imrUrl = tpian;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getdata() {
      // console.log(this.$route.query);
      var a = await GetCurriculum(this.$route.query.con.id);
      this.data = a.data.info;
      if (a.data.info.is_collect == 1) {
        // console.log(a.data.info.collect_id);
        this.id = a.data.info.collect_id;
      }
      console.log(this.data);
    },

    onClickLeft() {
      this.$router.go(-1);
    },
    async Collection() {
      // 获取token   判断 登录状态
      let str = localStorage.getItem("user");
      if (str == null) {
        this.$router.push({
          path: "/Login",
        });
      } else {
        var b = await Collect({
          course_basis_id: this.$route.query.con.id,
          type: 1,
        });
        // console.log(b);

        if (b.code == 200) {
          this.getdata();
          // console.log("选中");
          // this.$router.push({ path: "/Details", query: { con: this.$route.query.con} })
        }
      }
    },
    // 取消选中
    async CancelCollection() {
      // 获取token   判断 登录状态
      let str = localStorage.getItem("user");
      // console.log(str);
      if (str == null) {
        this.$router.push({
          path: "/Login",
        });
      } else {
        // console.log(this.$route.query.con.id);
        var b = await CancelCollect(this.id);
        if (b.code == 200) {
          this.getdata();
          // console.log("");
          // this.$router.push({ path: "/Details", query: { con: this.$route.query.con} })
        }
      }
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */ created() {},
  mounted() {
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
.block {
  width: 2rem;
  height: 2.2rem;
  background: white;
  text-align: center;
  border-radius: 5px;
  position: fixed;
  top: 2rem;
  left: 0.95rem;
}
.top_right {
  font-size: 0.24rem;
  float: right;
  color: #fc5500;
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
  width: 100%;
  line-height: 0.33rem;
}
.top p:nth-child(1) {
  width: 100%;
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
