import { get, post } from "@/utils/request";

/* 切换代理 */
const api = process.env.NODE_ENV === "production" ? "" : "/api/";

export const demo = data => get(`/api/news`, data); //
