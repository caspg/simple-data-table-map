import React from 'react';
import DataTableRow from './DataTableRow';

export default class DataTable extends React.Component {
  renderTableRows(){
    return this.props.regionData.map((data, index) => {
      return (
        <DataTableRow 
          key={index} 
          regionName={data.regionName} 
          value={data.value} 
          onEditRow={this.props.onEditRow}
        />
      );
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

DataTable.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  onEditRow: React.PropTypes.func.isRequired
}
