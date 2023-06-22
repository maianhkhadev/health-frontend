import React from 'react'
import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import ButtonDark from '../../../../components/Buttons/Dark'
import { Trigger } from './styles'
import './styles.css'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link to="/my-record">自分の記録</Link>,
  },
  {
    key: '2',
    label: <Link to="/">体重グラフ</Link>,
  },
  {
    key: '3',
    label: <Link to="/">目標</Link>,
  },
  {
    key: '4',
    label: <Link to="/">選択中のコース</Link>,
  },
  {
    key: '5',
    label: <Link to="/">コラム一覧</Link>,
  },
  {
    key: '6',
    label: <Link to="/">設定</Link>,
  },
]

const DropdownMenu: React.FC = () => (
  <Dropdown
    menu={{ items }}
    overlayClassName="dark-mode"
    placement="bottomRight"
  >
    <Trigger>
      <ButtonDark className="hide" icon={<MenuOutlined />} size="large" />
      <ButtonDark className="show" icon={<CloseOutlined />} size="large" />
    </Trigger>
  </Dropdown>
)

export default DropdownMenu
