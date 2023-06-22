import React from 'react'
import ItemArticle from './ItemArticle'
import ButtonMain from '../../Buttons/Main'
import { Section, Main, Footer } from './styles'
import dataSource from '../../../mockData/articles'

const SectionArticles: React.FC = () => (
  <Section>
    <Main>
      {dataSource.map((item) => (
        <ItemArticle key={item.id} data={item} />
      ))}
    </Main>

    <Footer>
      <ButtonMain>コラムをもっと見る</ButtonMain>
    </Footer>
  </Section>
)

export default SectionArticles
