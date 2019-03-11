import React from 'react'
import PropTypes from 'prop-types'

const Header = () => (
  <div className='flex-box'>
    <h3>Race number</h3>
    <h3>Race name</h3>
    <h3>Race start time</h3>
  </div>
)

const Table = ({ gameInformation }) => (
  <ul>
    {gameInformation.map(game => (
      <li key={game}>{game}</li>
    ))}
  </ul>
)

const GameInformation = ({ gameInformation }) => (
  <div>
    <Header />
    <Table gameInformation={gameInformation} />
  </div>
)

Table.propTypes = {
  gameInformation: PropTypes.arrayOf(PropTypes.string).isRequired
}

GameInformation.propTypes = {
  gameInformation: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default GameInformation
