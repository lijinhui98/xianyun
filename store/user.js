export const state = () => {
  return {
    userInfo: {
      token: '',
      user: {}
    },
  }
}
export const mutations = {
  // 设置用户的数据
  setUserInfo(state, data) {
    state.userInfo = data;
  },
    //设置用户的数据为空，相当于退出
    clearUserInfo(state){
      state.userInfo = {
          token: "",
          user: {}
      }
  }
}
// 异步修改state的数据
export const actions = {
  // 登录的异步操作
  login({ commit }, data){
      return this.$axios({
          url: "/accounts/login",
          method: "POST",
          data
      }).then(res => {
          // 调用store下的mutations的方法
          commit("setUserInfo", res.data);

          // 调用login方法传入的成功的回调函数
          Promise.resolve();
      });
  }
}
