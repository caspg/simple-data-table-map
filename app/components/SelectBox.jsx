import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

export default class SelectBox extends React.Component {
  render() {
    return (
      <div className="select-container">
        <Select 
          name="empty-regions"
          value={null}
          options={this.props.emptyRegions}
          labelKey="regionName"
          valueKey="code"
        />
      </div>
    );
  }
}
