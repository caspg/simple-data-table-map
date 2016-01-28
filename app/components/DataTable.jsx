import React from 'react';
import DataTableRow from './DataTableRow';
import SortableHeader from './SortableHeader';

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
            <SortableHeader
              label="STATE NAME"
              sortState={this.props.sortState}
              sortKey="regionName"
              toggleDirection={this.props.toggleDirection}
            />
            <SortableHeader
              label="VALUE"
              sortState={this.props.sortState}
              sortKey="value"
              toggleDirection={this.props.toggleDirection}
            />
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
  onDeleteRow: React.PropTypes.func.isRequired,
  toggleDirection: React.PropTypes.func.isRequired
}
