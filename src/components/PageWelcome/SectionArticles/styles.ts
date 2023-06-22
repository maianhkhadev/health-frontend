import styled from "styled-components"

export const Section = styled.section`

`

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem 0.5rem;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 600px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Footer = styled.footer`
  text-align: center;
`