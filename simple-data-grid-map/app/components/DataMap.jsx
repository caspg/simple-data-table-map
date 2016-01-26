import d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.usa.min'
import React from 'react';
import ReactDOM from 'react-dom';

export default class DataMap extends React.Component {
  linearPalleteScale(value){
    const dataValues = this.props.regionData.map(function(data) { return data.value });
    const minVal = Math.min(...dataValues);
    const maxVal = Math.max(...dataValues);
    return d3.scale.linear().domain([minVal, maxVal]).range(["#EFEFFF","#02386F"])(value);
  }
  redducedData(){
    return this.props.regionData.reduce((object, data) => {
      object[data.code] = { value: data.value, fillColor: this.linearPalleteScale(data.value) };
      return object;
    }, {});
  }
  componentDidMount(){
    new Datamap({
      element: ReactDOM.findDOMNode(this),
      scope: 'usa',
      data: this.redducedData(),
      geographyConfig: {
        popupTemplate: function(geography, data) {
          if (data && data.value) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + ', ' + data.value + '</strong></div>';
          } else {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
          }
        }
      }
    });
  }
  render() {
    return (
      <div id="datamap-container"></div>
    );
  }
}
