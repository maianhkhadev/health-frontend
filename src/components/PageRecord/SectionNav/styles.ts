import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: 3.5rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 600px) {
    grid-gap: 0.5rem;
  }
`
