import React from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectCard2 from '../components/ProjectCard/ProjectCard2'

const Projects = () => {
  return (
      <section id="latest-work" class="max-w-7xl mx-auto px-4 relative pb-8 sm:pb-16">
        <h2
          class="text-3xl bg-white sm:text-[40px] bg- relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#6F4E37] sm:border-b-2 border-[#6F4E37]"
        >
          Latest Works
        </h2>
     
       <ProjectCard  
       title="CrowdFunding"
       colors='#459bd5'
       subTitle="Blockchain Platform"
       description="Developing a decentralized crowdfunding platform using Thirdweb, React, and Vite, enabling secure
       and transparent fundraising on the blockchain. Integrating smart contracts for seamless contributions
       and fund management."
       url="./assets/images/coder.svg"
        technologies={['thirdweb', 'react.js', 'vite', 'tailwind css', 'solidity', 'css', 'javascript', 'figma']}
       />
  
        <ProjectCard2
       title="NoteNest"
       colors='#ffe578'
       subTitle="Note taking web app"
       description=" NoteNest is a React-based web app designed for seamless note-taking and organization. It features user authentication, note creation, deletion,
               and archiving, ensuring a smooth and efficient experience."
       url="./assets/images/girl.jpg"
        technologies={['thirdweb', 'react.js', 'vite', 'tailwind css', 'solidity', 'css', 'javascript', 'figma']}
       />
       <ProjectCard  
       title="CrowdFunding"
       colors='#459bd5'
       subTitle="Blockchain Platform"
       description="Developing a decentralized crowdfunding platform using Thirdweb, React, and Vite, enabling secure
       and transparent fundraising on the blockchain. Integrating smart contracts for seamless contributions
       and fund management."
       url="./assets/images/coder.svg"
        technologies={['thirdweb', 'react.js', 'vite', 'tailwind css', 'solidity', 'css', 'javascript', 'figma']}
       />
  
        <ProjectCard2
       title="NoteNest"
       colors='#ffe578'
       subTitle="Note taking web app"
       description=" NoteNest is a React-based web app designed for seamless note-taking and organization. It features user authentication, note creation, deletion,
               and archiving, ensuring a smooth and efficient experience."
       url="./assets/images/girl.jpg"
        technologies={['thirdweb', 'react.js', 'vite', 'tailwind css', 'solidity', 'css', 'javascript', 'figma']}
       />

        {/* <div
          class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
        >
          <div
            class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"
          ></div>
          <div
            class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
          ></div>
          <a
            href="agcountryscout.netlify.app"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div
              class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200"
            >
              <img
                class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src="./assets/images/harigurus.webp"
                alt=""
              />
              <span
                class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                >CountriesCout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
  
          <div class="w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              CountriesCout
            </h3>
            <span class="text-[#fc815c] text-base md:text-lg"
              >(Country Explorer)</span
            >
            <p class="text-justify text-sm md:text-base mt-2">
              Country Explorer is a Vanilla JavaScript web app that fetches data from the REST Countries API and displays a list of countries. Users can search for a country, view details by clicking on a country card, and see information like population, region, capital, currency, and languages. 
              The app features a clean UI with CSS for styling.
            </p>
  
            <ul class="flex flex-wrap gap-2 mt-2">
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #HTML
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #CSS
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #javascript (Vanilla JS)
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #REST Countries API
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #LocalStorage
              </li>
              
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #figma
              </li>
            </ul>
          </div>
        </div>
        
        <div
          class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
        >
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
              Portfolio
            </h3>
            <span class="text-[#47afa1] text-base md:text-lg"
              >(personal Portfolio)</span
            >
            <p class="text-justify text-sm md:text-base mt-2">
              modern and responsive portfolio website built using HTML, JavaScript, and Tailwind CSS to showcase my projects, skills, and experience. It features a clean UI, interactive animations, and smooth navigation, providing a seamless user experience. 
              The website is fully responsive and optimized for performance.
            </p>
  
            <ul class="flex flex-wrap gap-2 mt-2">
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #HTML
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #tailwind
              </li>
              
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #css
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #javascript
              </li>
              <li
                class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
              >
                #figma
              </li>
            </ul>
          </div>
          <div
            class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"
          ></div>
          <div
            class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
          ></div>
          <a
            href="#"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div
              class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
            >
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src="./assets/images/web-dev-english.webp"
                alt=""
              />
              <span
                class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                >Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div> */}

        
        <div
          class="w-0.5 hidden sm:block bg-[#6F4E37] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
        ></div>
      </section> 
  )
}

export default Projects