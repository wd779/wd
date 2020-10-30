<template>
  <div>
    <div class="Renowned_teacher_con">
      <div class="Renowned_teacher_warpper">
        <div class="Renowned_teacher_content">
          <div class="Renowned_teacher_content_warpper" 
           v-for="(item,index) in RenowneList[0].list"
           :key="index"
           @click="TeacherDetails"
          >
            <!-- 左侧图片盒子 -->
            <div class="Renowned_teacher_content_left">
              <van-image
                round
                width="10rem"
                height="10rem"
                :src="item.teacher_avatar"
                style="width: 40px; height: 40px"
              />
            </div>
            <!-- 描述盒子 -->
            <div class="Renowned_teacher_content_right">
              <div class="right_title">{{item.teacher_name}}</div>

              <div class="right_msg">{{item.introduction}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 明星讲师  组件
import { HomeList } from "../../utils/myApi";
export default {
  data() {
    return {
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



    // 点击跳转到  讲师详情
    TeacherDetails(){
      this.$router.push({
        path:'/teacher_details'
      })
    }
  },

  mounted() {
    this.onRenowneList();
  },
};
</script>

<style scoped>
.Renowned_teacher_con {
  width: 100%;
  /* height: 3.5rem; */
}
.Renowned_teacher_warpper {
  width: 100%;
  /* height: 3.5rem; */
  /* border: 1px solid #000; */
}
.Renowned_teacher_content {
  width: 100%;
  height: 0.8rem;
}
.Renowned_teacher_content_warpper {
  width: 95%;
  height: 0.8rem;
  background-color: #fff;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right_msg {
  width: 3rem;
  color: #b7b7b7;
}
.right_title {
  color: #595959;
}
</style>