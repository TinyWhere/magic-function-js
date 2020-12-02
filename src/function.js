/**
 * 为数组添加删除方法
 *
 * @param 接收一个数组元素
 * @return boolean
 */

Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  if (index >= 0) {
    this.splice(index, 1);
    return true;
  }
  return false;
};

/**
 * 为window.location 添加查询 params 的方法
 *
 * @deprecated 现代浏览器已经提供了从 URL 解析 params 的函数
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/URL/searchParams
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams/get
 *
 * @param b 接收一个字符串
 *
 * @return null|string
 */
window.location.query = function (b) {
  const reg = new RegExp("(^|&|/?)" + b + "=([^&]*)(&|$)", "i");
  const r = window.location.href.substr(1).match(reg);
  if (r != null) {
    return r[2];
  }

  return null;
};
/**
 * 为window.location 添加查询当前平台的方法
 * @return null|string
 */
window.location.platform = function () {
  let platform = null;
  const userAgent = navigator.userAgent;
  const platforms = ["Windows NT", "Linux", "Macintosh", "Android", "iPhone", "iPod", "iPad", "Windows Phone"];
  for (let i = 0; i <= platforms.length; i++) {
    if (userAgent.indexOf(platforms[i]) > -1) {
      platform = platforms[i];
      break;
    }
  }

  return platform;
};
