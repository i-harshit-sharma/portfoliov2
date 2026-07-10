import Image from "next/image";
import Link from "next/link";
import React from "react";
// import LightDarkToggle from "./LightDarkToggle";
// import Tooltip from "./tooltip";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";



const Heading = () => {
  return (
    <>
      <style>{`
                @keyframes draw-path {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
      <div className="fixed  top-0 z-8 w-full shadow_[]">
        <div className="flex justify-between items-center py-4 sm:py-6 mx-2 sm:mx-8 md:mx-16">
          <h1 className="text-xl md:text-2xl font-bold text-[#f97316] tracking-wide cursor-default group flex items-center">
            <span className="relative inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2">
              <span className="absolute transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-rotate-12">
                <Image
                  src="/hi-static.webp"
                  height={64}
                  width={64}
                  className="w-7 h-7 md:w-10 md:h-10 object-contain"
                  alt="hi animated logo"
                  aria-hidden
                />
              </span>

              <div className="absolute opacity-0 rotate-12 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0">
                <Image
                  src="/hi.webp"
                  height={64}
                  width={64}
                  className="w-8 h-8 md:w-12 md:h-12 object-contain"
                  alt="hi animated logo"
                  aria-hidden
                />
              </div>
            </span>

            <span className="flex items-baseline">
              Hello
              <span className="inline-block w-0 group-hover:w-[2.6em] overflow-hidden transition-all duration-500 ease-out whitespace-nowrap">
                oooo
              </span>
              !
            </span>
          </h1>
          <div className="flex items-center gap-3 md:gap-4">
            {/*<Tooltip content="Blog" className="text-primary">
              <Link
                href="https://blog.harshits.live"
                target="_blank"
                className="group inline-block relative" // 1. Add 'group' to the parent
              >
                <NotebookPen className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </Tooltip>*/}
            {/*<Tooltip content="Github" className="text-primary">
              <Link
                href="https://github.com/i-harshit-sharma"
                target="_blank"
                className="group inline-block relative" // 1. Add 'group' to the parent
              >
                <Github className="w-5 h-5 md:w-6 md:h-6" />*/}
                {/* <div className="pointer-events-none h-6 absolute w-6 top-6  left-1/2 -translate-x-1/2 mr-3 text-[10px] font-medium rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50 text-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2010_2)">
                                    <path
                                        d="M3 15C5 18 7 19 10 19C13 19 17 16 17 12C17 8 14 5 11 5C8 5 6 6.5 6 9C6 11.5 8 14 12 14C16 14 20.408 11.547 22 9"
                                        stroke="black"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="[stroke-dasharray:65] [stroke-dashoffset:65] group-hover:animate-[draw-path_0.6s_ease-in-out_forwards]"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2010_2">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div> */}
              {/*</Link>
            </Tooltip>*/}
            {/*<Tooltip content="Resume" className="text-primary">
              <Link
                href="https://drive.google.com/file/d/1PsOE9OqnbHmFbkysf6Thp79rxkA4P-S2/view?usp=drive_link"
                target="_blank"
                className="group inline-block relative"
              >
                <NotepadText className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </Tooltip>*/}
            {/*<Tooltip content="LinkedIn" className="text-primary">
              <Link
                href="https://linkedin.com/in/harshit163"
                target="_blank"
                className="group inline-block relative" // 1. Add 'group' to the parent
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M5.00039 6C5.00052 6 5.00023 6 5.00039 6H2.33332C2.14932 5.99988 2.00011 6.14897 1.99999 6.33293C1.99999 6.33309 1.99999 6.33281 1.99999 6.33293V14.3333C1.99987 14.5173 2.14895 14.6665 2.33291 14.6667C2.33308 14.6667 2.33279 14.6667 2.33291 14.6667H4.99999C5.18399 14.6668 5.3332 14.5177 5.33332 14.3337C5.33332 14.3338 5.33332 14.3336 5.33332 14.3337V6.33333C5.33345 6.14933 5.18435 6.00012 5.00039 6ZM4.66665 14H2.66665V6.66667H4.66665V14ZM12 6C11.2767 6.00004 10.5737 6.23873 10 6.67907V6.33333C10.0001 6.14933 9.851 6.00012 9.66707 6C9.6672 6 9.66687 6 9.66707 6H7C6.816 5.99988 6.6668 6.14897 6.66665 6.33293C6.66665 6.33309 6.66665 6.33281 6.66665 6.33293V14.3333C6.66653 14.5173 6.8156 14.6665 6.9996 14.6667C6.99973 14.6667 6.99947 14.6667 6.9996 14.6667H9.66667C9.85067 14.6668 9.99987 14.5177 10 14.3337C10 14.3338 10 14.3336 10 14.3337V10.6667C10 10.1144 10.4477 9.66667 11 9.66667C11.5523 9.66667 12 10.1144 12 10.6667V14.3333C11.9999 14.5173 12.1489 14.6665 12.3329 14.6667C12.3331 14.6667 12.3328 14.6667 12.3329 14.6667H15C15.184 14.6668 15.3332 14.5177 15.3333 14.3337C15.3333 14.3338 15.3333 14.3336 15.3333 14.3337V9.33333C15.3311 7.49327 13.8401 6.00215 12 6ZM14.6667 14H12.6667V10.6667C12.6667 9.7462 11.9205 9 11 9C10.0795 9 9.33333 9.7462 9.33333 10.6667V14H7.33333V6.66667H9.33333V7.46873C9.33333 7.6104 9.42293 7.73653 9.55667 7.7832C9.69007 7.83127 9.83933 7.78853 9.92713 7.67707C10.8355 6.52588 12.5051 6.32906 13.6563 7.23747C14.2975 7.74347 14.6702 8.51647 14.6667 9.33333V14ZM3.91197 1.33455C3.83357 1.32906 3.75487 1.32865 3.67642 1.33333C2.67023 1.26461 1.79886 2.02457 1.73013 3.03076C1.72737 3.07125 1.72598 3.11177 1.7259 3.15234C1.71723 4.14998 2.51895 4.96574 3.51659 4.97441C3.55732 4.97477 3.59801 4.97371 3.63866 4.97131H3.65754C4.66181 5.04159 5.53287 4.28442 5.60314 3.28015C5.67341 2.27588 4.91625 1.40483 3.91197 1.33455ZM3.88895 4.30656C3.81196 4.31364 3.73441 4.31303 3.65754 4.30465H3.63866C3.00125 4.35364 2.44485 3.87667 2.39586 3.23926C2.34687 2.60189 2.82384 2.04545 3.46125 1.99646C3.53295 1.99097 3.60497 1.99215 3.67642 2C4.31334 1.94133 4.87727 2.41007 4.93598 3.04699C4.99466 3.68396 4.52591 4.24788 3.88895 4.30656Z"
                    fill="#000"
                  />
                  <path
                    d="M5.00039 6C5.00023 6 5.00052 6 5.00039 6ZM5.00039 6H2.33332C2.14932 5.99988 2.00011 6.14897 1.99999 6.33293M5.00039 6C5.18435 6.00012 5.33345 6.14933 5.33332 6.33333V14.3337M1.99999 6.33293C1.99999 6.33281 1.99999 6.33309 1.99999 6.33293ZM1.99999 6.33293V14.3333C1.99987 14.5173 2.14895 14.6665 2.33291 14.6667M2.33291 14.6667C2.33279 14.6667 2.33308 14.6667 2.33291 14.6667ZM2.33291 14.6667H4.99999C5.18399 14.6668 5.3332 14.5177 5.33332 14.3337M5.33332 14.3337C5.33332 14.3336 5.33332 14.3338 5.33332 14.3337ZM9.66707 6C9.851 6.00012 10.0001 6.14933 10 6.33333V6.67907C10.5737 6.23873 11.2767 6.00004 12 6C13.8401 6.00215 15.3311 7.49327 15.3333 9.33333V14.3337M9.66707 6C9.66687 6 9.6672 6 9.66707 6ZM9.66707 6H7C6.816 5.99988 6.6668 6.14897 6.66665 6.33293M6.66665 6.33293C6.66665 6.33281 6.66665 6.33309 6.66665 6.33293ZM6.66665 6.33293V14.3333C6.66653 14.5173 6.8156 14.6665 6.9996 14.6667M6.9996 14.6667C6.99947 14.6667 6.99973 14.6667 6.9996 14.6667ZM6.9996 14.6667H9.66667C9.85067 14.6668 9.99987 14.5177 10 14.3337M10 14.3337C10 14.3336 10 14.3338 10 14.3337ZM10 14.3337V10.6667C10 10.1144 10.4477 9.66667 11 9.66667C11.5523 9.66667 12 10.1144 12 10.6667V14.3333C11.9999 14.5173 12.1489 14.6665 12.3329 14.6667M12.3329 14.6667C12.3328 14.6667 12.3331 14.6667 12.3329 14.6667ZM12.3329 14.6667H15C15.184 14.6668 15.3332 14.5177 15.3333 14.3337M15.3333 14.3337C15.3333 14.3336 15.3333 14.3338 15.3333 14.3337ZM4.66665 14H2.66665V6.66667H4.66665V14ZM14.6667 14H12.6667V10.6667C12.6667 9.7462 11.9205 9 11 9C10.0795 9 9.33333 9.7462 9.33333 10.6667V14H7.33333V6.66667H9.33333V7.46873C9.33333 7.6104 9.42293 7.73653 9.55667 7.7832C9.69007 7.83127 9.83933 7.78853 9.92713 7.67707C10.8355 6.52588 12.5051 6.32906 13.6563 7.23747C14.2975 7.74347 14.6702 8.51647 14.6667 9.33333V14ZM3.91197 1.33455C3.83357 1.32906 3.75487 1.32865 3.67642 1.33333C2.67023 1.26461 1.79886 2.02457 1.73013 3.03076C1.72737 3.07125 1.72598 3.11177 1.7259 3.15234C1.71723 4.14998 2.51895 4.96574 3.51659 4.97441C3.55732 4.97477 3.59801 4.97371 3.63866 4.97131H3.65754C4.66181 5.04159 5.53287 4.28442 5.60314 3.28015C5.67341 2.27588 4.91625 1.40483 3.91197 1.33455ZM3.88895 4.30656C3.81196 4.31364 3.73441 4.31303 3.65754 4.30465H3.63866C3.00125 4.35364 2.44485 3.87667 2.39586 3.23926C2.34687 2.60189 2.82384 2.04545 3.46125 1.99646C3.53295 1.99097 3.60497 1.99215 3.67642 2C4.31334 1.94133 4.87727 2.41007 4.93598 3.04699C4.99466 3.68396 4.52591 4.24788 3.88895 4.30656Z"
                    stroke="#000"
                    strokeWidth="0.5"
                  />
                </svg>
              </Link>
            </Tooltip>*/}
            <Link
              href="https://cal.com/harshit163/quick-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-full transition-colors duration-200 hover:bg-slate-900 hover:text-gray-200"
            >
              Get in touch
              {/*<LinkedIn size={24} className="inline ml-1"/>*/}
            </Link>
            {/*<div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700 mx-1 md:mx-2" />
                    <LightDarkToggle />*/}
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-12 flex flex-col gap-6 pr-12">
        <Link
          href="https://drive.google.com/file/d/1PsOE9OqnbHmFbkysf6Thp79rxkA4P-S2/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-medium rounded-full shadow-lg transition-colors duration-200 hover:text-gray-50 text-gray-200"
        >
          <LiaFileInvoiceSolid size={20}/>

        </Link>
        <Link
          href="https://linkedin.com/in/harshit163"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-medium rounded-full shadow-lg transition-colors duration-200 hover:text-gray-50 text-gray-200"
        >
          <FaLinkedinIn size={16}  />
        </Link>
        <Link
          href="https://github.com/i-harshit-sharma"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-medium rounded-full shadow-lg transition-colors duration-200 hover:text-gray-50 text-gray-200"
        >
          <FaGithub size={16} />
        </Link>
      </div>
    </>
  );
};

export default Heading;
