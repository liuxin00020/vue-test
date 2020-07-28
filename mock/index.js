import { formatUrlParam } from "@/util/index";
import Mock from "mockjs";

import user from "./user";

const mocks = [...user];

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: "200-1000"
});
console.log(mocks);
// 遍历mock配置项
mocks.forEach(item => {
  Mock.mock(item.url, options => {
    const { url, type = type.toLowerCase(), body } = options;
    if (item.type !== type) {
      return { code: 500, msg: `该接口不支持${type}方式` };
    } else {
      return item.response(type === "post" ? body : formatUrlParam(url));
    }
  });
});
