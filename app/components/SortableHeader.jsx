import React from 'react';

export default class SortableHeader extends React.Component {
  renderSortArrow(){
    if (this.props.sortState.key !== this.props.sortKey) return;
    const glyphClass = this.props.sortState.direction === 'ASC' ?
      'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-up'

    return <span className={glyphClass} aria-hidden="true"></span>
  }
  handleOnClick(){
    const direction = this.props.sortState.direction;
    const key = this.props.sortKey;
    this.props.toggleDirection(key, direction);
  }
  render() {
    return (
      <th onClick={this.handleOnClick.bind(this)}>
        <h4>{this.props.label}</h4>
        {this.renderSortArrow()}
      </th>
    );
  }
}

SortableHeader.propTypes = {
  label: React.PropTypes.string.isRequired,
  sortState: React.PropTypes.object.isRequired,
  sortKey: React.PropTypes.string.isRequired,
  toggleDirection: React.PropTypes.func.isRequired
}
