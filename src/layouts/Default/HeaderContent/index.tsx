import React from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import NavItem from './NavItem'
import { FlexBetween, NavBar, NavItems } from './styles'
import src from '../../../assets/images/logo.svg'
import icon1 from '../../../assets/images/icon_memo.svg'
import icon2 from '../../../assets/images/icon_challenge.svg'
import icon3 from '../../../assets/images/icon_info.svg'

const HeaderContent: React.FC = () => (
  <FlexBetween>
    <Link to="/dashboard">
      <img src={src} height="64" alt="healthy" />
    </Link>

    <NavBar>
      <NavItems>
        <Link to="/my-record">
          <NavItem src={icon1} text="自分の記録" moveTo="" />
        </Link>

        <NavItem src={icon2} text="チャレンジ" moveTo="" />

        <NavItem src={icon3} text="お知らせ" moveTo="" />
      </NavItems>

      <DropdownMenu />
    </NavBar>
  </FlexBetween>
)

export default HeaderContent
