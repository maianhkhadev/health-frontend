import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-image: url(/images/d01.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 1rem;
  padding-bottom: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.25;
  }
`

export const Content = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 1.875rem;
  font-family: 'Inter';
  text-align: center;
`
