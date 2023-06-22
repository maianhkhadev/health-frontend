import React from 'react'
import {
  Item,
  ItemHeader,
  ItemMain,
  Thumbnail,
  Time,
  Title,
  HashTags,
} from './styles'

type IParams = {
  data: {
    id: number
    image: string
    time: string
    title: string
    tags: string
  }
}

const ItemArticle: React.FC<IParams> = ({ data }) => (
  <Item>
    <ItemHeader>
      <Thumbnail src={data.image} />
      <Time>{data.time}</Time>
    </ItemHeader>

    <ItemMain>
      <Title>{data.title}</Title>
      <HashTags>{data.tags}</HashTags>
    </ItemMain>
  </Item>
)

export default ItemArticle
