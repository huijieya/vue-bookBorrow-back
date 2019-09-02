<template>
  <div>
    <div class="header">企业图书管理系统</div>
    <div class="mid">
      <div class="left">
        <img src="../assets/banner3.jpg" alt="">
      </div>
      <div class="right">
        <div class="right-content">
          <span>用户名</span>
          <el-input v-model="account" placeholder="请输入用户名"></el-input>
          <span>密码</span>
          <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          <el-checkbox v-model="checked">记住密码</el-checkbox>
          <div>
            <el-button size="small" type="primary" @click="check">登 录</el-button>
            <el-button size="small" type="" @click="check">注册</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return{
      account: '',
      password: '',
      checked: false
    }
  },
  methods:{
    check(){
      if(this.account === 'admin' && this.password == '123456'){
        this.$message({
          message: '登录成功',
          type: 'success',
          center: true
        })
        this.$router.push({ path:'./index'  });
      } else {
        this.$message({
          message: '用户名或密码错误',
          type: 'error',
          center: true
        })
      }
    }
  }
}
</script>

<style lang="scss">
.header{
  text-align: center;
  color: #aaa;
  font-size: 30px;
  height: 100px;
  line-height: 100px;
}
.mid{
  color: #aaa;
  width: 100%;
  height: 800px;
  .left{
    margin-left: 30px;
    float: left;
    img{
      height: 500px;
      width: 800px;
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    .right-content{
      width: 200px;
      input{
        margin-top: 8px;
        margin-bottom: 15px;
      }
      button{
        width: 150px;
        margin-top: 20px;
        margin-left: 25px;
      }
    }
  }
}
</style>
