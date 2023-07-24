import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBanners, getHotRecommends, getNewAlbums } from '../service'

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
  newAlbums: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: []
}

// 合并三个异步请求 - thunk 合并，通常适用于异步函数没有使用第一个特殊参数的时候
export const fetchRecommendDataAction = createAsyncThunk(
  'recommend',
  async (_, { dispatch }) => {
    try {
      // 不使用 await 的原因 - 同步处理的话，还需要等待的时间
      // 处理 promise 类型的数据
      getBanners().then((res) => {
        dispatch(changeBannersAction(res.banners))
      })
      getHotRecommends(8).then((res) => {
        dispatch(changeHotRecommendsAction(res.result))
      })
      getNewAlbums().then((res) => {
        dispatch(changeNewAlbumsAction(res.albums))
      })
    } catch (err) {
      console.log('--请求推荐页面数据失败', err)
    }
  }
)

// 处理异步操作，可自动生成 action creater
// export const fetchBannerDataAction = createAsyncThunk(
//   'banners',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getBanners()
//       dispatch(changeBannersAction(res.banners))
//     } catch (err) {
//       console.log('请求 banner 出错', err)
//     }
//   }
// )

/** 发送异步请求，获取热门推荐数据 */
// export const fetchHotRecommendAction = createAsyncThunk(
//   'hotRecommend',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getHotRecommends(8)
//       dispatch(changeHotRecommendsAction(res.result))
//     } catch (err) {
//       console.log('请求热门推荐数据出错', err)
//     }
//   }
// )

/** 获取新碟上架数据 */
// export const fetchNewAlbumAction = createAsyncThunk(
//   'newAlbum',
//   async (arg, { dispatch }) => {
//     try {
//       const res = await getNewAlbums()
//       dispatch(changeNewAlbumsAction(res.albums))
//     } catch (err) {
//       console.log('请求获取新碟上架数据出错', err)
//     }
//   }
// )

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
    },
    changeNewAlbumsAction: (state, { payload }) => {
      state.newAlbums = payload
    }
  }
})

// 注意需要导出 action - 方便 dispatch 派发
export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction
} = recommendSlice.actions
export default recommendSlice.reducer
