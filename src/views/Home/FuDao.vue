<template>
  <div>
    <van-nav-bar
      title="一对一辅导"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickSearch"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <!-- 下拉菜单 -->
    <van-dropdown-menu @click="showPopup">
      <van-dropdown-item title="选择上课时间">
        <van-calendar
          :poppable="false"
          :show-confirm="false"
          :style="{ height: '300px' }"
        />
      </van-dropdown-item>

      <van-dropdown-item title="选择老师条件">
        <div class="MM_con">
          <div class="MM_warpper">
            <!-- 老师类型部分 -->
            <div class="MM_titile">
              <h6>老师类型</h6>
              <div class="MM_top">
                <span v-for="(item, index) in lm" :key="index">{{ item }}</span>
              </div>
            </div>

            <!-- 只看部分 -->
            <div class="look_titile">
              <h6>只看</h6>
              <div class="look_checked">
                <van-radio-group v-model="radio" direction="horizontal">
                  <van-radio name="1">已关注</van-radio>
                  <van-radio name="2">上过课的</van-radio>
                </van-radio-group>
              </div>
            </div>

            <!-- 性别部分 -->
            <div class="sex_titile">
              <h6>性别</h6>
              <div class="sex_top">
                <span>男</span>
                <span>女</span>
              </div>
            </div>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- 一对一列表 -->
    <div class="fudao_content">
      <div class="fudao_content_warpper" v-for="item in 10" :key="item">
        <!-- 左侧图片盒子 -->
        <div class="fudao_content_left">
          <van-image
            round
            width="10rem"
            height="10rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            style="width: 40px; height: 40px"
          />
        </div>
        <!-- 描述盒子 -->
        <div class="fudao_content_right">
          <div class="right_title">
            <p>杨德胜</p>
            <p class="xinxi">
              <span>男</span>
              <span>30年教龄</span>
            </p>
          </div>
        </div>

        <!-- 按钮 -->
        <div class="right_msg">
          <van-button plain round type="danger" size="mini">预约</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      lm: [
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8",
        "M9",
        "M10",
        "M11",
        "M12",
        "M13",
        "M14",
        "M15",
        "M16",
        "M17",
        "M18",
        "M19",
        "M20",
      ],
      show: false,
      radio: "",
    };
  },
  methods: {
    // 返回上一层
    onClickLeft() {
      this.$router.go(-1);
    },
    // 跳进搜索页
    onClickSearch() {},
    // 弹出层
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.fudao_content {
  width: 100%;
  height: 0.8rem;
}
.fudao_content_warpper {
  width: 95%;
  height: 0.8rem;
  background-color: #fff;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_msg {
  width: 20%;
  font-size: 10px;
  color: #b7b7b7;
}
.right_title {
  color: #595959;
}

.fudao_content_left {
  width: 20%;
}
.fudao_content_right {
  width: 60%;
}
.MM_con {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.MM_warpper {
  width: 100%;
  height: 90vh;
}
.MM_top {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0px 5px;
}
.MM_top span {
  width: 0.8rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #f5f5f5;
  text-align: center;
}
span:hover {
  color: #eb6100;
}
h6 {
  width: 100%;
  height: 0.23rem;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
}
.look_top {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0px 5px;
}
.look_checked {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 5px;
}
.sex_titile{
  width: 100%;
  height: 1rem;
}
.sex_top{
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  align-items: center;
 
}
.sex_top span{
  width: 0.8rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background-color: #f5f5f5;
  text-align: center;
}
</style>