import Mock from "mockjs";
import api from "./mock.js"; //引入mock模拟的数据

Mock.mock("/api/news", "get", api.produceNewsData);

export default Mock;
