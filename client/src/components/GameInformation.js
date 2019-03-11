import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
`

const ListColumn = styled.div`
  flex: 1;
  color: #fff;
`

const StyledUL = styled.ul`
  padding-left: 0px;
`

const Heading = styled.h3`
  color: #fff;
`

const Header = () => (
  <Container>
    <Heading>Race number</Heading>
    <Heading>Race name</Heading>
    <Heading>Race start time</Heading>
  </Container>
)

const Table = ({ gameInformation }) => (
  <StyledUL>
    {gameInformation.map(game => (
      <ListItem key={game.id}>
        <ListColumn>{game.number}</ListColumn>
        <ListColumn>{game.name}</ListColumn>
        <ListColumn>{game.startTime}</ListColumn>
      </ListItem>
    ))}
  </StyledUL>
)

const GameInformation = ({ gameInformation }) => (
  <div>
    <Header />
    <Table gameInformation={gameInformation} />
  </div>
)

Table.propTypes = {
  gameInformation: PropTypes.object.isRequired
}

GameInformation.propTypes = {
  gameInformation: PropTypes.object.isRequired
}

export default GameInformation
