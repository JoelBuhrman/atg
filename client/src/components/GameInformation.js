import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Table from './Table'

const Container = styled.div`
  padding: 10px;
  background: #f5f5f2;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Heading = styled.h3`
  color: #004da1;
`

const Header = () => (
  <HeaderContainer>
    <Heading>Race number</Heading>
    <Heading>Race name</Heading>
    <Heading>Race start time</Heading>
  </HeaderContainer>
)

const GameInformation = ({ gameInformation }) => (
  <Container>
    <Header />
    <Table gameInformation={gameInformation} />
  </Container>
)

GameInformation.propTypes = {
  gameInformation: PropTypes.object.isRequired
}

export default GameInformation
