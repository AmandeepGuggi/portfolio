import React from 'react'
import RoundedHexImage from '../RoundedHex'

const Skills = () => {
  return (
   <div className='mb-6'>
   <h1 className='text-center my-3 text-4xl font-bold mb-4'>Skills</h1>
    <div className='flex max-w-[80vw] mx-auto gap-3 flex-wrap justify-center items-center '>
       <RoundedHexImage src="/assets/icons/javascript.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/tailwind-css.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/mongodb.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/express.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/react.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/git.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/github.svg" size={100} stroke="#47110d" />
       <RoundedHexImage src="/assets/icons/node.svg" size={100} stroke="#47110d" />
    </div>
   </div>
  )
}

export default Skills