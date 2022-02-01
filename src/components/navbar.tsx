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
            return <Link key={i} className="rounded-full bg-gray-300 w-20 hover:bg-gray-500 active:bg-gray-700 focus:bg-gray-400 active:text-white" to={link}> {title} </Link>
          })
        }
      </div>
    )
}