import React from 'react'

export const Header = ({children}) => {
  return (
    <div className='bg-darkblue h-[60px] fixed top-0 w-full p-3'>{children}</div>
  )
}

