import * as React from "react"
import Layout from "../components/layout"

const lyrics=[
  'a generation lost in space, with no time left to start again',
  '\n',
  'en generation förlorad i rymden, utan tid kvar att börja om',
  '\n',
  'une génération perdue dans l\'espace, sans plus de temps pour recommencer',
  '\n',
  'una generación perdida en el espacio, sin tiempo para empezar de nuevo',
  '\n',
  'eine im weltraum verlorene generation, die keine zeit mehr hat, neu anzufangen',
  '\n',
  '一代人迷失在太空中，没有时间重新开始',
  '\n',
  '宇宙で失われた世代、再開する時間がない'
];

const NotFoundPage = () => {
  return (
    <Layout pageTitle={"error 404"} subTitle={"not found"} lyricsText={lyrics}>
    </Layout>
  )
}

export default NotFoundPage
