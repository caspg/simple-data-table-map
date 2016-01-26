import React from 'react';
import DataTable from './DataTable';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <DataTable regionData={this.props.regionData} />
      </div>
    );
  }
}
