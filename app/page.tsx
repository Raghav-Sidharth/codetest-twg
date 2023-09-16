import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
import Fseries from './Fseries'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/qpe8ebz.css" />
      </Head>
      <Navbar />
      <LandingPage />
      <About />
      <Fseries />
    </>
  )
}
