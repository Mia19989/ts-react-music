import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommends } from '../service'

// 存储轮播图数据
export interface BannerState {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
}

/** 热门推荐 */
export interface HotRecommendsState {
  id: number
  type: number
  name: string
  copywriter: string
  picUrl: string
  canDislike: boolean
  trackNumberUpdateTime: number
  playCount: number
  trackCount: number
  highQuality: boolean
  alg: string
}

interface IRecommendState {
  banners: BannerState[]
  hotRecommends: HotRecommendsState[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
}

// 处理异步操作，可自动生成 action creater
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    try {
      const res = await getBanners()
      dispatch(changeBannersAction(res.banners))
    } catch (err) {
      console.log('请求 banner 出错', err)
    }
  }
)

/** 发送异步请求，获取热门推荐数据 */
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    try {
      const res = await getHotRecommends({ limit: 8 })
      dispatch(changeHotRecommendsAction(res.result))
    } catch (err) {
      console.log('请求热门推荐数据出错', err)
    }
  }
)

// 创建 slice
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction: (state, { payload }) => {
      state.banners = payload
    },
    changeHotRecommendsAction: (state, { payload }) => {
      state.hotRecommends = payload
    }
  }
})

// 注意需要导出 action - 方便 dispatch 派发
export const { changeBannersAction, changeHotRecommendsAction } =
  recommendSlice.actions
export default recommendSlice.reducer
