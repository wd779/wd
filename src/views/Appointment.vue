<template>
  <div>
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="18" @click="ToSearch" />
      </template>
    </van-nav-bar>
    <div class="nav">
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="item">
          <div class="box">
            <p>年级</p>
            <button
              v-for="item in attrclassify.attrclassify"
              :key="item.id"
              @click="activeItem(item.name, SearchArr[1])"
              :class="item.name == SearchArr[0] ? 'btns_avtive' : 'btns'"
            >
              {{ item.name }}
            </button>
            <p>学科</p>
            <button
              v-for="item in attrclassify.classify"
              :key="item.id"
              @click="activeItem(SearchArr[0], item.name)"
              :class="item.name == SearchArr[1] ? 'btns_avtive' : 'btns'"
            >
              {{ item.name }}
            </button>
            <div class="btn_bottom">
              <van-button class="btn_bottom_btn" type="info" @click="Reset"
                >重置</van-button
              >
              <van-button class="btn_bottom_btn" type="primary" @click="suc"
                >确定</van-button
              >
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item1">
          <div class="box">
            <van-cell
              v-for="item in courseClassify"
              :key="item.id"
              :title="item.name"
              @click="searchText(item.name)"
            />
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item2">
          <div class="box">
            <button
              v-for="item in course_types"
              :key="item.type"
              @click="changeActive(item.value)"
              :class="item.value == seartypes ? 'btns_avtive' : 'btns'"
            >
              {{ item.value }}
            </button>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="connect">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in ShowList"
          :key="item.id"
          @click="toDetails(item)"
        >
          <Card :data="item" />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { GetData, GetDataList, Search } from "../utils/myApi";
import Card from "../components/Card copy 2";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {
    Card,
  }, // 组件状态值
  data() {
    return {
      courseClassify: [],
      CourseList: [],
      course_types: [
        { type: 0, value: "全部" },
        { type: 2, value: "大班课" },
        { type: 3, value: "小班课" },
        { type: 4, value: "公开课" },
        { type: 5, value: "点播课" },
        { type: 7, value: "面授课" },
        { type: 8, value: "音频课" },
        { type: 9, value: "系统课" },
        { type: 10, value: "图文课" },
        { type: 11, value: "会员课" },
      ],
      attrclassify: {
        attrclassify: [
          {
            id: 1,
            name: "初一",
          },
          {
            id: 2,
            name: "初二",
          },
          {
            id: 3,
            name: "初三",
          },
          {
            id: 4,
            name: "高一",
          },
          {
            id: 5,
            name: "高二",
          },
        ],
        classify: [
          {
            id: 7,
            name: "语文",
          },
          {
            id: 8,
            name: "数学",
          },
          {
            id: 9,
            name: "英语",
          },
          {
            id: 12,
            name: "物理",
          },
          {
            id: 13,
            name: "化学",
          },
        ],
      },
      SearchArr: [],
      seartypes: "",
      searchTex: "",
      final: "",
      ShowList: [],
      loading:false,
      finished: false,
    };
  }, // 计算属性
  computed: {
          
  }, // 侦听器
  watch: {}, // 组件方法
  methods: {
    //
    ToSearch() {
      this.$router.push({ path: "/Search" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    toDetails(item) {
      this.$router.push({ name: "Details", query: { con: item } });
    },
    activeItem(name, name1) {
      this.SearchArr = [name, name1];
      if (this.SearchArr[0] !== "" && this.SearchArr[1] == undefined) {
        this.final = this.SearchArr[0];
      } else if (this.SearchArr[1] !== "" && this.SearchArr[0] == undefined) {
        this.final = this.SearchArr[1];
      } else {
        this.final = this.SearchArr[0] + this.SearchArr[1];
      }
    },
    Reset() {
      this.SearchArr = ["", ""];
    },
    suc() {
      this.$refs.item.toggle();
      this.search()
    },
    changeActive(types) {
      this.seartypes = types;
      this.$refs.item2.toggle();
      this.final = this.seartypes;
      this.search()
    },
    searchText(i) {
      this.searchTex = i;
      this.final = this.searchTex;
      this.$refs.item1.toggle();
      this.search()
    },
    async getdata() {
      var a = await GetData();
      this.courseClassify = a.data.appCourseType;
    },
    async getdata1() {
      var a = await GetDataList();
      a.data.list.forEach((element) => {
        this.ShowList.push(element);
      });
    },
    async search() {
      var a = await Search( this.final);
      this.ShowList =  a.data.list;
    },
    onLoad() {
      this.getdata1();
      this.loading = false;
    },
  },
  created() {},
  mounted() {
    this.getdata();
    this.getdata1();
  },
};
</script> 

<style lang="scss" scoped >
.box {
  width: 100%;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
}
.btn_bottom {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .btn_bottom_btn {
    height: 0.3rem;
    width: 40%;
  }
}
P {
  width: 100%;
  margin: 0.1rem 0;
  text-indent: 1em;
}

.btns {
  list-style: none;
  border: 0;
  width: 0.79rem;
  height: 26px;
  line-height: 26px;
  margin: 0.05rem 0.02rem;
  background: #ccc;
  font-size: 12px;
  border-radius: 2px;
}
.btns_avtive {
  list-style: none;
  border: 0;
  width: 0.79rem;
  height: 26px;
  line-height: 26px;
  margin: 0.05rem 0.02rem;
  background: rgb(70, 129, 55);
  font-size: 12px;
  border-radius: 2px;
  color: aliceblue;
}
.nav {
  width: 100%;
  z-index: 1;
  background: #ffffff;
}
.connect {
  // background: #ccc;
  z-index: 0;
  width: 100%;
  height: 76vh;
  overflow: scroll; 
}
</style>
