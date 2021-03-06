import React from 'react'
import styled from '@emotion/styled'
import { Input, GamesInformation } from './components'
import { getGames } from './api'

const Container = styled.div`
  width: 100%;
`

const Logo = styled.img`
  width: 100%;
`

const Error = styled.div`
  color: white;
  text-align: center;
  margin-top: 20px;
`

const Loader = styled.img`
  width: 50px;
  margin-left: calc(50% - 25px);
  margin-top: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null
    }
  }

  fetchGames = async e => {
    this.setState({ loading: true, games: null, error: null })
    e.preventDefault()
    const inputValue = document.getElementById('input').value
    try {
      const value = await getGames(inputValue)
      this.setState({
        games: value,
        type: inputValue,
        error: null,
        loading: false
      })
    } catch (Error) {
      this.setState({ error: 'error', games: null, type: null, loading: false })
      setTimeout(() => this.setState({ error: null }), 4000)
    }
  }

  render() {
    return (
      <Container>
        <Logo src='https://omatg.se/wp-content/uploads/2019/01/ATG_primary.png' />
        <Input fetchGames={this.fetchGames} />
        {this.state.games && (
          <GamesInformation
            gameInformation={this.state.games}
            gameType={this.state.type}
          />
        )}
        {this.state.error && (
          <Error>Please search for one of V75, V65, V64, V4</Error>
        )}
        {this.state.loading && (
          <Loader src='https://cwsmgmt.corsair.com/_ui/responsive/common/img/pdp/zoom_loader.gif' />
        )}
      </Container>
    )
  }
}

export default App
