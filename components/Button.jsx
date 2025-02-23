import React from 'react'

const Button = ({title,id,rightIcon,leftIcon,containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit overflow-hidden cursor-pointer rounded-full  px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative flex overflow-hidden icline-flex font-general  text-xs uppercase'>
            <div>{title}</div>
        </span>
        {rightIcon}
        </button>
  )
}

export default Button