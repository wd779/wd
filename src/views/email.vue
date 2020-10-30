<template>
    <div>
        <div class="xx">
            <header>
            <p>给我们留言</p>
            <p class="hide" @click="jbrHide()">﹀</p>
            </header>
            <div class="jbShow" v-show="jbShow==true">
            <p class="ts">您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</p>
            <van-cell-group>
                <van-field v-model="value" label="手机" placeholder="请输入手机号" />
            </van-cell-group>
            <van-field
                v-model="message"
                rows="3"
                autosize
                label="留言内容"
                type="textarea"
                placeholder="请输入"
                class="ly"
            />
            <van-button type="info" @click="tj()">提交</van-button>
            </div>
            <div class="jbHide" v-show="jbShow==false">
            <h3>留言成功</h3>
            <p>我们会尽快联系你</p>
            <van-button type="info" @click="jbrHide()">关闭</van-button><br>
            <u @click="jbHide()">再次留言</u>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value:'',
            message:'',
            show:false,
            jbShow:true,
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        tj(){
            if(this.value == ''){
            this.$toast('请至少填写一项联系方式');
            }else if(this.message == ''){
            this.$toast('请保持留言内容在1~1000字符内');
            }
            if(this.value != ''){
            let phone = /^1[345678]\d{9}$/
            if(phone.test(this.value)){
                setTimeout(()=>{
                this.jbShow = false
                },1300)
            }else{
                this.$toast('请正确填写手机号');
            }
            }
        },
        jbrHide(){
            this.$router.go(-1)
        },
        jbHide(){
            this.jbShow = true
            this.value = this.message = ''
        }
    }
};
</script>

<style scoped lang='scss'>
.xx{
  width: 3.75rem;
  height: 100%;
  background: #F2F3F5;
  position: absolute;
  top: 0;
  z-index: 1000;
  header{
    width: 3.75rem;
    height: 0.6rem;
    background: #007AFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    color: white;
    font-size: 0.14rem;
    .hide{
      padding-right: 0.05rem;
      padding-top: 0.03rem;
    }
  }
}
.jbShow{
  width: 3.75rem;
.ts{
  width: 3.37rem;
  font-size: 0.1rem;
  margin: 15px auto;
  color: #666666;
  margin-bottom: 30px;
}
.ly{
  margin-top: 0.2rem;
}
.van-button{
  width: 3.3rem;
  margin: 0.3rem 0.22rem;
  background: #007AFF;
  border-radius: 0.03rem;
}
}
.jbHide{
  width: 3.75rem;
  height: 587px;
  background: white;
  text-align: center;
  padding: 10px 0;
  button{
    width: 1.5rem;
    height: 0.33rem;
    border-radius: 0.05rem;
    margin-bottom: 0.13rem;
  }
  u{
    font-size: 0.14rem;
  }
  p{
    font-size: 0.13rem;
  }
}
</style>
