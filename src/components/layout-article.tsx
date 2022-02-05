import * as React from 'react'
import Divider from './divider'
import { LyricsBottom } from './lyrics'
import NavBar from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  dividerText: string;
  children: any;
}

export default function LayoutArticle({pageTitle, subTitle, lyricsText, dividerText, children}: LayoutProps) {
  return (
    <>
      <title>{pageTitle} | {subTitle}</title>
      
      <main className="relative w-screen h-screen text-center dark:bg-gray-900 dark:text-gray-50">
        <div className='z-10 mx-16 text-left'>
          <div className='flex flex-col items-center sm:flex-row'>
            <div className='flex flex-row items-center mt-6 gap-x-4'>
              <h1 className="text-xl font-bold lowercase sm:text-3xl lg:text-5xl font-title"> {pageTitle} </h1>

              <h1 className="text-xl lowercase sm:text-3xl lg:text-5xl font-title font-extralight"> {subTitle} </h1>
            </div>
            <NavBar style="flex flex-row justify-evenly text-center w-80 mt-6" />
          </div>
        </div>
        
        <Divider text={dividerText} />
          
        <div className="mx-16 text-left">
          {children} 
        </div> 

        <LyricsBottom text={lyricsText} reversed={true}/>
      </main>
    </>
  )
}