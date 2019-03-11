import React from 'react'
import styled from '@emotion/styled'
import StartsInformation from './StartsInformation'

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  font-size: 10px;
  padding: 5px 0px;
  background: #fff;
  color: #004da1;
  font-weight: bold;
  border-bottom: 1px solid #aaa;
  cursor: pointer;
`

const ListColumn = styled.div`
  flex: 1;
`

const StyledUL = styled.ul`
  padding-left: 0px;
`

export default class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: []
    }
  }

  isExpanded = id => this.state.expanded.includes(id)

  getIndex = id => this.state.expanded.indexOf(id)

  toggleExpand = id =>
    !this.isExpanded(id)
      ? this.setState({ expanded: [...this.state.expanded, id] })
      : this.setState(this.state.expanded.splice(this.getIndex(id), 1).slice())

  render() {
    const { gameInformation } = this.props
    return (
      <StyledUL>
        {gameInformation.map(game => (
          <div onClick={() => this.toggleExpand(game.id)}>
            <ListItem key={game.id}>
              <ListColumn>{game.number}</ListColumn>
              <ListColumn>{game.name}</ListColumn>
              <ListColumn>{game.startTime}</ListColumn>
            </ListItem>
            {this.isExpanded(game.id) && (
              <StartsInformation starts={game.starts} />
            )}
          </div>
        ))}
      </StyledUL>
    )
  }
}
