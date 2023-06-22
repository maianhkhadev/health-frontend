import styled from 'styled-components'

export const Item = styled.div<{ src: string }>`
  position: relative;
  border: 1.5rem solid #ffcc21;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    mix-blend-mode: luminosity;
    opacity: 0.5;
    z-index: 2;
  }
`

export const ItemMain = styled.main`
  position: relative;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  z-index: 3;
`

export const Title = styled.h4`
  color: #ffcc21;
  font-size: 1.5rem;
  font-family: 'Inter';
  text-transform: uppercase;
  line-height: 1.875rem;
  letter-spacing: 0.125px;
  margin-top: 0;
  margin-bottom: 0.75rem;
`

export const Text = styled.div`
  display: inline-block;
  color: #ffffff;
  background-color: #ff963c;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
  letter-spacing: 0.06px;
  padding-left: 1rem;
  padding-right: 1rem;
`
