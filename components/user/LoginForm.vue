<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item">
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleLogin">登录</el-button>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        // 表单数据
        form: {
          username: "13800138000",
          password: "123456"
        },
        // 表单规则
        rules: {
          username: [
            { required: true, message: "请输入手机号码", trigger: "blur" }
          ],
          password: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }
      };
    },
    methods: {
      // 提交登录
      handleLogin() {
        this.$refs.form.validate(valid => {
          if (valid) {
            // this.$axios({
            //   url: "/accounts/login",
            //   method: "POST",
            //   data: this.form
            // }).then(res => {
            //   console.log(res);
            //   this.$store.commit("user/setUserInfo", res.data);
            //   this.$message.success("登录成功，正在跳转...");
            //   setTimeout(() => {
            //     this.$router.push("/");
            //   }, 1000);
            // });
            // 调用actions
            this.$store.dispatch("user/login", this.form).then(v => {
              this.$message.success("登录成功，正在跳转...");

              setTimeout(() => {
                this.$router.push("/");
              }, 1000);
            });
          }
        });
      }
    }
  };
</script>

<style scoped lang="less">
  .form {
    padding: 25px;
  }

  .form-item {
    margin-bottom: 20px;
  }

  .form-text {
    font-size: 12px;
    color: #409eff;
    text-align: right;
    line-height: 1;
  }

  .submit {
    width: 100%;
    margin-top: 10px;
  }
</style>