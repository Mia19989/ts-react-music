import hccRequest from '@/service'

// 请求轮播图数据
export const getBanners = () => {
  return hccRequest.get({
    url: '/banner'
  })
}
