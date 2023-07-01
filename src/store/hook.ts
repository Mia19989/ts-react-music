import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { IRootStateType, DispatchType } from '.'

// 类型约束 useSlector
export const useAppSelector: TypedUseSelectorHook<IRootStateType> = useSelector

// 类型约束 useDispatch - 返回值是 DispatchType 类型
export const useAppDispatch: () => DispatchType = useDispatch
