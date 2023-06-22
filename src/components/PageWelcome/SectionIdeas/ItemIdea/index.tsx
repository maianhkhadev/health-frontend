import React from 'react'
import { Item, ItemMain, Title, Text, Line } from './styles'

type IParams = {
  data: {
    id: number
    title: string
    text: string
  }
}

const ItemIdea: React.FC<IParams> = ({ data }) => (
  <Item>
    <ItemMain>
      <Title>{data.title}</Title>
      <Line />
      <Text>{data.text}</Text>
    </ItemMain>
  </Item>
)

export default ItemIdea
