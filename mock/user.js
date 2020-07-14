const token = {
  admin: "admintoken",
  test: "testtoken"
};

const userInfo = {
  admintoken: {
    username: "admin",
    avatar:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594729542165&di=661bbb7204cc05136d587cb3ed730d91&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F18%2F20180718220203_Pu2Fh.thumb.700_0.jpeg",
    role: "admin"
  },
  testtoken: {
    username: "test",
    avatar:
      "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1782072945,808591942&fm=26&gp=0.jpg",
    role: "test"
  }
};

export default [
  {
    url: "/api/user/login",
    type: "get",
    response: params => {
      // 验证通过
      if (token[params.username]) {
        return { code: 200, data: token[params.username] };
      } else {
        return { code: 201, msg: "用户名或密码错误" };
      }
    }
  },
  {
    url: "/api/user/getUserInfo",
    type: "get",
    response: params => {
      // 验证通过
      if (params && params.token && userInfo[params.token]) {
        return { code: 200, data: userInfo[params.token] };
      } else {
        return { code: 201, msg: "验证失败" };
      }
    }
  },
  {
    url: "/api/user/logout",
    type: "get",
    response: () => {
      // 验证通过
      return { code: 200, data: "success" };
    }
  }
];
