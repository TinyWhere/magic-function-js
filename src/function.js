/**
 * 为数组添加删除方法
 *
 * @format
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
 * 为window.location 添加查询params的方法
 * @param 接收一个字符串
 * @return null|string
 */
window.location.query = function (b) {
  var reg = new RegExp("(^|&|/?)" + b + "=([^&]*)(&|$)", "i");
  var r = window.location.href.substr(1).match(reg);
  if (r != null) return r[2];
  return null;
};
/**
 * 为window.location 添加查询当前平台的方法
 * @return null|string
 */
window.location.platform = function () {
  var platform = null;
  var useragent = navigator.userAgent;
  const platforms = ["Windows NT", "Linux", "Macintosh", "Android", "iPhone", "iPod", "iPad", "Windows Phone"];
  for (i = 0; i <= platforms.length; i++) {
    if (useragent.indexOf(platforms[i]) > -1) {
      platform = platforms[i];
      break;
    }
  }
  return platform;
};
