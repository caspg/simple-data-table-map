import React from 'react';
import DataTableInput from './DataTableInput';

export default class DataTableRow extends React.Component {
  handleEditRow(newValue){
    this.props.onEditRow(this.props.regionName, newValue);
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          <DataTableInput 
            value={this.props.value}
            onEditRow={this.handleEditRow.bind(this)} 
          />
        </td>
      </tr>
    );
  }
}

DataTableRow.propTypes = {
  value: React.PropTypes.number.isRequired,
  regionName: React.PropTypes.string.isRequired
}