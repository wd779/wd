<template>
  <div>
    <div class="icon_con">
      <div class="icon_warpper">
        <div class="icon_botton">
          <ul>
            <li @click="onClick">
              <img src="../../assets/imgs/特色课.png" alt="" />
              <p>特色课</p>
            </li>
            <li @click="onClick2">
              <img src="../../assets/imgs/一对一.png" alt="" />
              <p>一对一辅导</p>
            </li>
            <!-- 学习日历 -->
            <li @click="onClickStudy">
              <img src="../../assets/imgs/学习日历.png" alt="" />
              <p>学习日历</p>
            </li>
          </ul>

          <!-- 弹出层 -->
          <van-popup v-model="show">
            <div class="botton_icon">
              <van-icon name="cross" size="18px" @click="isShow" />
            </div>

            <img src="../../assets/feiji.decaf161.png" class="imgs" />
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
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },

  methods: {
    // 点击进入 课程
    onClick() {
      this.$router.push({
        path: "/Appointment",
      });
    },

    // 点击进入一对一辅导
    onClick2() {
      this.$router.push({
        path: "/fudao",
      });
    },

    // 学习日历
    onClickStudy() {
      // 获取token   判断 登录状态
      let str = sessionStorage.getItem("token");
      if (str == "") {
        this.show = true;
      } else {
        this.$router.push({
          path: "/study",
        });
      }

      console.log();
    },

    //  点击 X 图标  关闭弹框
    isShow() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.icon_con {
  width: 100%;
  height: 0.6rem;
}
.icon_warpper {
  width: 100%;
  height: 0.8rem;
}
.icon_botton {
  width: 100%;
  height: 0.8rem;
  /* position: fixed; */
  /* border: 1px solid #000; */
  /* top: 2rem; */
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
  width: 25px;
  height: 25px;
  align-items: center;
  margin-top: 10px;
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
  top: 0px;
}
</style>