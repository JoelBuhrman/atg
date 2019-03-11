import React from 'react'
import styled from '@emotion/styled'
import { Input, Table } from './components'
import { getGames } from './api'

const Container = styled.div`
  width: 100%;
`

const Logo = styled.img`
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
    this.setState({ games: await getGames(inputValue), type: inputValue })
  }

  render() {
    return (
      <Container>
        <Logo src='https://omatg.se/wp-content/uploads/2019/01/ATG_primary.png' />
        <Input fetchGames={this.fetchGames} />
        {this.state.games && (
          <Table
            gameInformation={this.state.games}
            gameType={this.state.type}
          />
        )}
      </Container>
    )
  }
}

export default App
