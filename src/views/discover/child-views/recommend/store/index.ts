import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners } from '../service'

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

interface IRecommendState {
  banners: BannerState[]
}

const initialState: IRecommendState = {
  banners: []
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

// 创建 slice
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction: (state, { payload }) => {
      state.banners = payload
    }
  }
})

// 注意需要导出 action - 方便 dispatch 派发
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
