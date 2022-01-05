import * as React from 'react'
import NavBar, { NavBarLink } from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  links: NavBarLink[];
  children: any;
}

export default function LayoutCenter(props: LayoutProps) {
  return (
    <>
      <title>{props.pageTitle} | {props.subTitle}</title>
      <main className="relative text-center h-screen">
        <p className="-z-10 absolute inset-x-0 top-0
        text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {props.lyricsText} </p>

        <div className='z-10 absolute inset-24 
        flex flex-col justify-evenly items-center'>
          <div className='w-80 sm:w-96 lg:w-2/3'>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl
            font-title lowercase font-bold"> {props.pageTitle} </h1>

            <h1 className="text-xl sm:text-3xl lg:text-5xl 
            font-title uppercase font-extralight -mt-2"> {props.subTitle} </h1>

            <div> 
              <NavBar style="flex flex-row justify-evenly my-3 text-center" links={props.links} />
              {props.children} 
            </div>
          </div>
        </div>

        <p className="-z-10 absolute inset-x-0 bottom-0
        text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {[...props.lyricsText].reverse()} </p>
      </main>
    </>
  )
}