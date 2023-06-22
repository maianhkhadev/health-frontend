import styled from "styled-components"

export const Section = styled.section`
  margin-bottom: 3.5rem;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: 600px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`