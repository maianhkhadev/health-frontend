import styled from 'styled-components'

export const Section = styled.section`
  background-color: #414141;
  padding: 1rem 1.5rem;
  margin-bottom: 3.5rem;
`

export const Header = styled.header`
  display: flex;
  margin-bottom: 0.5rem;
`

export const Main = styled.main`
  height: 12.5rem;
  overflow: auto;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 2.5rem;
  }
`

export const Title = styled.h4`
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Inter';
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.15px;
  margin-top: 0;
  margin-bottom: 0;
`

export const Date = styled.div`
  color: #ffffff;
  font-size: 1.375rem;
  font-family: 'Inter';
  letter-spacing: 0.11px;
  margin-left: 2rem;
`
