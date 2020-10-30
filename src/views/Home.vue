<template>
  <div class="home">
    <div class="con">
      <!-- 轮播图 -->
      <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in Swiper" :key="item.id">
            <img :src="item.Swiper" style="width: 100%; height: 200px" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 图标 -->

    <!-- 名师阵容 -->
    <Title>名师阵容</Title>
    <RenownedTeacher
      v-for="(item, index) in RenowneList4"
      :key="item.teacher_id"
      :list="item"
      v-show="index < 3"
    ></RenownedTeacher>
    <!-- 精品课程 -->
    <Title>精品课程</Title>
    <Crad v-for="item in RenowneList1" :key="item.id" :data="item"></Crad>
    <!-- 明星讲师 -->
    <Title>明星讲师</Title>
    <RenownedTeacher
      v-for="item in RenowneList"
      :key="item.teacher_id"
      :list="item"
    ></RenownedTeacher>
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
      this.RenowneList4 = res.data[4].list.slice(0,3);
      console.log(this.RenowneList1);
    },
  },
};
</script>
<style lang="scss" scoped >
.home {
  height: 92vh;
  overflow: scroll;
}
.con {
  width: 100%;
  height: 2.8rem;
  position: relative;
  img {
    height: 100%;
  }
}
.icon {
  width: 100%;
  position: absolute;
  bottom: 0.4rem;
}
</style>
