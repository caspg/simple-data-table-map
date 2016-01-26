import React from 'react';
import DataTable from './DataTable';

import statesData from '../data/states-data';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <DataTable regionData={statesData} />
      </div>
    );
  }
}
