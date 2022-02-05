
import * as React from 'react'

interface DividerProps {
    text: string;
}

export default function Divider({text}: DividerProps) {
    return (
        <div className="relative h-10 overflow-x-hidden text-xs tracking-tight text-gray-300 lowercase dark:text-gray-700 font-lyrics sm:text-sm lg:text-lg whitespace-nowrap">
          <p className="absolute align-middle animate-scroll_lp">
            {text}
          </p>
          <p className="absolute align-middle animate-scroll_rp">
            {text}
          </p>
        </div>
    )
}