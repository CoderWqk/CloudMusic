import { request } from './request';

// 获取 推荐歌单 模块相关的数据
export function getBannerMsg() {
  return request({
    data: 'sort=热歌榜1&format=json'
  })
}