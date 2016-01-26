import React from 'react';
import DataTableInput from './DataTableInput';

export default class DataTableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.regionName}
        </td>
        <td>
          <DataTableInput value={this.props.value} />
        </td>
      </tr>
    );
  }
}
