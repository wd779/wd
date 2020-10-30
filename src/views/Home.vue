<template>
  <div class="home">
    <div class="con">
      <!-- 轮播图 -->
      <Swiper :Swiper="Swiper"></Swiper>
      <!-- 图标 -->
      <IconBotton class="icon"></IconBotton>
    </div>
    <!-- 名师阵容 -->
    <Title>名师阵容</Title>
    <Teacher></Teacher>
    <!-- 精品课程 -->
    <Title>精品课程</Title>
    <Crad v-for="item in RenowneList[1].list" :key="item.id"  :data="item"></Crad>
    <!-- 明星讲师 -->
    <Title>明星讲师</Title>
    <RenownedTeacher></RenownedTeacher>
  </div>
</template>

<script>
import Swiper from "../components/Swiper/Swiper"; //轮播图
import IconBotton from "../components/iconBotton/iconBotton"; //按钮 图标
import Teacher from "../components/Teacher/TeacherLineup"; //名师阵容
import RenownedTeacher from "../components/Renownedteacher/renownedteacher"; //明星讲师
import Crad from "../components/Card"; //精品课程
import Title from "../components/Renownedteacher/Renowned_teacher_border"; //home页  分类标签组件

import { HomeList } from "../utils/myApi";
export default {
  name: "Home",
  components: {
    Swiper,
    IconBotton,
    Teacher,
    RenownedTeacher,
    Crad,
    Title,
  },

  data() {
    return {
      Swiper: [
        { Swiper: require("../assets/Swiper/20193KAjU2cB6h1569839562.jpg") },
        { Swiper: require("../assets/Swiper/20197Cxc53hktC1569839552.jpg") },
        { Swiper: require("../assets/Swiper/2019LnKumseuhw1569839569.jpg") },
        { Swiper: require("../assets/Swiper/2019MGNW3BtiS91569839576.jpg") },
      ],
      RenowneList:[]
    };
  },

  methods: {
    async onRenowneList() {
      let { data: res } = await HomeList();
      console.log(res);
      this.RenowneList = res;
      // console.log(this.HomeLists);
    },
  },
  
  mounted(){
    this.onRenowneList()
  }
};
</script>
<style scoped>
.home {
  height: 92vh;
  overflow: scroll;
}
.con {
  width: 100%;
  height: 2.8rem;
  position: relative;
}
.icon {
  width: 100%;
  position: absolute;
  bottom: 0.4rem;
}
</style>
