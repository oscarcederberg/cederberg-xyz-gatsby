import * as React from "react"
import Layout from "../components/layout-article"

const lyrics=[
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

const links=[
  {
    title: "home",
    link: "/"
  },
  {
    title: "about",
    link: "/about"
  },
  {
    title: "404",
    link: "/404"
  },
]

const AboutPage = () => {
  return (
    <Layout pageTitle={"About"} subTitle={"This site"} lyricsText={lyrics} links={links}>
      <p>
        a website by oscar cederberg <br />
        powered by gatsby, tailwindcss, etc. <br />
        available open source on <a className="text-blue-500 hover:text-blue-700 active:text-blue-900" href="https://github.com/oscarcederberg/cederberg-xyz">github</a>
      </p>
    </Layout>
  );
}

export default AboutPage;