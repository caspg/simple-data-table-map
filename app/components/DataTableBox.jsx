import React from 'react';
import DataTable from './DataTable';
import SelectBox from './SelectBox';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <div className="row select-container">
          <div className="col-md-12">
            <SelectBox
              emptyRegions={this.props.emptyRegions}
              onAddRow={this.props.onAddRow}
            />
          </div>
        </div>
        <div className="row center">
          <div className="col-md-12">
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
  onEditRow: React.PropTypes.func.isRequired,
}
