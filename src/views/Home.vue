<template>
  <div class="home">
    <div class="con">
      <!-- 轮播图 -->

      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in Swiper" :key="item.id">
          <img :src="item.Swiper" style="width: 100%; height: 200px" />
        </van-swipe-item>
      </van-swipe>

      <div class="icon_con">
        <div class="icon_warpper">
          <div class="icon_botton">
            <ul>
              <li @click="onClick">
                <img src="../assets/imgs/特色课.png" alt="" />
                <p>特色课</p>
              </li>
              <li @click="onClick2">
                <img src="../assets/imgs/一对一.png" alt="" />
                <p>一对一辅导</p>
              </li>
              <!-- 学习日历 -->
              <li @click="onClickStudy">
                <img src="../assets/imgs/学习日历.png" alt="" />
                <p>学习日历</p>
              </li>
            </ul>

            <!-- 弹出层 -->
            <van-popup v-model="show">
              <div class="botton_icon">
                <van-icon name="cross" size="18px" @click="isShow" />
              </div>

              <img src="../assets/feiji.decaf161.png" class="imgs" />
              <div class="d1">赶紧登录一下吧</div>
              <div class="d2">立即预约一对一辅导,浏览更多课程视频</div>
              <div class="button">
                <p>立即预约</p>
              </div>
            </van-popup>
          </div>
        </div>
      </div>
    </div>

    <!-- 图标 -->

    <!-- 名师阵容 -->
    <Title>名师阵容</Title>
    <div
      v-for="item in RenowneList4"
      :key="item.teacher_id"
      @click="TeacherDetails"
    >
      <RenownedTeacher :list="item"></RenownedTeacher>
    </div>

    <!-- 精品课程 -->
    <Title>精品课程</Title>
    <div v-for="item in RenowneList1" :key="item.id" @click="toDetails(item)">
      <Crad :data="item"></Crad>
    </div>

    <!-- 明星讲师 -->
    <Title>明星讲师</Title>
    <div
      v-for="item in RenowneList"
      :key="item.teacher_id"
      @click="TeacherDetails"
    >
      <RenownedTeacher :list="item"></RenownedTeacher>
    </div>
  </div>
</template>

<script>
//按钮 图标

//明星讲师
import RenownedTeacher from "../components/Renownedteacher/renownedteacher";
//精品课程卡片
import Crad from "../components/Card";
//home页  分类标签组件
import Title from "../components/Renownedteacher/Renowned_teacher_border";
// 首页api接口
import { GetHomeList } from "../utils/myApi";
export default {
  name: "Home",
  components: {
    RenownedTeacher,
    Crad,
    Title,
  },
  mounted() {
    this.onRenowneList();
  },
  data() {
    return {
      show: false,
      Swiper: [
        {
          Swiper: require("../assets/Swiper/20193KAjU2cB6h1569839562.jpg"),
          id: 1,
        },
        {
          Swiper: require("../assets/Swiper/20197Cxc53hktC1569839552.jpg"),
          id: 2,
        },
        {
          Swiper: require("../assets/Swiper/2019LnKumseuhw1569839569.jpg"),
          id: 3,
        },
        {
          Swiper: require("../assets/Swiper/2019MGNW3BtiS91569839576.jpg"),
          id: 4,
        },
      ],
      RenowneList: "",
      RenowneList1: "",
      RenowneList4: "",
    };
  },

  methods: {
    async onRenowneList() {
      var res = await GetHomeList();

      this.RenowneList = res.data[0].list;
      this.RenowneList1 = res.data[1].list;
      this.RenowneList4 = res.data[4].list.slice(0, 3);
      // console.log(this.RenowneList1);
    },
    // 点击进入 课程
    onClick() {
      this.$router.push({
        path: "/Appointment",
      });
    },

    // 点击进入一对一辅导
    onClick2() {
      this.$router.push({
        path: "/Fudao",
      });
    },

    // 学习日历
    onClickStudy() {
      // 获取token   判断 登录状态
      let str = localStorage.getItem("user");
      // console.log(str);
      if (str == null) {
        this.show = true;
      } else {
        this.$router.push({
          path: "/study",
        });
      }
    },
    //  点击 X 图标  关闭弹框
    isShow() {
      this.show = false;
    },
    // 跳转课程详情
    toDetails(item) {
      console.log(item.id);
      this.$router.push({ name: "Details", query: { con: item } });
    },
    // 点击跳转到  讲师详情
    TeacherDetails() {
      // 获取token   判断 登录状态
      let str = localStorage.getItem("user");
      // console.log(str);
      if (str == null) {
        this.show = true;
      } else {
        this.$router.push({
          path: "/teacher_details",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped >
.my-swipe {
  width: 100%;
  height: 30vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.con {
  width: 100%;
  height: 42vh;
  position: relative;
}

.icon_con {
  position: relative;
  top: -4vh;
  width: 100%;
  height: 8vh;
}
.icon_warpper {
  width: 100%;
  height: 0.8rem;
}
.icon_botton {
  width: 100%;
  height: 0.8rem;
}

ul {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 8px;
  align-items: center;
  font-size: 12px;
  color: #8c8c8c;
}
ul li {
  width: 30%;
  height: 100%;
  background-color: #fff;
  text-align: center;
  border-radius: 8px 8px 8px 8px;
}
ul li img {
  width: 0.5rem;
  height: 0.5rem;
  align-items: center;
  margin-top: 0.05rem;
}
.imgs {
  width: 100%;
  height: 60%;
}
.van-popup--center {
  width: 80%;
  height: 50%;
  top: 51%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  border-radius: 10px 10px 10px 10px;
}
.d1 {
  text-align: center;
  font-size: 6px;
}
.d2 {
  text-align: center;
  font-size: 6px;
  color: #8c8c8c;
}
.button {
  width: 100%;
  text-align: center;
  position: relative;
}
.button p {
  text-align: center;
  width: 2.3rem;
  height: 0.5rem;
  background-color: #eb6100;
  position: absolute;
  border-radius: 20px 20px;
  line-height: 0.5rem;
  color: aliceblue;
  bottom: -55px;
  left: 13%;
}
.van-cell {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  /* background-color: #fff; */
}
.van-cell[data-v-82a4ee22] {
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  /* background-color: #fff; */
}
.botton_icon {
  position: fixed;
  right: 5px;
  top: 5px;
}
</style>
