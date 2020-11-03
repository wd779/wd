<template>
<div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的收藏</div>
        <div slot="right"></div>
      </template>
    </app-header>
</div>
</template>

<script>
import {GetCollect} from "../../utils/myApi"
import appHeader from "../../components/AppHeader.vue";
export default {
 // 组件名称
 name: '',
 // 组件参数 接收来自父组件的数据
 props: [],
 // 局部注册的组件
 components: {appHeader},
 // 组件状态值
 data () {
 return {}
 },
 // 计算属性
 computed: {},
 // 侦听器
 watch: {},
 // 组件方法
 methods: {
   async getinfo(){
     var res = await GetCollect();
     console.log(res);
   }
 },
 /**
 * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
 */
 created () {
 },
 mounted () {
   this.getinfo();
 },
}
</script> 

<style scoped lang="scss">


</style>
