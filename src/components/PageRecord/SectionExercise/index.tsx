import React from 'react'
import ItemExercise from './ItemExercise'
import { Section, Header, Main, Title, Date } from './styles'
import dataSource from '../../../mockData/exercises'

const SectionExercise: React.FC = () => (
  <Section id="section-2">
    <Header>
      <Title>
        My
        <br />
        Exercise
      </Title>
      <Date>2021.05.21</Date>
    </Header>

    <Main>
        {dataSource.map((item) => (
          <ItemExercise key={item.id} data={item} />
        ))}
      </Main>
  </Section>
)

export default SectionExercise
