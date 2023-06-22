import React from 'react'
import { Badge } from 'antd'
import { Item, Icon, Text } from './styles'

type IParams = {
  src: string
  text: string
  notification?: number
}

const NavItem: React.FC<IParams> = ({ src, text, notification }) => (
  <Item>
    {notification ? (
      <Badge count={notification} size="small">
        <Icon src={src} />
      </Badge>
    ) : (
      <Icon src={src} />
    )}

    <Text>{text}</Text>
  </Item>
)

export default NavItem
