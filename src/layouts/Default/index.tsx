import React from 'react'
import ButtonBackTo from '../../components/Buttons/BackTo'
import HeaderContent from './HeaderContent'
import FooterContent from './FooterContent'
import { Section, Header, Main, Footer, Container } from './styles'

type IParams = {
  extraSection?: React.ReactNode,
  children: React.ReactNode
}

const Default: React.FC<IParams> = ({ extraSection, children }) => (
  <Section>
    <Header>
      <Container>
        <HeaderContent />
      </Container>
    </Header>

    {extraSection}

    <Main>
      <Container>{children}</Container>
    </Main>

    <Footer>
      <Container>
        <FooterContent />
      </Container>
    </Footer>

    <ButtonBackTo />
  </Section>
)

export default Default
