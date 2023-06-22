import React from 'react'
import { Item, ItemMain, Title, Text } from './styles'

type IParams = {
  data: {
    id: number
    image: string
    title: string
    text: string
  }
}

const ItemNav: React.FC<IParams> = ({ data }) => (
  <Item src={data.image}>
    <ItemMain>
      <Title>{data.title}</Title>
      <Text>{data.text}</Text>
    </ItemMain>
  </Item>
)

export default ItemNav
