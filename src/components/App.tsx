import React, { FC, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Search from './Search'
import MidPart from './MidPart'
import Footer from './Footer'
import FooterHeader from './FooterHeader'

const App: FC = () => {
  
  return (
    <Container>
      <Header />
      <Search />
      <MidPart/>
      <FooterHeader/>
      <Footer/>
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App
