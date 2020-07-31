import Mock from "mockjs";
export default [
  {
    url: "/api/user/login",
    type: "get",
    response: () => {
      return {
        code: 200,
        data: Mock.mock({
          "line|20": [
            {
              name: "类型" + Mock.Random.integer(1, 30),
              "value|6000-100000": 63800
            }
          ]
        })
      };
    }
  }
];
