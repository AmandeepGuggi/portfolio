import React from 'react'

export const Button = ({icon , label, className}) => {
  return (
    <div className={`flex items-center gap-2  py-3 px-2 rounded-xl mt-6 w-fit cursor-pointer transitio ${className}`}>
    {icon}
 <span>{label}</span>
    </div>
  )
}
