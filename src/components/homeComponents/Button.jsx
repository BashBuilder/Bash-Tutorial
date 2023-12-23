import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <div
      type=" button " 
      style={{ backgroundColor: bgColor, color, borderRadius,  }}
      className={`text-${size} p-3 hover:drop-shadow-xl cursor-pointer `}
    >
      {text}
    </div>
  )
}

export default Button