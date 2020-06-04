import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <section id="home">
        <p>Je suis Patrick shéron moucle</p>
      <span>Développeur  informatique</span>
      </section>
      
      <section id='about'>
      <p>
      about 
      </p>
      </section>
      <section id='project'>
      <p>
      about 
      </p>
      </section>
    </div>
  
    
  </Layout>
)

export default IndexPage
