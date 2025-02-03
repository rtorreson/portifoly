import React from "react"
import styled from "@emotion/styled"


import Layout from "../components/layout"
import { Container, theme, media } from '../styles'

const Head = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue };
  padding-left: 1rem;
  padding-right: 1rem;

  ${media.largeUp} {
    padding-left: 100px;
    padding-right: 100px;
  }

  a {
    color: ${theme.colors.yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;
const NotFoundPage = () => (
  <Layout>
    <Head>
      <Container>
        <h1>Página não encontrada!</h1>
        {/* <h3>Esta página não existe, por favor</h3> */}
        <h3><a href="/">Voltar ao início ›</a></h3>
      </Container>
    </Head>
  </Layout>
)

export default NotFoundPage
