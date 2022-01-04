import * as React from "react"
import Layout from "../components/layout-center"

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

const IndexPage = () => {
  return (
    <Layout pageTitle={"Cederberg"} subTitle={"under construction"} lyricsText={lyrics}>
      <p>
        working on something<br />
        this'll take a while<br />
        no idea how long<br />
      </p>
    </Layout>
  )
}

export default IndexPage
