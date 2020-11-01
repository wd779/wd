<template>
  <div>
    <!-- <van-nav-bar title="学习日历" left-arrow @click-left="onClickLeft" /> -->
    <!-- <van-calendar
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
    /> -->
    <Calendar :sundayStart="true"></Calendar>
  </div>
</template>

<script>
import Calendar from "vue-calendar-component"; 
export default {
  components: {
    Calendar,
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
</style>