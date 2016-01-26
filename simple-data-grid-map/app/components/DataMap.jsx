import d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.usa.min'
import React from 'react';
import ReactDOM from 'react-dom';

export default class DataMap extends React.Component {
  componentDidMount(){
    new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: 'usa'
    });
  }
  render() {
    return (
      <div id="container" style= {{ position: 'relative', width: '800px', height: '500px' }}></div>
    );
  }
}
