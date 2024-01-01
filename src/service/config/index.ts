let BASE_URL = ""

// 是否是生产环境
// console.log("%c [  ]-4", "font-size:13px; background:pink; color:#bf2c9f;", import.meta.env.DEV)
// 判断生产还是开发模式
if (import.meta.env.DEV) {
  BASE_URL = "http://codercba.com:8000"
} else {
  BASE_URL = "http://codercba.com:8000"
}

export { BASE_URL }
export const TIME_OUT = 10000