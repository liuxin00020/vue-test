import request from "@/util/requset";

const _USERAPI = {
  login: "/user/login",
  logout: "/user/logout",
  getInfo: "/user/getUserInfo"
};

/**
 * 登录
 * @param {Object} data 用户名和密码
 */
export function login(data) {
  return request({
    url: _USERAPI.login,
    method: "post",
    data
  });
}

/**
 * 退出登录
 */
export function logout() {
  return request({
    url: _USERAPI.logout,
    method: "post"
  });
}

/**
 * 获取账号信息
 */
export function getUserInfo(token) {
  return request({
    url: _USERAPI.getInfo,
    method: "get",
    params: { token }
  });
}
