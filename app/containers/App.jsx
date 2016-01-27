import React from 'react';
import { connect } from 'react-redux'
import { editRow, deleteRow, addRow } from '../actions';

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
  }
  handleDeleteRow(regionName, code){
    this.props.dispatch(deleteRow(regionName, code));
  }
  handleEditRow(regionName, newValue){
    this.props.dispatch(editRow(regionName, newValue));
  }
  handleAddRow(regionName, code, value){
    this.props.dispatch(addRow(regionName, code, value));
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
            emptyRegions={this.props.emptyRegions}
            onEditRow={this.handleEditRow}
            onDeleteRow={this.handleDeleteRow}
            onAddRow={this.handleAddRow}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  emptyRegions: React.PropTypes.array.isRequired
};

function alphabeticOrder(collection) {
  return collection.sort(function(a, b) {
    if (a.regionName > b.regionName) return 1;
    if (a.regionName < b.regionName) return -1;
    return 0;
  });
}

function mapStateToProps(state) {
  return {
    regionData: alphabeticOrder(state.regionData),
    emptyRegions: alphabeticOrder(state.emptyRegions)
  }
}

export default connect(mapStateToProps)(App);
