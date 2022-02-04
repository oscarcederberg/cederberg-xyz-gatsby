import { Link } from "gatsby";
import * as React from "react"

const links=[
  {
    title: "home",
    link: "/"
  },
  {
    title: "about",
    link: "/about"
  },
]

interface NavBarProps {
  style: string;
}

export default function NavBar({style}: NavBarProps) {
    return (
      <div className={style}>
        {
          links.map(function({title, link}, i: number){ 
            return <Link key={i} className="w-20 bg-gray-300 rounded-full dark:bg-gray-600 hover:bg-gray-500 active:bg-gray-700 dark:active:bg-gray-300 focus:bg-gray-400 dark:focus:bg-gray-600 active:text-white dark:active:text-black" to={link}> {title} </Link>
          })
        }
      </div>
    )
}