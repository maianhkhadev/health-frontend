import styled from 'styled-components'

export const Item = styled.div``

export const ItemMain = styled.main`
  position: relative;
`

export const Thumbnail = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-color: #eeeeee;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 100%;
`

export const Metadata = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #FFFFFF;
  background-color: #FFCC21;
  font-size: 0.938rem;
  font-family: 'Inter';
  line-height: 1.875rem;
  padding-left: 0.5rem;
  padding-right: 1.5rem;
`
