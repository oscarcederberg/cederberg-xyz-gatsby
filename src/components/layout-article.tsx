import * as React from 'react'
import NavBar, { NavBarLink } from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  links: NavBarLink[];
  children: any;
}

export default function LayoutArticle(props: LayoutProps) {
  return (
    <>
      <title>{props.pageTitle} | {props.subTitle}</title>
      <main className="relative text-center h-screen v-screen">
        <div className='z-10 text-left mx-16'>
          <div className='flex flex-row items-center gap-x-4'>
            <h1 className="text-xl sm:text-3xl lg:text-5xl
            font-title lowercase font-bold"> {props.pageTitle} </h1>

            <h1 className="text-xl sm:text-3xl lg:text-5xl 
            font-title lowercase font-extralight"> {props.subTitle} </h1>
          </div>

          <NavBar style="flex flex-row justify-evenly my-3 text-center" links={props.links} />

          <div className="my-10">
            {props.children} 
          </div> 
        </div>

        <p className="-z-10 absolute inset-x-0 bottom-0
        text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {[...props.lyricsText].reverse()} </p>
      </main>
    </>
  )
}