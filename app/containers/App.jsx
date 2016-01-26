import React from 'react';
import { connect } from 'react-redux'
import { editRow } from '../actions';

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleEditRow = this.handleEditRow.bind(this);
  }
  handleEditRow(regionName, newValue){
    this.props.dispatch(editRow(regionName, newValue));
  }
  render() {
    return (
      <div>
        <div className="container">
          <DataMap regionData={this.props.regionData} />
        </div>
        <div className="container">
          <DataTableBox 
            regionData={this.props.regionData}
            onEditRow={this.handleEditRow} 
          />
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