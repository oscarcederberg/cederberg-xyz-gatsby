import * as React from "react"

export enum NoticeLevel {
    Danger,
    Warning,
    Caution,
    Notice
}

interface NoticeProps {
    text: string;
    level: NoticeLevel;
}

export function Notice({text, level}: NoticeProps){
    var bg_color;
    var symbol;
    switch(level){
        case NoticeLevel.Danger: 
            bg_color = "bg-red-400";
            symbol = "!!!";
            break;
        case NoticeLevel.Warning: 
            bg_color = "bg-orange-400";
            symbol = "!!";
            break;
        case NoticeLevel.Caution: 
            bg_color = "bg-yellow-400";
            symbol = "!";
            break;
        case NoticeLevel.Notice: 
            bg_color = "bg-blue-400";
            symbol = "";
            break;
    }

    return (
        <div className={"flex flex-row items-center w-full py-2 my-2 text-black rounded-md justify-evenly sm:w-96 " + bg_color}>
          <h1 className="text-6xl">
            {symbol}
          </h1>
          
          <p className="text-black">
            {text}
          </p>
          
          <h1 className="text-6xl">
            {symbol}
          </h1>
        </div>
    )
}