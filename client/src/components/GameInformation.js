import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Table from './Table'

const Container = styled.div`
  padding: 10px 16px;
  background: #f5f5f2;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
`

const Heading = styled.h3`
  color: #004da1;
  flex: 1;
  margin: 0px;
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
    {gameInformation && <Table gameInformation={gameInformation} />}
  </Container>
)

GameInformation.propTypes = {
  gameInformation: PropTypes.arrayOf(PropTypes.object)
}

export default GameInformation
