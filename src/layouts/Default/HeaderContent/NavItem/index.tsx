import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Icon, Text } from './styles'

type IParams = {
  src: string
  text: string
  moveTo: string
}

const NavItem: React.FC<IParams> = ({ src, text, moveTo }) => (
  <Item>
    <Icon src={src} />
    <Text>{text}</Text>
  </Item>
)

export default NavItem
