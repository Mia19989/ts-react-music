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
export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBanners()
  console.log('---请求的banners', res)
  return res.banners
})

// 创建 slice
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeData: () => {
      console.log('---banner')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('pending')
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        state.banners = payload
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('reject')
      })
  }
})

export default recommendSlice.reducer
