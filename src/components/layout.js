import * as React from 'react'

const Layout = ({ pageTitle, subTitle, lyricsText, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <main className="flex flex-col justify-between items-center text-center h-screen">
        <p className="text-l text-gray-200 font-lyrics my-2"> {lyricsText} </p>
        <div className=''>
          <h1 className="text-8xl font-title lowercase font-bold"> {pageTitle} </h1>
          <h1 className="text-5xl font-title uppercase font-extralight -mt-2"> {subTitle} </h1>
          <div className='mb-1'> {children} </div>
        </div>
        <p className="text-xl text-gray-200 font-lyrics my-2"> {[...lyricsText].reverse()} </p>
      </main>
    </>
  )
}

export default Layout