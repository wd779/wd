<template>
  <div>
    <div class="Renowned_teacher_con" @click="TeacherDetails">
      <div class="Renowned_teacher_warpper">
        <div class="Renowned_teacher_content">
          <div class="Renowned_teacher_content_warpper">
            <!-- 左侧图片盒子 -->
            <div class="Renowned_teacher_content_left">
              <img
                class="Renowned_teacher_content_left_img"
                :src="data.teacher_avatar"
              />
            </div>
            <!-- 描述盒子 -->
            <div class="Renowned_teacher_content_right">
              <div class="right_title">{{ data.teacher_name }}</div>

              <div class="right_msg">{{ data.introduction }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // 明星讲师  组件
export default {
  data() {
    return {
      RenowneList: [],
    };
  },
  props: {
    list: {
      type: Object,
    },
  },
  computed: {
    data() {
      return this.list;
    },
  },
  methods: {
    // 点击跳转到  讲师详情
    TeacherDetails() {
      this.$router.push({
        path: "/teacher_details",
      });
    },
  },
};
</script>

<style scoped>
.van-image__img {
  width: 100%;
  height: 100%;
}
.Renowned_teacher_con {
  height: 0.9rem;
  box-sizing: border-box;
  padding: 0.05rem;
  width: 100%;
}
.Renowned_teacher_warpper {
  width: 100%;
}
.Renowned_teacher_content {
  width: 100%;
}
.Renowned_teacher_content_warpper {
  width: 100%;
  height: 0.8rem;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 3px 1px 5px #ccc;
  display: flex;
}
.Renowned_teacher_content_left {
  width: 10%;
  display: flex;
  justify-items: center;
  align-items: center;
}
.Renowned_teacher_content_left_img {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  border: 1px rgb(173, 240, 240);
}
.Renowned_teacher_content_right {
  width: 90%;
  box-sizing: border-box;
  padding: 0.1rem;
}
.right_msg {
  /* width: 3rem; */
  color: #b7b7b7;
}
.right_title {
  color: #595959;
  margin-top: 0.1rem;
}
</style>