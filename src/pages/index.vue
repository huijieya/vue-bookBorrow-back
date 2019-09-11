<template>
  <div class="container">
    <div class="head">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
          <div class="el-menu-item system-name">企业图书管理系统</div>
          <el-menu-item index="1">用户管理</el-menu-item>
          <el-menu-item index="2">图书管理</el-menu-item>
          <el-menu-item index="3">借阅管理</el-menu-item>
          <div class="el-menu-item user">
            <i class="el-icon-s-custom"></i>
            <i class="iconfont">admin,已登录</i>
            <el-button style="margin-left: 35px;" @click="exit" class="iconfont" type="text">&#xe6a6;退出</el-button>
          </div>
      </el-menu>
    </div>
    <div class="mid">
      <!-- 用户管理 -->
      <el-table
        v-if="activeIndex === '1'"
        :data="userTable"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="index"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="用户Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button @click="deleteUser(userTable.userId)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 图书管理 -->
      <el-table
        v-if="activeIndex === '2'"
        :data="bookTable"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="bookId"
          label="图书Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="bookName"
          label="图书名">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="count"
          label="数量"
          width="180">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
          width="180">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button @click="deleteUser(userTable.userId)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 借阅管理 -->
      <el-table
        v-if="activeIndex === '3'"
        :data="logTable"
        stripe
        border
        style="width: 100%">
        <el-table-column
          prop="orderId"
          label="流水号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="bookId"
          label="图书Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="userId"
          label="用户Id"
          width="180">
        </el-table-column>
        <el-table-column
          prop="lendOutDate"
          label="借出日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="giveBackDate"
          label="归还日期"
          width="180">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">修改</el-button>
            <el-button @click="deleteUser(userTable.userId)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      activeIndex: '1',
      userTable: [],
      bookTable: [
        {
          bookId: '101',
          bookName: 'JavaScript高级程序设计',
          author: '(美)(Nicholas C.Zakas)扎卡斯',
          count: 5,
          price: 85,
        },
        {
          bookId: '102',
          bookName: 'Vue.js实战',
          author: '梁灏',
          count: 8,
          price: 79,
        },
        {
          bookId: '103',
          bookName: 'JavaScript实战',
          author: '张泽娜',
          count: 7,
          price: 76,
        },
        {
          bookId: '104',
          bookName: '微信小程序',
          author: '李俊',
          count: 3,
          price: 44,
        },
      ],
      logTable: []
    };
  },
  created() {
    this.getTables();
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      // console.log(key, keyPath);
    },
    exit() {
      this.$alert("确定要退出当前帐号吗？", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "success",
            message: `退出成功`
          });
          this.$router.push({ path: "./" });
        }
      });
    },
    getTables() {
      const that = this;
      axios.get('http://localhost:8090/userTable').then((res) => {
        if(res.status == 200){
          this.userTable = res.data.dataSource;
        }
      });
      axios.get('http://localhost:8090/logTable').then((res) => {
        if(res.status == 200){
          this.bookTable = res.data.bookTable;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.system-name {
  font-size: 24px;
  color: lemonchiffon !important;
  background-color: rgb(84, 92, 100) !important;
  cursor: default;
}
.user {
  color: #909399;
  margin-left: 530px !important;
  background-color: rgb(84, 92, 100) !important;
}
.mid{
  width: 80%;
  padding-top: 50px;
  padding-left: 100px;
}
</style>
