import * as React from 'react'
import NavBar from './navbar'

const Layout = ({ pageTitle, subTitle, lyricsText, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <main className="flex flex-col justify-between items-center text-center h-screen">
        <p className="text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {lyricsText} </p>
        <div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl
          font-title lowercase font-bold"> {pageTitle} </h1>
          <h1 className="text-xl sm:text-3xl lg:text-5xl 
          font-title uppercase font-extralight -mt-2"> {subTitle} </h1>
          <div className='mb-1'> 
            <NavBar />
            {children} 
          </div>
        </div>
        <p className="text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {[...lyricsText].reverse()} </p>
      </main>
    </>
  )
}

export default Layout