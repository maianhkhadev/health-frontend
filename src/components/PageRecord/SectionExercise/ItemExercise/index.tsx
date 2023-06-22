import React from 'react'
import { Item, ItemMain, Title, Calo, Time } from './styles'

type IParams = {
  data: {
    id: number
    title: string
    calo: string
    time: string
  }
}

const ItemExercise: React.FC<IParams> = ({ data }) => (
  <Item>
    <span>&#x2022;</span>
    
    <ItemMain>
      <Title>{data.title}</Title>
      <Calo>{data.calo}kcal</Calo>
    </ItemMain>

    <Time>{data.time}</Time>
  </Item>
)

export default ItemExercise
