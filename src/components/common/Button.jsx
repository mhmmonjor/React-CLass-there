import React from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <Button className={`px-7 py-6 bg-btnclr text-white ${className}`} >{btnTxt}</Button>
  )
}

export default Button