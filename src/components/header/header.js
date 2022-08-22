import React from 'react'

export const Header = ({children}) => {
  return (
    <div className='bg-darkblue h-[60px] fixed top-0 w-full p-3 z-10 flex items-center'>{children}</div>
  )
}

