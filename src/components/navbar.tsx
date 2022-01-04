import { Link } from "gatsby";
import * as React from "react"

export default function NavBar() {
    return (
      <div className="flex flex-row justify-evenly my-3">
        <Link className="rounded-full bg-gray-300 w-1/4 hover:bg-gray-400" to="/"> home </Link>
        <Link className="rounded-full bg-gray-300 w-1/4 hover:bg-gray-400" to="/about"> about </Link>
        <Link className="rounded-full bg-gray-300 w-1/4 hover:bg-gray-400" to="/404"> 404 </Link>
      </div>
    )
}