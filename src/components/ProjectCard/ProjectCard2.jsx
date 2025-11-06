import React from 'react'

const ProjectCard2 = ({title, subTitle, description, url, technologies, colors, link}) => {
    return (
          <div
          class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-20 items-center sm:mt-20 relative"
        >
          <div class="order-2 sm:order-1 w-full">
            <h3 style={{ color: colors }} class=" font-bold text-2xl md:text-4xl">
              {title}
            </h3>
            <span class="text-[#ffe578] text-base md:text-lg"
              >({subTitle})</span
            >
            <p class="text-justify text-sm md:text-base mt-2">
             {description}
            </p>
  
            <ul class="flex flex-wrap gap-2 mt-2">
                    {
                        technologies.map((tech) => (
                            <li
                                class="border rounded-[50px] border-[#999] px-2.5 py-[5px] text-sm md:text-base"
                            >
                                #{tech}
                            </li>
                        ))
                    }
                </ul>
          </div>
          <div
            class="h-px left-1/2 right-1/4 bg-[#6F4E37] absolute top-1/2 hidden sm:block"
          ></div>
          <div style={{ borderColor: colors }}
            class="w-4 h-4 rounded-full border-[3px]  absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
          ></div>
          <a
            href={link}
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div
              class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
            >
              <img style={{
           filter: `drop-shadow(0 0 60px ${colors}90)` 
              }}
                class="max-w-[400px] w-full relative z-10 "
                src={url}
                alt={title}
              />
              <span style={{ backgroundColor: colors }}
                class="flex group-hover:-top-14 ease-jump duration-200 text-black sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                >{title}
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
        </div>
    )
}

export default ProjectCard2