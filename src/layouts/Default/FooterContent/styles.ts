import styled from 'styled-components'

export const Links = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-flow: wrap;
  }

  a {
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1rem;
    letter-spacing: 0.03px;
    text-decoration: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-right: 2.75rem;
  }
`
