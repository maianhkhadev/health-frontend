import React from 'react'
import Layout from '../../layouts/Default'
import SectionIdeas from '../../components/PageWelcome/SectionIdeas'
import SectionArticles from '../../components/PageWelcome/SectionArticles'

const Welcome: React.FC = () => (
  <Layout>
    <SectionIdeas />

    <SectionArticles />
  </Layout>
)

export default Welcome
