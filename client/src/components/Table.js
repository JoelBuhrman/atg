import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import StartsInformation from './StartsInformation'
import { formatDate, formatName } from '../utils'

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  color: #004da1;
  font-weight: bold;
  border-top: 1px solid rgb(233, 233, 233);
  cursor: pointer;
  align-items: center;
`

const ListColumn = styled.div`
  flex: 1;
`
const Number = styled.div`
  background: red;
  border-radius: 50%;
  width: 23px;
  height: 23px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    rgb(255, 255, 255) 0%,
    rgb(219, 228, 239) 100%
  );
  align-items: center;
`
const StyledUL = styled.ul`
  padding-left: 0px;
  background: #fff;
  padding: 10px;
  font-size: 12px;
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
          <Fragment key={game.id}>
            <ListItem key={game.id} onClick={() => this.toggleExpand(game.id)}>
              <ListColumn>
                <Number>{game.number}</Number>
              </ListColumn>
              <ListColumn>{formatName(game.name)}</ListColumn>
              <ListColumn>{formatDate(game.startTime)}</ListColumn>
            </ListItem>
            {this.isExpanded(game.id) && (
              <StartsInformation starts={game.starts} />
            )}
          </Fragment>
        ))}
      </StyledUL>
    )
  }
}
