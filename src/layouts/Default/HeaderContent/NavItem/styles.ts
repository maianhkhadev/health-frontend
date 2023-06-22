import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3d3d3d;
  }
`

export const Icon = styled.img`
  width: auto;
  height: 2rem;
  margin-right: 0.5rem;
`

export const Text = styled.div`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.375rem;
`
