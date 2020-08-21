import request from "@/utils/request";

// /* 切换代理 */
const api = process.env.NODE_ENV === "production" ? "" : "/api/";

export function chartsApi(data) {
  return request({
    url: `${api}chartsApi`,
    method: "get",
    data,
    hideloading: false //loading 组件
  });
}

export function navListApi(data) {
  return request({
    url: `${api}navListApi`,
    method: "get",
    data,
    hideloading: false 
  });
}
