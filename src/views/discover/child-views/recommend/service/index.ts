import hccRequest from '@/service'

/** 请求轮播图数据 */
export const getBanners = () => {
  return hccRequest.get({
    url: '/banner'
  })
}

/** 请求热门推荐数据 */
export const getHotRecommends = (limit = 30) => {
  return hccRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

/** 请求新碟上架数据 */
export const getNewAlbums = (limit = 10) => {
  return hccRequest.get({
    url: '/album/newest',
    params: {
      limit
    }
  })
}

/** 请求榜单数据 */
export const getTopRanking = (id: number) => {
  return hccRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
