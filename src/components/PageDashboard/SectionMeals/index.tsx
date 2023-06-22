import React, { useEffect } from 'react'
import ItemMeal from './ItemMeal'
import ButtonMain from '../../Buttons/Main'
import { Section, Header, Main, Footer, ButtonHexa } from './styles'
import useAPIMeals from '../../../hooks/useAPIMeals'
import icon1 from '../../../assets/images/icon_knife.svg'
import icon2 from '../../../assets/images/icon_cup.svg'

const SectionMeals: React.FC = () => {
  const { data, refetch } = useAPIMeals()

  useEffect(() => {
    refetch()
  }, [])

  const onFilter = (type: string) => {
    refetch(type)
  }

  return (
    <Section>
      <Header>
        <ButtonHexa onClick={() => { onFilter('Morning') }}>
          <img src={icon1} alt="" />
          <div>Morning</div>
        </ButtonHexa>

        <ButtonHexa onClick={() => { onFilter('Lunch') }}>
          <img src={icon1} alt="" />
          <div>Lunch</div>
        </ButtonHexa>

        <ButtonHexa onClick={() => { onFilter('Dinner') }}>
          <img src={icon1} alt="" />
          <div>Dinner</div>
        </ButtonHexa>

        <ButtonHexa onClick={() => { onFilter('Snack') }}>
          <img src={icon2} alt="" />
          <div>Snack</div>
        </ButtonHexa>
      </Header>

      <Main>
        {data.map((item) => (
          <ItemMeal key={item.id} data={item} />
        ))}
      </Main>

      <Footer>
        <ButtonMain>記録をもっと見る</ButtonMain>
      </Footer>
    </Section>
  )
}

export default SectionMeals
