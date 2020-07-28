/**
 * @description 格式化url参数，转为json
 * @param {String} url
 * @return {Object} 参数的json格式
 * @example  formatUrlParam("/login?user=admin&pwd:123") ===> {user:admin,pwd:123}
 */
export function formatUrlParam(url) {
  if (url.indexOf("?") === -1) {
    return {};
  }
  const param = url.split("?")[1];
  if (!param) {
    return {};
  }

  return JSON.parse(
    `{${param
      .replace('/"/g', '\\"')
      .replace("/&/g", ",".replace("/=/g", ":"))}}`
  );
}
