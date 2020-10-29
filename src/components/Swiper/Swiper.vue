<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in Swiper" :key="index">
        <img :src="item.Swiper" style="width:100%;height:200px" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:{
        Swiper:{
            type:Array,  //传递类型
            required:true,  //传递项
            validator:function(array){
                return array.length !==0
            }   //验证函数
        }
    },

    mounted(){
        // console.log(this.Swiper);
    }
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
  /* background-color: #39a9ed; */
}
</style>