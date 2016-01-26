import React from 'react';
import DataTable from './DataTable';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <DataTable 
          regionData={this.props.regionData}
          onEditRow={this.props.onEditRow}
        />
      </div>
    );
  }
}

DataTable.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  onEditRow: React.PropTypes.func.isRequired
}
