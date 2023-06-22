import React from 'react'
import { Item, ItemMain, Thumbnail, Metadata } from './styles'

type IParams = {
  data: {
    id: number
    type: string
    image: string
    date: string
  }
}

const ItemMeal: React.FC<IParams> = ({ data }) => (
  <Item>
    <ItemMain>
      <Thumbnail src={data.image} />
      <Metadata>{data.date} {data.type}</Metadata>
    </ItemMain>
  </Item>
)

export default ItemMeal
