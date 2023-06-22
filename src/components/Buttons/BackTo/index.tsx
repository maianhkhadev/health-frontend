import React from 'react'
import { UpOutlined } from '@ant-design/icons'
import { AntButton } from './styles'

const ButtonBackTo: React.FC = () => {

  const onClick = () => {
    const element = document.querySelector('body')
    element && element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AntButton
      shape="circle"
      icon={<UpOutlined />}
      size="large"
      onClick={onClick}
    />
  )
}

export default ButtonBackTo
