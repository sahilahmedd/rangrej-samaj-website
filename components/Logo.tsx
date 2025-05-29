import Image from 'next/image'
import React from 'react'

interface types {
    width: number;
    height: number;
    style: string;
    alt: string;
}

const Logo = ({ width, height, style, alt }: types) => {
  return (
    <div>
      <Image 
        width={width}
        height={height}
        className={style}
        src="/images/logo1.png"
        alt={alt}
        loading="lazy"
      />
    </div>
  )
}

export default Logo
