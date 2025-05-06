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
<<<<<<< HEAD
        src="/images/logo1.png"
=======
        src="./images/logo.png"
>>>>>>> lang
        alt={alt}
      />
    </div>
  )
}

export default Logo
