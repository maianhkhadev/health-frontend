import React from 'react'
import ItemDate from './ItemDate'
import ButtonMain from '../../Buttons/Main'
import { Section, Header, Main, Footer, Title } from './styles'
import dataSource from '../../../mockData/diary'

const SectionDiary: React.FC = () => (
  <Section id="section-3">
    <Header>
      <Title>My Diary</Title>
    </Header>

    <Main>
      {dataSource.map((item) => (
        <ItemDate key={item.id} data={item} />
      ))}
    </Main>

    <Footer>
      <ButtonMain>自分の日記をもっと見る</ButtonMain>
    </Footer>
  </Section>
)

export default SectionDiary
