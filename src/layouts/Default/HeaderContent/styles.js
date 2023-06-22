import styled from 'styled-components'

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavBar = styled.div`
  display: flex;
`

export const NavItems = styled.div`
display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

