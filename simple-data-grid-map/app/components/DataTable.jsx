import React from 'react';
import DataTableRow from './DataTableRow';

export default class DataTable extends React.Component {
  renderTableRows(){
    return this.props.regionData.map(function(data, index) {
      return <DataTableRow key={index} regionName={data.regionName} value={data.value} />
    });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>State Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
}
