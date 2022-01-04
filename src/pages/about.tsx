import * as React from "react"
import Layout from "../components/layout"

const lyrics=[
  'between boredom, boredom and horror - between the kingdom of the living and the dead',
  '\n',
  'mellan tristess, tristess och skräck - mellan riket av de levande och de döda',
  '\n',
  'entre l\'ennui, l\'ennui et l\'horreur - entre le royaume des vivants et des morts',
  '\n',
  'entre el aburrimiento, el aburrimiento y el horror - entre el reino de los vivos y los muertos',
  '\n',
  'zwischen langeweile, langeweile und entsetzen - zwischen dem reich der lebenden und der toten',
  '\n',
  '在无聊，无聊和恐怖之间-在生与死的领域之间',
  '\n',
  '退屈、退屈と恐怖の間 - 生きている王国と死んだ王国の間'
];

const AboutPage = () => {
  return (
    <Layout pageTitle={"About"} subTitle={"under construction"} lyricsText={lyrics}>
      <p>
        a website by oscar cederberg <br />
        powered by gatsby, tailwindcss, etc. <br />
        available open source on <a className="text-blue-500 hover:text-blue-700 active:text-blue-900" href="https://github.com/oscarcederberg/cederberg-xyz">github</a>
      </p>
    </Layout>
  );
}

export default AboutPage;