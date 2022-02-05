import * as React from "react"
import Layout from "../components/layout-article"

const lyrics = [
  'between boredom, boredom and horror - between the kingdom of the living and the dead',
  '\n',
  'mellan tristess, tristess och skräck - mellan riket av de levande och de döda',
  '\n',
  'entre l\'ennui, l\'ennui et l\'horreur - entre le royaume des vivants et des morts',
  '\n',
  'entre el aburrimiento, el aburrimiento y el horror - entre el reino de los vivos y los muertos',
  '\n',
  '지루함, 지루함과 공포 사이 - 산 자와 죽은 자들의 왕국 사이'
];

const divider = "it's good to be king. wait, maybe. i think maybe i'm just like a little bizarre little person who walks back and forth. whatever, you know, but... det är bra att vara kung. vänta, kanske. jag tror kanske jag är som en liten bisarr liten person som går fram och tillbaka. ändå, du vet, men... c'est bien d'être roi. attendez, peut-être. je pense que je suis peut-être comme une petite personne bizarre qui va et vient. peu importe, tu sais, mais... es bueno ser rey. espera, quizás. creo qué parezco ser simplemente un extraño pequeño y pequeña persona que camina para atrás y para adelante. aún, tu sabes, pero 왕이 되는 것이 좋습니다. 잠깐, 아마도. 나는 아마도 앞뒤로 걷는 작고 기이 한 작은 사람과 같다고 생각합니다. 뭐, 알겠지만..."

export default function AboutPage() {
  return (
    <Layout pageTitle={"About"} subTitle={"This site"} lyricsText={lyrics} dividerText={divider}>
      <p>
        a website by oscar cederberg <br />
        powered by gatsby, tailwindcss, etc. <br />
        available open source on <a className="text-blue-500 hover:text-blue-700 active:text-blue-900" target="_blank" rel="noopener noreferrer" href="https://github.com/oscarcederberg/cederberg-xyz">github</a>
      </p>
    </Layout>
  );
}