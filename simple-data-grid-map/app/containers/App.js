import React from 'react';
import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <DataMap />
        </div>
        <div className="container">
          <DataTableBox />
        </div>
      </div>
    );
  }
}
