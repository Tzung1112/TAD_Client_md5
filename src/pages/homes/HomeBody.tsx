import React from 'react'
import Carousel from './Carousel'
import ImgShow from './ImgShow'
import Video from './Video'

export default function HomeBody() {
  return (
    <div>
        <Carousel></Carousel>
        <ImgShow></ImgShow>
        <Video></Video>
    </div>
  )
}
