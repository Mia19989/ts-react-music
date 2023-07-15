import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: React.FC<IProps> = () => {
  return (
    <div>
      <div>sfjklsjfkls</div>
      <div>sfjklsjfkls</div>
      <div>sfjklsjfkls</div>
    </div>
  )
}

export default memo(Recommend)
