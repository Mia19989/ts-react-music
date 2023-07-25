import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getTopRanking
} from '../service'

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
  rankings: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
}

// 合并三个异步请求 - thunk 合并，通常适用于异步函数没有使用第一个特殊参数的时候
/** 获取推荐页面下的 轮播图、热门推荐、新碟上架 数据 */
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

/** 获取榜单数据 */
export const fetchTopRankingAction = createAsyncThunk(
  'topRanking',
  (_, { dispatch }) => {
    const ids = [19723756, 3779629, 2884035]

    // 方式一：弊端 - 获取到的数据顺序不受控制
    // for (const id of ids) {
    //   getTopRanking(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('--飙升榜', res)
    //         break
    //       case 3779629:
    //         console.log('--新歌榜', res)
    //         break
    //       case 2884035:
    //         console.log('--原创榜', res)
    //         break
    //     }
    //   })
    // }

    // 使用 for of  结合 promise.all 处理异步数据
    const promises: Promise<any>[] = []
    for (const id of ids) {
      // 存储返回的 promise 数据
      promises.push(getTopRanking(id))
    }

    // 处理 可迭代对象 - 经过 promise.all 处理后，返回一个包含所有 promise 对象返回值的数组
    Promise.all(promises).then((res) => {
      const playlists = res.map((item) => item.playlist)
      dispatch(changeRangkingsAction(playlists))
    })
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
    },
    changeRangkingsAction: (state, { payload }) => {
      state.rankings = payload
    }
  }
})

// 注意需要导出 action - 方便 dispatch 派发
export const {
  changeBannersAction,
  changeHotRecommendsAction,
  changeNewAlbumsAction,
  changeRangkingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
