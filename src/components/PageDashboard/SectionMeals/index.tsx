import React from 'react'
import ItemMeal from './ItemMeal'
import ButtonMain from '../../Buttons/Main'
import { Section, Header, Main, Footer, ButtonHexa } from './styles'
import dataSource from '../../../mockData/meals'
import icon1 from '../../../assets/images/icon_knife.svg'
import icon2 from '../../../assets/images/icon_cup.svg'

const SectionMeals: React.FC = () => (
  <Section>
    <Header>
      <ButtonHexa>
        <img src={icon1} alt="" />
        <div>Morning</div>
      </ButtonHexa>

      <ButtonHexa>
        <img src={icon1} alt="" />
        <div>Lunch</div>
      </ButtonHexa>

      <ButtonHexa>
        <img src={icon1} alt="" />
        <div>Dinner</div>
      </ButtonHexa>

      <ButtonHexa>
        <img src={icon2} alt="" />
        <div>Snack</div>
      </ButtonHexa>
    </Header>

    <Main>
      {dataSource.map((item) => (
        <ItemMeal key={item.id} data={item} />
      ))}
    </Main>

    <Footer>
      <ButtonMain>記録をもっと見る</ButtonMain>
    </Footer>
  </Section>
)

export default SectionMeals
