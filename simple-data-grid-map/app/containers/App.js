import React from 'react';
import DataMap from '../components/DataMap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <DataMap />
        </div>
      </div>
    );
  }
}
