import { Image } from 'react-native'
import React from 'react'

const BgOther = () => {
  return (
    <Image
    resizeMode="stretch"
    source={require('../pngS/otherBackground.png')} 
    style={{
        left:0,
        position:'absolute',
        top:0,
        width:'100%',
        right:0,
        bottom:0
    }} />
  )
}

export default BgOther