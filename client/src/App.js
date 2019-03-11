import React from 'react'
import styled from '@emotion/styled'
import Input from './components'
import { getGames } from './api'

const Container = styled.div`
  width: 100%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  fetchGames = async gameType => this.setState({ games: await getGames('V75') })

  render() {
    return (
      <Container>
        <Input fetchGames={this.fetchGames} />
      </Container>
    )
  }
}

export default App
