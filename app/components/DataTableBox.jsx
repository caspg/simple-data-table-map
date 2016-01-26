import React from 'react';
import DataTable from './DataTable';
import SelectBox from './SelectBox';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <div className="row select-container">
          <SelectBox emptyRegions={this.props.emptyRegions} />
        </div>
        <div className="row">
          <div className="col-md-10 col-md-offset-2">
            <DataTable 
              regionData={this.props.regionData}
              onEditRow={this.props.onEditRow}
              onDeleteRow={this.props.onDeleteRow}
            />
          </div>
        </div>
      </div>
    );
  }
}

DataTable.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  onEditRow: React.PropTypes.func.isRequired
}
