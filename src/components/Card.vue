<template>
  <div class="box_container">
    <div class="box_wrapper">
      <h6>{{ datas.title }}</h6>
      <p>{{ datas.course_statement || '暂无描述' }}</p>
      <div class="user">
        <img :src="datas.cover_img" />
        <span>
          {{ datas.teachers_list[0].teacher_name }}
        </span>
      </div>

      <p>
        {{datas.sales_num}}人已报名
        <b :class="datas.price==0?'':'red'">{{ datas.price==0?'免费':"￥"+datas.price }}</b>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: "标题",
          desc: "描述",
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603780371383&di=418f70b09f7c380e134464456dd454f2&imgtype=0&src=http%3A%2F%2Fimg02.fs.yiban.cn%2F43259453%2Favatar%2Fuser%2F200",
          name: "姓名",
        };
      },
    },
  },
  computed: {
    datas() {
      return this.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.box_container {
  height: 1.5rem;
  margin: 1vw;
  width: 98vw;
  background: white;
  box-shadow: 3px 1px 5px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.box_wrapper {
  margin: 0.2rem;
  h6 {
    font-size: 0.2rem;
    font-weight: normal;
    height: 0.2rem;
    padding-top: 0.1rem;
    height: 0.4rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  p {
    margin-top: 0.1rem;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    b {
      font-weight: normal;
      color: #44A426;
      float: right;
    }
    b.red{
      color: red;
    }
  }
}
.user {
  display: flex;
  align-items: center;
  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
  span{
    text-indent: 1em;
  }
}
</style>