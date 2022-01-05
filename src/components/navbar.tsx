import { Link } from "gatsby";
import * as React from "react"

export interface NavBarLink {
  title: string;
  link: string;
}

interface NavBarProps {
  style: string;
  links: NavBarLink[];
}

export default function NavBar(props: NavBarProps) {
    return (
      <div className={props.style}>
        {
          props.links.map(function(props: NavBarLink, i: number){ 
            return <Link key={i} className="rounded-full bg-gray-300 w-1/4 hover:bg-gray-400" to={props.link}> {props.title} </Link>
          })
        }
      </div>
    )
}