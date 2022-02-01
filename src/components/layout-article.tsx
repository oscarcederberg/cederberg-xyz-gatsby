import * as React from 'react'
import { LyricsBottom } from './lyrics'
import NavBar from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  children: any;
}

export default function LayoutArticle({pageTitle, subTitle, lyricsText, children}: LayoutProps) {
  return (
    <>
      <title>{pageTitle} | {subTitle}</title>
      
      <main className="relative text-center h-screen v-screen">
        <div className='z-10 text-left mx-16 mt-6'>
          <div className='flex flex-col sm:flex-row items-center'>
            <div className='flex flex-row items-center gap-x-4'>
              <h1 className="text-xl sm:text-3xl lg:text-5xl
              font-title lowercase font-bold"> {pageTitle} </h1>

              <h1 className="text-xl sm:text-3xl lg:text-5xl 
              font-title lowercase font-extralight"> {subTitle} </h1>
            </div>
            <NavBar style="flex flex-row justify-evenly text-center w-80" />
          </div>

          <div className="my-10">
            {children} 
          </div> 
        </div>

        <LyricsBottom text={lyricsText} reversed={true}/>
      </main>
    </>
  )
}