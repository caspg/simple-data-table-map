import React from 'react';
import DataTable from './DataTable';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-10 col-md-offset-2">
          <DataTable 
            regionData={this.props.regionData}
            onEditRow={this.props.onEditRow}
            onDeleteRow={this.props.onDeleteRow}
          />
        </div>
      </div>
    );
  }
}

DataTable.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  onEditRow: React.PropTypes.func.isRequired
}
