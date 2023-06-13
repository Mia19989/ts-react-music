import React, { memo } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  name: string
  age: number
  children?: ReactNode
}

const Download: React.FC<IProps> = (props) => {
  return (
    <>
      <div>download</div>
      <div>{props.age}</div>
      <div>{props.name}</div>
      <div>{props.children}</div>
    </>
  )
}

export default memo(Download)
