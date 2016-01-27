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
          onDeleteRow={() => this.props.onDeleteRow(data.regionName, data.code)}
        />
      );
    });
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th><h4>State Name</h4></th>
            <th><h4>Value</h4></th>
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
  onEditRow: React.PropTypes.func.isRequired,
  onDeleteRow: React.PropTypes.func.isRequired
}
