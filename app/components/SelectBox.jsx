import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';

export default class SelectBox extends React.Component {
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      selected: false,
      selectedValue: null,
      selectedOption: null
    };
  }
  handleOnChange(value, option){
    console.log(option);
    const selected = value ? true : false;
    this.setState({
      selectedValue: value,
      selectedOption: option[0],
      selected: selected
    });
  }
  handleButtonClick(){
    console.log(this.state.selectedOption.regionName);
  }
  render() {
    return (
      <div>
        <div className="col-md-4 col-md-offset-2">
          <Select
            name="empty-regions"
            value={this.state.selectedValue}
            options={this.props.emptyRegions}
            labelKey="regionName"
            valueKey="code"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-default" disabled={!this.state.selected} onClick={this.handleButtonClick}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

SelectBox.propTypes = {
  emptyRegions: React.PropTypes.array.isRequired
}
