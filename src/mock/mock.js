// 引入mockjs
const Mock = require("mockjs");
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = () => {
  let data = [];
  for (let i = 0; i < 10; i++) {
    let newsObj = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      pic: Random.dataImage("300x250", "测试图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    data.push(newsObj);
  }

  return {
    data: data
  };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("/api/news", "get", produceNewsData);
