<template>
  <div>
    <!-- 留言 -->
    <div class="message" @click="$router.go(-1)">
      <div class="title">
        <div class="title1">
          <div class="font">
            <div class="txt">给我们留言</div>
          </div>
        </div>
      </div>
      <div class="gg">
        <div class="hh">
          <div class="hh">
            <div class="kk">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</div>
            <ul>
              <li class="bn">
                <div class="php">手机</div>
                <input type="text" placeholder="请输入" class="inn" />
              </li>
              <li>
                <div class="php">
                  留言内容
                  <span class="we">*</span>
                </div>
                <textarea placeholder="请输入" name="content" class="mg"></textarea>
              </li>
            </ul>
            <div class="ff">
              <a height="40px" width="100%" class="bd">
                <span>提交</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},


  created() {},


  mounted() {}
};
</script> 


<style scoped>
.message {
  position: absolute;
  top: 0px;
  width: 100%;
}
.title {
  width: 100%;
  height: 0.6rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.14rem;
  box-sizing: border-box;
  color: white;
  padding: 0.1rem;
  background: rgb(0, 122, 255);
}
.title1 {
  height: 0.4rem;
  position: relative;
  flex: 10 1 auto;
  overflow: hidden;
}
.font {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
}
.txt {
  font-size: 0.14rem;
  line-height: 0.4rem;
}
.gg {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  background: rgb(242, 243, 245);
}
.hh {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.kk {
  font-size: 0.12rem;
  color: rgb(102, 102, 102);
  word-break: break-all;
  padding: 0.16rem;
}
.bn {
  margin-bottom: 0.16rem;
}
.php {
  color: rgb(68, 68, 68);
  font-size: 0.12rem;
  padding: 0px 0px 6px 0.16rem;
}
.we {
  color: rgb(255, 92, 94);
  padding: 0px 3px;
}
.inn {
  width: 100%;
  height: auto;
  padding: 0.12rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}
.mg {
  display: block;
  width: 100%;
  height: 90px;
  overflow-x: hidden;
  overflow-y: auto;
  resize: none;
  background-color: rgb(255, 255, 255);
  word-break: break-all;
  font-size: 12px;
  -webkit-appearance: none;
  padding: 12px 16px;
  outline: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}
.ff {
  padding: 0px 20px 20px;
}
.bd{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    vertical-align: middle;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
    opacity: 1;
    color: white;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: none;
    border-radius: 3px;
    text-decoration: none;
    background: rgb(0, 122, 255);
}
</style>
