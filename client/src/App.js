import React from 'react'
import styled from '@emotion/styled'
import { Input, GameInformation } from './components'
import { getGames } from './api'

const Container = styled.div`
  width: 100%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null
    }
  }

  fetchGames = async () => {
    const inputValue = document.getElementById('input').value
    this.setState({ games: await getGames(inputValue) })
  }

  render() {
    return (
      <Container>
        <Input fetchGames={this.fetchGames} />
        <GameInformation gameInformation={this.state.games} />
      </Container>
    )
  }
}

export default App
