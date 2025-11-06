import React from 'react'
import NavItem from '../Header/NavItems'
import { Button } from './Button'

const Hero = () => {
    return (
        <section className='mt flex items-center'>
            <div>
                <p className='bg-gray-300 rounded-full max-w-fit px-2 mb-4'> Available for freelance work</p>
                <h1 className='text-6xl font-bold mb-7 '>Hi﹐I'm Amandeep</h1>
                <h3 className='text-4xl font-semibold mb-5 text-[#e2a193]'>Frontend Developer</h3>
                <p className='text-xl '>I am a full-stack developer who works on both the front-end and back-end of websites.
                    I create web applications that are simple, efficient, and user-friendly.</p>
                <div className='flex -ml-2'>
                    <NavItem className='px-0' icon="/assets/icons/location.svg" label="Based in Virar" />
                    <NavItem icon="/assets/icons/available.svg" label="Available now" />
                </div>

                <div className='flex gap-6'>
                    <Button
                        className="bg-black text-white hover:text-white hover:bg-red-300 "
                        label="Hire me"
                        icon={<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="text-white w-6 h-8"
                            fill="currentColor"
                        >
                            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                        </svg>} />
                    <Button
                        className="bg-white text-black border-2 hover:shadow-xl border-black"
                        label="Download CV"
                        icon={<svg
                            className='text-black w-6 h-8'
                            fill='currentColor'
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                            <path d="M352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 306.7L246.6 265.3C234.1 252.8 213.8 252.8 201.3 265.3C188.8 277.8 188.8 298.1 201.3 310.6L297.3 406.6C309.8 419.1 330.1 419.1 342.6 406.6L438.6 310.6C451.1 298.1 451.1 277.8 438.6 265.3C426.1 252.8 405.8 252.8 393.3 265.3L352 306.7L352 96zM160 384C124.7 384 96 412.7 96 448L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 448C544 412.7 515.3 384 480 384L433.1 384L376.5 440.6C345.3 471.8 294.6 471.8 263.4 440.6L206.9 384L160 384zM464 440C477.3 440 488 450.7 488 464C488 477.3 477.3 488 464 488C450.7 488 440 477.3 440 464C440 450.7 450.7 440 464 440z" /></svg>} />
                </div>

                <hr className='mt-5 border-t-2 border-gray-400 ' />

                <div className='flex items-center gap-6'>
                   <p> Follow me:</p> <div className='flex gap-4 mt-2'>
                        <a href=""><NavItem icon="/assets/icons/github.svg" /></a>
                        <a href=""><NavItem icon="/assets/icons/linkedin.svg" /></a>
                        <a href=""><NavItem icon="/assets/icons/twitter.svg" /></a>
                        <a href=""><NavItem icon="/assets/icons/instagram.svg" /></a>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-end'>
                <img src="/assets/images/stressed-girl.png" alt="amandeep" className='w-[80%]' />
            </div>
        </section>
    )
}

export default Hero