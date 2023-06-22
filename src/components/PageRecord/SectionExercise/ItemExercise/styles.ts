import styled from 'styled-components'

export const Item = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 5rem;
  align-items: center;
  border-bottom: 1px solid #777777;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;

  span {
    color: #ffffff;
  }
`

export const ItemMain = styled.main``

export const Title = styled.h4`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.375rem;
  letter-spacing: 0.08px;
  margin-top: 0;
  margin-bottom: 0;
`

export const Calo = styled.div`
  color: #ffcc21;
  font-size: 1rem;
  font-family: 'Inter';
  line-height: 1.125rem;
  letter-spacing: 0.08px;
`

export const Time = styled.div`
  color: #ffcc21;
  font-size: 1.125rem;
  font-family: 'Inter';
  line-height: 1.375rem;
  letter-spacing: 0.09px;
`
