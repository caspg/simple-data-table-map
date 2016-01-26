import React from 'react';
import { connect } from 'react-redux'

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <DataMap regionData={this.props.regionData} />
        </div>
        <div className="container">
          <DataTableBox regionData={this.props.regionData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    regionData: state.regionData
  }
}

export default connect(mapStateToProps)(App);