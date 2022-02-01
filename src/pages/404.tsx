import * as React from "react"
import Layout from "../components/layout-center"

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

export default function NotFoundPage() {
  return (
    <Layout pageTitle={"Error 404"} subTitle={"Not Found"} lyricsText={lyrics}>
    </Layout>
  )
}