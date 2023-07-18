import hccRequest from '@/service'

/** 请求轮播图数据 */
export const getBanners = () => {
  return hccRequest.get({
    url: '/banner'
  })
}

/** 请求热门推荐数据 */
export const getHotRecommends = ({ limit = 30 }) => {
  return hccRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
