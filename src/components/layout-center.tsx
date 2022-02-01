import * as React from 'react'
import { LyricsBottom, LyricsTop } from './lyrics'
import NavBar from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  children: any;
}

export default function LayoutCenter({pageTitle, subTitle, lyricsText, children}: LayoutProps) {
  return (
    <>
      <title>{pageTitle} | {subTitle}</title>
      
      <main className="relative text-center h-screen">
        <LyricsTop text={lyricsText}/>

        <div className='z-10 absolute inset-24 
        flex flex-col justify-evenly items-center'>
          <div className='w-80 sm:w-96 lg:w-2/3'>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl
            font-title lowercase font-bold"> {pageTitle} </h1>

            <h1 className="text-xl sm:text-3xl lg:text-5xl 
            font-title uppercase font-extralight -mt-2"> {subTitle} </h1>

            <div> 
              <NavBar style="flex flex-row justify-evenly my-3 text-center" />
              {children} 
            </div>
          </div>
        </div>

        <LyricsBottom text={lyricsText} reversed={true}/>
      </main>
    </>
  )
}