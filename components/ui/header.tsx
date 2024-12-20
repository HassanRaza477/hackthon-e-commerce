
export default function Header() {
  return (
    <>
      <header className='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
        <section
          className='flex items-center flex-wrap lg:justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]'>



          <a href="" className="shrink-0"><h1>Avoin</h1>
          </a>

          <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">

            <span className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                className="cursor-pointer fill-gray-800 hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"></path>
              </svg>

            </span>
            <div className="inline-block cursor-pointer border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                className="hover:fill-[#007bff]">
                <circle cx="10" cy="7" r="6" data-original="#000000" />
                <path
                  d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                  data-original="#000000" />
              </svg>
            </div>
          </div>
        </section>

        <div className='flex flex-wrap justify-center px-10 py-3 relative'>

          <div id="collapseMenu"
            className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
            <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"></path>
              </svg>
            </button>

            <ul
              className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href="/"
                className=' text-[#007bff] font-semibold block text-[15px]'>Home</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Plant Pots </a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Tables</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Ceramics</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Chairs</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Crokrey</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Tableware</a></li>
              <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href=''
                className=' text-gray-800 text-[15px] block'>Cutlery</a></li>
            </ul>
          </div>

          <div id="toggleOpen" className='flex ml-auto lg:hidden'>
            <button>
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

