<template>
  <div>
    <div class="teach-page">
      <!-- 标题 -->
      <div class="header">
        <header>
          <span class="back">
            <img src="../../assets/下载.png" @click="$router.go(-1)" alt="" />
          </span>
          <h3>讲师详情</h3>
        </header>
      </div>

      <!-- 模板介绍 -->
      <div class="teacher-info">
        <div class="ti-base">
          <img :src="info.avatar" alt="" />
          <div>
            <p>
              <span data-v-8a020ce2="">{{ info.real_name }}</span
              ><font data-v-8a020ce2="">M20</font>
            </p>
            <p data-v-8a020ce2="">
              男
              <font data-v-8a020ce2="">30年教龄</font>
            </p>
          </div>
          <button 
          @click="follow" 
          class="follow" 
          v-if="data.flag == 2">
            关注
          </button>
          <button
            @click="cancelFollow"
            class="cancelFollow"
            v-if="data.flag == 1"
          >
            已关注
          </button>
        </div>
      </div>

      <!-- 讲师  简介 -->
      <div class="com-box">
        <div class="vant-nav">
          <van-tabs v-model="activeName">
            <van-tab title="讲师介绍" name="a">
              <ul class="teacher-tro">
                <li><span>教学年龄</span><font>30年</font></li>
                <li><span>授课价格</span><font>400学习币</font></li>
                <li>
                  <span>老师简介</span>
                  <font
                    >　
                    杨老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
                    　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
                  </font>
                </li>
              </ul>
            </van-tab>
            <van-tab title="主讲课程" name="b">
              <div class="vant-list-con"></div>
            </van-tab>
            <van-tab title="学员评价" name="c">
              <van-empty description="暂无学员评价" />
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <button
        class="course-btn van-button van-button--default van-button--normal"
        @click="subscribe"
      >
        <span class="van-button__text">立即预约</span>
      </button>
    </div>
  </div>
</template>

<script>
import {
  GetTeacherInfo,
  GetTeacherDetailed,
  collectTeacher,
  cancelCollectTeacher,
} from "../../utils/myApi";
export default {
  data() {
    return {
      activeName: "a",
      info: {},
      data: "",
      id:"",
    };
  },
  mounted() {
    // console.log(this.$route.query.ID);
    this.GetInfo();
    this.getDetailed();
  },
  methods: {
    async GetInfo() {
      let res = await GetTeacherInfo(this.$route.query.ID);
      this.info = res.data.teacher;
      this.data = res.data;
      if (this.data == 1) {
        this.id = this.data.teacher.id
      }
      // console.log(this.data);
    },
    async getDetailed() {
      let res1 = await GetTeacherDetailed(this.$route.query.ID);
      // console.log(res1);
    },
    subscribe() {
      this.$router.push({ path: "/yuyue" });
    },
    async follow() {
      // console.log("去关注");
      let res = await collectTeacher(this.$route.query.ID);
      // console.log(res);
      if (res.code == 200) {
        this.GetInfo();
      }
    },
    async cancelFollow() {
      // console.log("取消关注");
      let res = await cancelCollectTeacher(this.$route.query.ID);
      // console.log(res);
      if (res.code == 200) {
        this.GetInfo();
      }
    },
  },
};
</script>

<style scoped>
.vant-list-con {
  width: 100%;
  height: 4vm;
}

.cancelFollow {
  color: #666;
}
.teacher-page {
  min-height: 100vh;
  background: #f0f2f5;
  padding-bottom: 1.6rem;
  padding-bottom: 16vw;
  box-sizing: border-box;
}
.header {
  height: 2.66667rem;
  height: 26.66667vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  background: linear-gradient(180deg, #63b7fe, #4e7de3);
}
.header header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .back {
  width: 0.66667rem;
  width: 6.66667vw;
  height: 100%;
  padding-left: 0.26667rem;
  padding-left: 2.66667vw;
}
.header .back header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header h3 {
  flex: 2;
  text-align: center;
  font-size: 0.48rem;
  font-size: 4.8vw;
  color: #fff;
}
.header .back img {
  width: 2.4vw;

  height: 4.26667vw;
}

.teacher-info {
  margin: -1.52rem auto 0;
  margin: -15.2vw auto 0;
  width: 9.46667rem;
  width: 94.66667vw;
  padding: 0 0.4rem;
  padding: 0 4vw;
  background: #fff;
  border-radius: 0.10667rem;
  border-radius: 1.06667vw;
  box-sizing: border-box;
}
.teacher-info .ti-base {
  height: 2.02667rem;
  height: 20.26667vw;
  display: flex;
  align-items: center;
}
.ti-base img {
  width: 1.06667rem;
  width: 10.66667vw;
  height: 1.06667rem;
  height: 10.66667vw;
  margin-right: 0.32rem;
  margin-right: 3.2vw;
  border-radius: 50%;
  flex: none;
}
.ti-base div {
  flex: 1;
}
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}
.ti-base button {
  width: 1.65333rem;
  width: 16.53333vw;
  height: 0.74667rem;
  height: 7.46667vw;
  background: #ebeefe;
  border-radius: 0.41333rem;
  border-radius: 4.13333vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #4169ff;
  color: #eb6100;
  border: 0;
}

.com-box {
  margin-top: 0.26667rem;
  margin-top: 2.66667vw;
  background: #fff;
}

.vant-teacher-con {
  width: 100%;
  height: 4vm;
}
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
}
.teacher-tro {
  padding: 0 0.4rem;
  padding: 0 4vw;
}
.teacher-tro li {
  display: flex;
  line-height: 1.06667rem;
  line-height: 10.66667vw;
  font-size: 0.34667rem;
  font-size: 3.46667vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #8c8c8c;
  padding-top: 0.26667rem;
  padding-top: 2.66667vw;
}
.teacher-tro li font {
  padding-top: 0.13333rem;
  padding-top: 1.33333vw;
  line-height: 0.8rem;
  line-height: 8vw;
  flex: 1;
}
.teacher-tro li span {
  margin-left: 0.13333rem;
  margin-left: 1.33333vw;
  margin-right: 0.53333rem;
  margin-right: 5.33333vw;
}
/* 立即预约 */
.course-btn,
.course-two-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1.17333rem;
  height: 11.73333vw;
  line-height: 1.17333rem;
  line-height: 11.73333vw;
  text-align: center;
}
.course-btn {
  background: #eb6100;
  font-size: 0.45333rem;
  font-size: 4.53333vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #fff;
}
.van-button:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: #000;
  border: inherit;
  border-color: #000;
  border-radius: inherit;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
</style>