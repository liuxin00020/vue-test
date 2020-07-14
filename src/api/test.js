import request from "@/util/requset";

const testApi = {
  cook: "/cook/query.php"
};

export function getCooking(menu) {
  return request({
    url: testApi.cook,
    params: {
      menu,
      pn: true,
      rn: 3,
      key: "4e12b2b2b874b05642a4c6bc6df38620"
    }
  });
}
