import React from 'react';
import { connect } from 'react-redux'
import { editRow, deleteRow, addRow, toggleDirection } from '../actions';

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleEditRow = this.handleEditRow.bind(this);
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleToggleDirection = this.handleToggleDirection.bind(this);
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
  handleToggleDirection(sortKey, currentDirection){
    this.props.dispatch(toggleDirection(sortKey, currentDirection));
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
            sortState={this.props.sortState}
            onEditRow={this.handleEditRow}
            onDeleteRow={this.handleDeleteRow}
            onAddRow={this.handleAddRow}
            toggleDirection={this.handleToggleDirection}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  emptyRegions: React.PropTypes.array.isRequired,
  sortState: React.PropTypes.object.isRequired
};

function sortCollection(collection, sortState) {
  switch (sortState.direction) {
    case 'ASC':
      return collection.sort(function(a, b) {
        if (a[sortState.key] > b[sortState.key]) return 1;
        if (a[sortState.key] < b[sortState.key]) return -1;
        return 0;
      });

    case 'DESC':
      return collection.sort(function(a, b) {
        if (a[sortState.key] > b[sortState.key]) return -1;
        if (a[sortState.key] < b[sortState.key]) return 1;
        return 0;
      });

    default:
      return collection;
  }
}

function mapStateToProps(state) {
  return {
    regionData: sortCollection(state.regionData, state.sortState),
    emptyRegions: sortCollection(state.emptyRegions, state.sortState),
    sortState: state.sortState
  }
}

export default connect(mapStateToProps)(App);
