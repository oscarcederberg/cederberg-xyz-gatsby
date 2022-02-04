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
      
      <main className="relative h-screen text-center dark:bg-gray-900 dark:text-gray-50">
        <LyricsTop text={lyricsText}/>

        <div className='absolute z-10 flex flex-col items-center inset-24 justify-evenly'>
          <div className='w-80 sm:w-96 lg:w-2/3'>
            <h1 className="text-4xl font-bold lowercase sm:text-6xl lg:text-8xl font-title"> {pageTitle} </h1>

            <h1 className="-mt-2 text-xl uppercase sm:text-3xl lg:text-5xl font-title font-extralight"> {subTitle} </h1>

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