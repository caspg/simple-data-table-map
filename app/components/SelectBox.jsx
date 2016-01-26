import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

export default class SelectBox extends React.Component {
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selected: false,
      selectValue: null
    };
  }
  handleOnChange(value){
    const selected = value ? true : false;
    this.setState({ 
      selectValue: value,
      selected: selected 
    });
  }
  render() {
    return (
      <div>
        <div className="col-md-4 col-md-offset-2">
          <Select 
            name="empty-regions"
            value={this.state.selectValue}
            options={this.props.emptyRegions}
            labelKey="regionName"
            valueKey="code"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-default" disabled={!this.state.selected}>Add</button>
        </div>
      </div>
    );
  }
}

SelectBox.propTypes = {
  emptyRegions: React.PropTypes.array.isRequired
}
