<template>
  <div>
    <div class="teacher_con">
      <div class="teacher_warpper">
        <div class="teacher_content">
          <div class="teacher_content_warpper" 
          v-for="(item,index) in HomeLists[4].list" 
          :key="index"
           v-show="index < 3"
          >
            <!-- 左侧图片盒子 -->
            <div class="teacher_content_left">
              <van-image
                round
                width="10rem"
                height="10rem"
                :src="item.teacher_avatar"
                style="width: 40px; height: 40px"
              />
            </div>
            <!-- 描述盒子 -->
            <div class="teacher_content_right">
              <div class="right_title">{{item.teacher_name}}</div>

              <div class="right_msg">
                {{item.introduction}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入接口 api
import { HomeList } from "../../utils/myApi";
export default {
  props: {},
  data() {
    return {
      HomeLists:[],
    };
  },

  methods: {
    async onHomeList() {
      let { data: res } = await HomeList(
          
          
      );
      console.log(res);
    this.HomeLists=res
      // console.log(this.HomeLists);
    },
  },

  mounted() {
    this.onHomeList();
  },
};
</script>

<style scoped>
.teacher_con {
  width: 100%;
}
.teacher_warpper {
  width: 100%;
  height: 2.5rem;
  /* border: 1px solid #000; */
}

.teacher_content {
  width: 100%;
  height: 0.8rem;
}
.teacher_content_warpper {
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