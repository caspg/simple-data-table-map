import React from 'react';
import NumericInput from './NumericInput';

export default class DataTableRow extends React.Component {
  handleInputBlur(newValue){
    this.props.onEditRow(this.props.regionName, newValue);
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          <NumericInput
            value={this.props.value}
            onBlur={this.handleInputBlur.bind(this)}
          />
        </td>
        <td>
          <span
            className="glyphicon glyphicon-remove remove-btn"
            onClick={this.props.onDeleteRow}
          />
        </td>
      </tr>
    );
  }
}

DataTableRow.propTypes = {
  value: React.PropTypes.number.isRequired,
  regionName: React.PropTypes.string.isRequired,
  onDeleteRow: React.PropTypes.func.isRequired
}
