<template>
  <div>
    <!-- 头部组件 -->
    <app-header>
      <template>
        <div slot="title">我的关注</div>
        <div slot="right"></div>
      </template>
    </app-header>
    <div class="div-box">
      <ul>
        <li v-for="item in list" :key="item.teacher_id">
          <img :src="item.avatar" alt />
          <div>
            <h4>
              <span>{{ item.teacher_name }}</span>
              <i>{{ item.level_name }}</i>
            </h4>
            <p>
              {{ item.introduction }}
            </p>
          </div>
          <p class="p-quxiao" @click="qx(item.collect_id)">取消关注</p>
        </li>
      </ul>
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
import appHeader from "../../components/AppHeader.vue";
import { collectTeacherList, cancelCollect } from "../../utils/myApi";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: { appHeader },
  // 组件状态值
  data() {
    return {
      list:[],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    async guanzhuTarcher() {
      let obj = {
        page: 1,
        limit: 10,
        type: 2,
      };
      let res = await collectTeacherList(obj);
      this.list = res.data.list;
      console.log(this.list);
    },
    async qx(collect_id) {
      console.log(collect_id);
      let { data } = await cancelCollect(collect_id);
      console.log(data);
      this.guanzhuTarcher();
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.guanzhuTarcher();
  },
};
</script> 

<style scoped lang="scss">
.box {
  width: 100%;
}
.div-box {
  width: 100%;
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
  ul {
    width: 100%;
    li {
      background-color: #fff;
      padding: 0.1rem;
      box-sizing: border-box;
      border-radius: 0.05rem;
      margin-bottom: 0.1rem;
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
      }
      div {
        width: 2.1rem;
        height: 100%;
        margin-left: 0.1rem;
        h4 {
          font-weight: normal;
          span {
            font-size: 4vw;
            color: #595959;
          }
          i {
            font-style: normal;
            font-size: 2.93333vw;
            color: #ea7a2f;
            margin-left: 0.06rem;
          }
        }
        p {
          text-indent: 0.1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
      .p-quxiao {
        font-size: 3.46667vw;
        color: #eb6100;
        text-align: center;
        width: 20.26667vw;
        height: 7.46667vw;
        line-height: 7.46667vw;
        background: rgba(235, 97, 0, 0.1);
        border-radius: 4.13333vw;
      }
    }
  }
  p {
    text-align: center;
    line-height: 6.66667vw;
    color: #969799;
    font-size: 3.2vw;
  }
}
</style>
