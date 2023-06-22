import styled from "styled-components"

export const Section = styled.section`

`

export const Header = styled.header`
  background-color: #414141;
`

export const Main = styled.main`
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`

export const Footer = styled.footer`
  background-color: #414141;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`

export const Container = styled.div`
  width: 960px;
  margin: auto;

  @media screen and (max-width: 600px) {
    width: calc(100vw - 1rem);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`