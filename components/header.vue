<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="main">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.jpg" alt>
        </nuxt-link>
      </div>

      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">机票</nuxt-link>
      </el-row>

      <!-- 登录状态 -->
      <el-row>
        <!-- 下拉菜单 -->
        <el-dropdown v-if="$store.state.user.userInfo.token">
          <span class="el-dropdown-link">
            <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" alt>

            <span>{{$store.state.user.userInfo.user.nickname}}</span>

            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>
              <div style="width:100%t" @click="handleLogout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div v-else class="log">
          <nuxt-link to="/user/login">登录 / 注册</nuxt-link>
        </div>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    mounted() {
      // console.log(this.$store.state);
    },
    methods: {
      // 退出
      handleLogout() {
        // const { commit } = this.$store;
        // commit("user/cleanUserInfo");

        this.$store.commit("user/clearUserInfo");
        this.$message({
          message: "退出成功",
          type: "success"
        });
        setTimeout(() => {
          this.$router.push("/user/login");
        }, 1000);
      }
    }
  };
</script>

<style lang="less" scoped>
  .header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 3px 0 #f5f5f5;
  }
  .main {
    width: 1000px;
    margin: 0 auto;
    .logo {
      display: block;
      width: 156px;
      height: 42px;
      margin-top: 9px;
      img {
        display: block;
        width: 100%;
      }
    }
    .navs {
      height: 60px;
      line-height: 60px;
      flex: 1;
      margin-left: 20px;
      a {
        display: block;
        height: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        color: #000;
        &:hover {
          border-bottom: 5px #409eff solid;
          color: #409eff;
        }
      }
      .nuxt-link-exact-active {
        background: #409eff;
        color: #fff;
      }
    }
    .el-dropdown-link {
      height: 60px;
      line-height: 60px;
      img {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        border: 2px solid #fff;
        border-radius: 50px;
      }
    }
  }
  .log {
    height: 60px;
    line-height: 60px;

    a {
      color: #000;
    }
  }
</style>
