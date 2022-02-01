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
        <p className="-z-10 absolute inset-x-0 top-0
        text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {text} </p>
    )
}

export function LyricsBottom({text, reversed = false}: LyricsProps) {
    if(reversed) {
        text = [...text].reverse();
    }

    return (
        <p className="-z-10 absolute inset-x-0 bottom-0
        text-xs sm:text-sm lg:text-lg
        text-gray-300 font-lyrics leading-tight whitespace-pre-line my-2"> {text} </p>
    )
}