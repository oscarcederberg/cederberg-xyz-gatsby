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
];

const NotFoundPage = () => {
  return (
    <Layout pageTitle={"Error 404"} subTitle={"not found"} lyricsText={lyrics}>
    </Layout>
  )
}

export default NotFoundPage
