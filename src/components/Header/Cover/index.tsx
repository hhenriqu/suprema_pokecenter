'use client'
import Image from 'next/image'
import React from 'react'
import { StyledDiv } from './style'
import imgCover from '/public/assets/wallpaper.jpg'

export default function Cover() {


  return (
    <StyledDiv>
      <Image className="imgCover" src={imgCover} alt="Logo" />
    </StyledDiv>
  )
}
