import * as React from 'react'

const Layout = ({ pageTitle, subTitle, lyricsText, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main className="text-center">
        <p className="text-gray-200 font-lyrics"> {lyricsText} </p>
        <h1 className="text-7xl font-title lowercase font-bold mt-1"> {pageTitle} </h1>
        <h1 className="text-3xl font-title uppercase font-extralight mb-1"> {subTitle} </h1>
        {children}
        <p className="text-gray-200 font-lyrics"> {lyricsText.reverse()} </p>
      </main>
    </div>
  )
}

export default Layout