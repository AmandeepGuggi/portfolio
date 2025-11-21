
import MobileNav from '../MobileNav'
import NavItem from './NavItems'
// import { Link } from "react-dom";

const Header = () => {
  return (
      <header
        className="sticky top-0 z-50 py-3 px-10 flex items-center justify-between  gap-5 w-full  max-h-fit "
      >
        {/* <svg
          width="80"
          height="103"
          viewBox="0 0 116 111"
          fill={isDark ? 'none' : 'black' }
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52.7606 1C47.6004 2.72879 21.5233 90.1138 5.78756 90.1138C-9.94823 90.1138 17.7658 116.352 22.2282 108.551C26.6906 100.751 49.0026 24.6376 52.7606 50.8754C56.5185 77.1131 97.8549 113.279 115 109.197C115 109.197 31.5751 18.7949 49.8945 28.25C68.2139 37.7051 52.7606 1 52.7606 1Z"
            fill="url(#paint0_linear_63_2)"
          />
          <path
            d="M115 109.197C115 109.197 66.6177 11.6369 52.7606 1C52.7606 1 68.2139 37.7051 49.8945 28.25C31.5751 18.7949 115 109.197 115 109.197Z"
            fill="url(#paint1_linear_63_2)"
          />
          <path
            d="M52.7606 1C47.6004 2.72879 21.5233 90.1138 5.78756 90.1138C-9.94823 90.1138 17.7658 116.352 22.2282 108.551C26.6906 100.751 49.0026 24.6376 52.7606 50.8754C56.5185 77.1131 97.8549 113.279 115 109.197M52.7606 1C66.6177 11.6369 115 109.197 115 109.197M52.7606 1C52.7606 1 68.2139 37.7051 49.8945 28.25C31.5751 18.7949 115 109.197 115 109.197"
            stroke={isDark ? 'black' : 'white'}
          />
          <defs>
            <linearGradient
              id="paint0_linear_63_2"
              x1="55.814"
              y1="-2.54565"
              x2="123.142"
              y2="104.342"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.25" stop-color="white" />
              <stop offset="0.425" stop-color="white" />
              <stop offset="0.705" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_63_2"
              x1="58"
              y1="1"
              x2="51.7657"
              y2="79.7011"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.415" stop-color="white" />
              <stop offset="1" stop-color="#B0B2C3" />
            </linearGradient>
          </defs>
        </svg> */}

<nav className=" hidden sm:flex border-gray-100 border rounded-3xl gap-6  md:gap-20 items-center justify-around px-5  bg-white shadow-sm max-h-[70px] ml-auto  ">
  {/* <div className="flex items-center justify-around gap-20 "> */}
   <a href="#home"> <NavItem className={`relative text-lg text-gray-800 font-medium
             after:content-[''] after:absolute after:left-1/2 after:bottom-0
             after:h-0.5 after:w-0 after:bg-red-300 after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0`} icon="/assets/icons/home.svg" label="Home" /></a>
   <a href="#about"> <NavItem className={`relative text-lg text-gray-800 font-medium
             after:content-[''] after:absolute after:left-1/2 after:bottom-0
             after:h-0.5 after:w-0 after:bg-red-300 after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0`}  icon= "/assets/icons/info.svg" label="About" /></a>
<a href="#projects">    <NavItem className={`relative text-lg text-gray-800 font-medium
             after:content-[''] after:absolute after:left-1/2 after:bottom-0
             after:h-0.5 after:w-0 after:bg-red-300 after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0`}  icon="/assets/icons/folder.svg" label="Projects" /></a>
  <a href='#contact'>
    <NavItem className={`relative text-lg text-gray-800 font-medium
             after:content-[''] after:absolute after:left-1/2 after:bottom-0
             after:h-0.5 after:w-0 after:bg-red-300 after:transition-all after:duration-300
             hover:after:w-full hover:after:left-0`}  icon="/assets/icons/email.svg" label="Contact" />
  </a>
    {/* <img src="/assets/icons/sun.svg" alt="lightTheme" className='cursor-pointer  ' /> */}
  {/* </div> */}
</nav>

      {/* <div className='sm:hidden max-w-fit cursor-pointer  '>
        <img src="/assets/icons/menu.svg" alt="menu" className='w-10 h-10 ' />
      </div> */}

      {/* overlay */}
      <MobileNav />

      </header>
  )
}

export default Header