import styled from 'styled-components'

export const Item = styled.div``

export const ItemHeader = styled.header`
  position: relative;
  margin-bottom: 0.5rem;
`

export const ItemMain = styled.main``

export const Thumbnail = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-color: #eeeeee;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 61.5%;
`

export const Time = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #FFFFFF;
  background-color: #FFCC21;
  font-size: 0.938rem;
  font-family: 'Inter';
  line-height: 1.875rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const Title = styled.h6`
  color: #414141;
  font-size: 0.938rem;
  font-weight: 300;
  line-height: 1.375rem;
  letter-spacing: 0.08px;
  margin-top: 0;
  margin-bottom: 0;
`

export const HashTags = styled.div`
  color: #ff963c;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.375rem;
  letter-spacing: 0.06px;
`
