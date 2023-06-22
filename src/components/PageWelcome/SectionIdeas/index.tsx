import React from 'react'
import ItemIdea from './ItemIdea'
import { Section, Main } from './styles'
import dataSource from '../../../mockData/ideas'

const SectionIdeas: React.FC = () => (
  <Section>
    <Main>
      {dataSource.map((item) => (
        <ItemIdea key={item.id} data={item} />
      ))}
    </Main>
  </Section>
)

export default SectionIdeas
