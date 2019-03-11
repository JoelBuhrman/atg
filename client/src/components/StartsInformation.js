import React from 'react'
import styled from '@emotion/styled'

export default class StartsInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: []
    }
  }

  isExpanded = number => this.state.expanded.includes(number)

  getIndex = number => this.state.expanded.indexOf(number)

  toggleExpand = number =>
    !this.isExpanded(number)
      ? this.setState({ expanded: [...this.state.expanded, number] })
      : this.setState(
          this.state.expanded.splice(this.getIndex(number), 1).slice()
        )

  render() {
    const { starts } = this.props
    return (
      <ul>
        {starts.map(start => (
          <li onClick={() => this.toggleExpand(start.number)}>
            <div>{start.number}</div>
            <div>{start.horse.name}</div>
            <div>
              {start.driver.firstName}
              {start.driver.lastName}
            </div>
            {this.isExpanded(start.number) && (
              <div>
                {start.horse.trainer.firstName}
                {start.horse.trainer.lastName}
                {start.horse.pedigree.father.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    )
  }
}
