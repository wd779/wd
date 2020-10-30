<template>
  <div>
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
    <div class="connect" ref="list">
      <div v-for="item in ShowList" :key="item.id" @click="toDetails(item)">
        <Card :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { GetData, GetDataList, Search } from "../utils/myApi";
import Card from "../components/Card";
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
    };
  }, // 计算属性
  computed: {
    ShowList() {
      var res = this.CourseList;
      if (this.final !== "") {
        // res =
        // console.log("////");

        res = this.search();
      }
      //   console.log(res);
      return res;
    },
  }, // 侦听器
  watch: {}, // 组件方法
  methods: {
    toDetails(item) {
      //   console.log(item.id);
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
      // console.log(this.final);
    },
    Reset() {
      this.SearchArr = ["", ""];
    },
    suc() {
      this.$refs.item.toggle();
    },
    changeActive(types) {
      this.seartypes = types;
      this.$refs.item2.toggle();
      this.final = this.seartypes;
    },
    searchText(i) {
      this.searchTex = i;
      this.final = this.searchTex;
      this.$refs.item1.toggle();
    },
    async getdata() {
      var a = await GetData();
      this.courseClassify = a.data.appCourseType;
    },
    async getdata1() {
      var a = await GetDataList();
      this.$nextTick(() => {
        this.CourseList = a.data.list;
      });
    },
    async search() {
      var a = await Search({
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.final,
      });
      return a.data.list;
      // console.log(a.data.list);
      // this.$nextTick(() => {
      //   this.CourseList = a.data.list;
      // });
    },
  },
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  mounted() {
    this.getdata();
    this.getdata1();
    this.$refs.list.addEventListener("scroll", function (e) {
      //   console.log(e.target.scrollTop);
      //   console.log(e.target.clientHeight);
      //   console.log(e.target.scrollHeight);
      if (
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight <
        10
      ) {
        console.log("加载");
      }
    });
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
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .btn_bottom_btn {
    height: 0.4rem;
    width: 40%;
    border-radius: 0.4rem;
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
}
.connect {
  z-index: 0;
  height: 72vh;
  overflow: scroll;
  position: fixed;
  top: 1.1rem;
  left: 0;
}
</style>
