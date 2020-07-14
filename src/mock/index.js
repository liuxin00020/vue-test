import Mock from "mockjs";

import user from "./user";

const mocks = [...user];

mocks.forEach(item => {
  Mock.mock(item.url, item.type || "get", options => {
    console.log(options);
    return true;
  });
});
