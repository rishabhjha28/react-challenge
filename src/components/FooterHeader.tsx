import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'

const FooterHeader:FC = () => {
  return (
    <Container>
      <Heart icon="redHeartIcon" alt="red heart icon" />
      <Title>Favorites</Title>
    </Container>
  )
}


const Container = styled.div({
  display: 'flex',
  margin:'40px 0px',
})

const Title = styled.h1({
  fontWeight: 'bold',
  marginLeft:'50px',
  fontSize: '24px',
  lineHeight: '33px',
})

export default FooterHeader
