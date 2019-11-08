import {
  // get,
  post
} from "@/axios/axios";

/* 切换代理 */
const api = process.env.NODE_ENV === "production" ? "" : "/api/";

export const demo = data => post(``, data); //
