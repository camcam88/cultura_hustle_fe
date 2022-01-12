import * as React from "react"
import SEO from '../components/SEO';
import PromoCard from '../components/PromoCard'
import './index.css'

const IndexPage = () => {
  return (
    <main>
        <SEO
            title="Home"
        />
      <h1>Home Page</h1>
      <PromoCard/>
      <PromoCard/>
      <PromoCard/>

    </main>
  )
}

export default IndexPage
