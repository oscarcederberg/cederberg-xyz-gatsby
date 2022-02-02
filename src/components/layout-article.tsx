import * as React from 'react'
import { LyricsBottom } from './lyrics'
import NavBar from './navbar'

interface LayoutProps {
  pageTitle: string;
  subTitle: string;
  lyricsText: string[];
  children: any;
}

export default function LayoutArticle({pageTitle, subTitle, lyricsText, children}: LayoutProps) {
  return (
    <>
      <title>{pageTitle} | {subTitle}</title>
      
      <main className="relative h-screen text-center v-screen">
        <div className='z-10 mx-16 mt-6 text-left'>
          <div className='flex flex-col items-center sm:flex-row'>
            <div className='flex flex-row items-center gap-x-4'>
              <h1 className="text-xl font-bold lowercase sm:text-3xl lg:text-5xl font-title"> {pageTitle} </h1>

              <h1 className="text-xl lowercase sm:text-3xl lg:text-5xl font-title font-extralight"> {subTitle} </h1>
            </div>
            <NavBar style="flex flex-row justify-evenly text-center w-80" />
          </div>

          <p className="absolute w-full text-xs tracking-tight text-gray-300 lowercase -z-10 font-lyrics sm:text-sm lg:text-lg whitespace-nowrap animate-scroll_lp">
            it's good to be king. wait, maybe. i think maybe i'm just like a little bizarre little person who walks back and forth. whatever, you know, but...
            det är bra att vara kung. vänta, kanske. jag tror kanske jag är som en liten bisarr liten person som går fram och tillbaka. ändå, du vet, men...
            c'est bien d'être roi. attendez, peut-être. je pense que je suis peut-être comme une petite personne bizarre qui va et vient. peu importe, tu sais, mais...
            es bueno ser rey. espera, tal vez. creo que tal vez soy como una pequeña personita extraña que camina de un lado a otro. lo que sea, ya sabes, pero...
            왕이 되는 것이 좋습니다. 잠깐, 아마도. 나는 아마도 앞뒤로 걷는 작고 기이 한 작은 사람과 같다고 생각합니다. 뭐, 알겠지만...
          </p>
          <p className="absolute w-full text-xs tracking-tight text-gray-300 lowercase -z-10 font-lyrics sm:text-sm lg:text-lg whitespace-nowrap animate-scroll_rp">
            it's good to be king. wait, maybe. i think maybe i'm just like a little bizarre little person who walks back and forth. whatever, you know, but...
            det är bra att vara kung. vänta, kanske. jag tror kanske jag är som en liten bisarr liten person som går fram och tillbaka. ändå, du vet, men...
            c'est bien d'être roi. attendez, peut-être. je pense que je suis peut-être comme une petite personne bizarre qui va et vient. peu importe, tu sais, mais...
            es bueno ser rey. espera, tal vez. creo que tal vez soy como una pequeña personita extraña que camina de un lado a otro. lo que sea, ya sabes, pero...
            왕이 되는 것이 좋습니다. 잠깐, 아마도. 나는 아마도 앞뒤로 걷는 작고 기이 한 작은 사람과 같다고 생각합니다. 뭐, 알겠지만...
          </p>
          
          <div className="my-10">
            {children} 
          </div> 
        </div>

        <LyricsBottom text={lyricsText} reversed={true}/>
      </main>
    </>
  )
}