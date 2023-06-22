import styled from 'styled-components'

export const Section = styled.section``

export const Header = styled.header``

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.75rem;
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

export const Title = styled.h4`
  color: #414141;
  font-size: 1.375rem;
  font-family: 'Inter';
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.75rem;
  letter-spacing: 0.11px;
  margin-top: 0;
  margin-bottom: 0;
`
