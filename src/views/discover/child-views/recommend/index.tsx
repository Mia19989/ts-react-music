import React, { memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { fetchBannerDataAction } from './store'
import { useAppDispatch } from '@/store/hook'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <div>Recommend</div>
    </div>
  )
}

export default memo(Recommend)
