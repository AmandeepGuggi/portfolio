import React from 'react'

const Container = ({title, text}) => {
  return (
    <div className='hover:shadow-2xl min-w-[200px] hover:bg-pink-100 hover:border-pink-300 border-2
    flex flex-col justify-items-center cursor-pointer items-center  border-black rounded-xl max-w-[300px] p-4 text-center'>
        <h4 className='font-bold'>
        {title}
        </h4>
        <p>{text}</p>

    </div>
  )
}

export default Container