import * as React from "react"
import Layout from "../components/layout"

const lyrics=[
  'a generation lost in space, with no time left to start again',
  '\n',
  'en generation förlorad i rymden, utan tid kvar att börja om',
  '\n',
  'une génération perdue dans l\'espace, sans le temps pour recommencer',
  '\n',
  'una generación perdida en el espacio, sin tiempo para empezar de nuevo',
  '\n',
  '다시 일어설 여유 없이 우주 속에서 길 잃은 세대'
];

const NotFoundPage = () => {
  return (
    <Layout pageTitle={"Error 404"} subTitle={"not found"} lyricsText={lyrics}>
    </Layout>
  )
}

export default NotFoundPage
