import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FC<IProps> = () => {
  return (
    <div>
      <h2>AppFooter</h2>
    </div>
  )
}

export default memo(AppFooter)
