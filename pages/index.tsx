import React from 'react'
import { Layout } from '../components';
import styled from 'styled-components';

const Headline = styled.h1`
  font-size: 40px;
`; 

const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <Headline>
        Hello Next.js 👋
      </Headline>
    </Layout>
  )
}
export default Index;
