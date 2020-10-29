<template>
  <div class="box">
    <!-- 头像 -->
    <div class="user">
      <div class="user_icon">
        <!-- 登录 -->
        <div class="head">
          <section @click="$router.push('/info')">
            <div v-show="flag">
              <img :src="list.avatar"/>
              <span>{{list.nickname}}</span>
              <van-icon name="edit" />
              <h4 @click="$router.push('/fudao')">去约课</h4>
            </div>
            <div v-show="!flag">
              <img :src="list.avatar">
              <span @click="$router.push('/login')">登录/注册</span>
              <van-icon name="edit" />
              <h4 @click="$router.push('/fudao')">去约课</h4>
            </div>
          </section>
          <div class="info">
            <ul>
              <li  @click="$router.push('/my-study')">
                <h3>1</h3>
                <p>我的特色课</p>
                <span>已购特色课程的学习</span>
              </li>
              <li @click="$router.push('/order')">
                <h3>0</h3>
                <p>一对一辅导</p>
                <span>我的一对一老师辅导</span>
              </li>
              <li @click="$router.push('/my-currency')">
                <h3>0.00</h3>
                <p>剩余学习币</p>
                <span>查看剩余学习币</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 邀请 -->
      <div class="yao">
        <div>
          <van-icon name="point-gift" />
          <section>
            <p>邀请好友注册APP，享多重好礼</p>
            <span>限时特惠，多邀多得</span>
          </section>
          <i></i>
          <i></i>
          <i></i>
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- ulBox -->
      <ul class="menu">
        <li>
          <p class="menu-title">课程相关</p>
          <div class="menu-box">
            <div @click="$router.push('/concern')">
              <van-icon name="point-gift" />
              <p>关注的老师</p>
            </div>
            <div @click="$router.push('/collect')">
              <van-icon name="point-gift" />
              <p>我的收藏</p>
            </div>
          </div>
        </li>
        <li>
          <p class="menu-title">订单相关</p>
          <div class="menu-box">
            <div >
              <van-icon name="point-gift" />
              <p>课程订单</p>
            </div>
            <div>
              <van-icon name="point-gift" />
              <p>会员订单</p>
            </div>
            <div>
              <van-icon name="point-gift" />
              <p>约课订单</p>
            </div>
          </div>
        </li>
        <li>
          <p class="menu-title">我的账户</p>
          <div class="menu-box">
            <div @click="$router.push('/coupon')">
              <van-icon name="point-gift" />
              <p>优惠券</p>
            </div>
            <div @click="$router.push('/card')">
              <van-icon name="point-gift" />
              <p>学习卡</p>
            </div>
            <div @click="$router.push('/vip')">
              <van-icon name="point-gift" />
              <p>会员</p>
            </div>
          </div>
        </li>
        <li>
          <p class="menu-title">自助服务</p>
          <div class="menu-box">
            <div @click="$router.push('/message')">
              <van-icon name="point-gift" />
              <p>我的消息</p>
            </div>
            <div @click="$router.push('/feedback')">
              <van-icon name="point-gift" />
              <p>意见反馈</p>
            </div>
            <div @click="$router.push('/personOne')">
              <van-icon name="point-gift" />
              <p>在线客服</p>
            </div>
            <div @click="$router.push('/options')">
              <van-icon name="point-gift" />
              <p>设置</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { AjaxMy } from "../utils/myApi";
export default {
  // 组件名称
  name: "", // 组件参数 接收来自父组件的数据
  props: [], // 局部注册的组件
  components: {}, // 组件状态值
  data() {
    return {
      flag: false,
      list:[]
    };
  }, // 计算属性
  computed: {}, // 侦听器
  watch: {}, // 组件方法
  methods: {
    
  },
  created() {},
  mounted() {
   this.list = JSON.parse( localStorage.getItem("loginArr"))
   this.list = this.list.data
   console.log(this.list);
    if (sessionStorage.getItem("token")) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  }
};
</script> 

<style lang="scss" scoped >
.box {
  width: 100%;
  padding-bottom: 0.8rem;
}
.user_icon {
  width: 3.75rem;
  height: 2.2rem;
  background: url("../assets/user_bg.ab306a5c.png") no-repeat top center;
  background-size: 3.75rem 1.2rem;
  padding: 0.48rem 0.15rem 0;
  box-sizing: border-box;
  background-color: #fff;
  .head {
    width: 3.45rem;
    height: 1.72rem;
    background-color: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.01rem #ccc;
    section {
      width: 3.45rem;
      height: 0.77rem;
      div {
        width: 3.3rem;
        height: 0.62rem;
        padding: 0.15rem 0 0 0.15rem;
        display: flex;
        align-items: center;
        position: relative;
        img {
          width: 0.62rem;
          border-radius: 50%;
        }
        span {
          margin-left: 0.1rem;
        }
        .van-icon {
          margin-left: 0.1rem;
          color: #f2995a;
        }
        h4 {
          width: 0.55rem;
          height: 0.25rem;
          position: absolute;
          background-color: #eb6100;
          text-align: center;
          line-height: 0.25rem;
          color: #fff;
          top: 0.28rem;
          right: 0;
          font-size: 0.12rem;
          font-weight: normal;
          border-radius: 0.15rem 0 0 0.15rem;
        }
      }
    }
    .info {
      width: 3.45rem;
      height: 0.81rem;
      ul {
        width: 3.45rem;
        height: 0.81rem;
        display: flex;
        li {
          text-align: center;
          width: 1.14rem;
          height: 0.81rem;
          h3 {
            line-height: 0.35rem;
            font-size: 0.24rem;
            color: #eb6100;
          }
          p {
            font-size: 0.12rem;
            margin-bottom: 0.05rem;
            color: #595959;
          }
          span {
            color: #b7b7b7;
            font-size: 0.1rem;
          }
        }
      }
    }
  }
}
// 邀请
.yao {
  width: 3.75rem;
  height: 0.6rem;
  background-color: #fff;
  padding: 0.15rem 0.15rem 0 0.15rem;
  box-sizing: border-box;
  div {
    border-radius: 0.4rem;
    width: 100%;
    height: 0.45rem;
    background: linear-gradient(-90deg, #f2995a, #eb6100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1rem;
    box-sizing: border-box;
    .van-icon {
      color: #fff;
      font-size: 0.24rem;
    }
    section {
      color: #fff;
      p {
        font-size: 0.12rem;
      }
      span {
        font-size: 0.1rem;
      }
    }
  }
}
//
.menu {
  width: 3.75rem;
  background-color: #fff;
  padding: 0 0.15rem;
  box-sizing: border-box;
  li {
    padding: 0.2rem 0;
    box-sizing: border-box;
    .menu-title {
      color: #333;
      font-size: 0.16rem;
    }
    .menu-box {
      width: 100%;
      display: flex;
      div {
        width: 0.84rem;
        height: 0.6rem;
        text-align: center;
        .van-icon {
          font-size: 0.22rem;
          line-height: 0.44rem;
          color: #f2995a;
        }
        p {
          font-size: 0.12rem;
        }
      }
    }
  }
}
</style>
