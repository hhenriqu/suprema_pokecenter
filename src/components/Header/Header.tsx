'use client'
import Image from 'next/image'
import React from 'react'
import { StyledDiv } from './Header.style'


export default function Header() {
  return (
    <StyledDiv>
      <Image
        src="/assets/LogoSuprema.png"
        alt="Logo"
        width={100}
        height={32}
      />
    </StyledDiv>
  )
}
