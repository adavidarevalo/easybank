import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Principal from '../components/Principal'
import WhyChooseEasybank from '../components/WhyChooseEasybank'
import LatestArticles from '../components/LatestArticles'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Principal/>
    <WhyChooseEasybank/>
    <LatestArticles/>
  </Layout>
)

export default IndexPage
