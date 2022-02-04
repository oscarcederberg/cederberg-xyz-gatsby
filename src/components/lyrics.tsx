import * as React from 'react'

interface LyricsProps {
    text: string[];
    reversed?: boolean;
}


export function LyricsTop({text, reversed = false}: LyricsProps) {
    if(reversed) {
        text = [...text].reverse();
    }

    return (
        <p className="absolute inset-x-0 top-0 my-2 text-xs leading-tight text-gray-300 whitespace-pre-line sm:text-sm lg:text-lg dark:text-gray-600 font-lyrics"> {text} </p>
    )
}

export function LyricsBottom({text, reversed = false}: LyricsProps) {
    if(reversed) {
        text = [...text].reverse();
    }

    return (
        <p className="absolute inset-x-0 bottom-0 my-2 text-xs leading-tight text-gray-300 whitespace-pre-line sm:text-sm lg:text-lg dark:text-gray-600 font-lyrics"> {text} </p>
    )
}