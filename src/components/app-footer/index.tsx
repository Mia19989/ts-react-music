import React, { memo } from 'react'
import type { ReactNode } from 'react'
import { FooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppFooter: React.FC<IProps> = () => {
  return (
    <FooterWrapper>
      <h2>AppFooter</h2>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
