import styled from "styled-components"

export const Section = styled.section`

`

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  width: 45.5rem;
  text-align: center;
  margin: -2rem auto 1.5rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
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

export const ButtonHexa = styled.div`
  color: #ffffff;
  background: linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%);
  clip-path: polygon(50% 0, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%);
  font-size: 1.25rem;
  font-family: 'Inter';
  line-height: 1.5rem;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  cursor: pointer;

  img {
    width: 3.5rem;
    height: auto;
  }
`