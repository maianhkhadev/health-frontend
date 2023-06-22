import React from 'react'
import FormSignin from '../../components/Forms/Signin'
import { Section, Header, Main, Container } from './styles'
import src from '../../assets/images/logo.svg'

const Signin: React.FC = () => (
  <Section>
    <Container>
      <Header>
        <img src={src} height="64" alt="healthy" />
      </Header>

      <Main>
        <FormSignin />
      </Main>
    </Container>
  </Section>
)

export default Signin
