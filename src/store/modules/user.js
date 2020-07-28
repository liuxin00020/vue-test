import { login, getUserInfo, logout } from "@/api/user";
import { setAccessToken, removeAccessToken } from "@/util/auth";
const state = {
  token: null, // token
  name: null, // 用户名
  avatar: null, // 头像
  role: null // 角色
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATER: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  }
};

const actions = {
  // 登录,true代表登录成功
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return login({ username, password }).then(token => {
      commit("SET_TOKEN", token);
      setAccessToken(token);
      return true;
    });
  },

  // 获取用户信息
  getUserInfo({ commit }) {
    return getUserInfo().then(user => {
      const { username, avatar, role } = user;
      commit("SET_NAME", username);
      commit("SET_AVATER", avatar);
      commit("SET_ROLE", role);
      return user;
    });
  },

  // 退出登录
  logout({ commit }) {
    return logout().then(() => {
      commit("SET_NAME", null);
      commit("SET_AVATER", null);
      commit("SET_ROLE", null);
      commit("SET_TOKEN", null);
      removeAccessToken();
      return true;
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
