import React from 'react'
import { Item, ItemHeader, ItemMain, Date, Time, Content } from './styles'

type IParams = {
  data: {
    id: number
    date: string
    time: string
    content: string
  }
}

const ItemMeal: React.FC<IParams> = ({ data }) => (
  <Item>
    <ItemHeader>
      <Date>{data.date}</Date>
      <Time>{data.time}</Time>
    </ItemHeader>

    <ItemMain>
      <Content>{data.content}</Content>
    </ItemMain>
  </Item>
)

export default ItemMeal
