import React from 'react'
import { Item, ItemMain, Title, Text } from './styles'

type IParams = {
  data: {
    id: number
    elementId: string
    image: string
    title: string
    text: string
  }
}

const ItemNav: React.FC<IParams> = ({ data }) => {
  const onClick = () => {
    const element = document.querySelector(`#${data.elementId}`)
    element && element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Item src={data.image} onClick={onClick}>
      <ItemMain>
        <Title>{data.title}</Title>
        <Text>{data.text}</Text>
      </ItemMain>
    </Item>
  )
}

export default ItemNav
