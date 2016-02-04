import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.min.css';
import NumericInput from './NumericInput';

export default class SelectBox extends React.Component {
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.state = {
      selected: false,
      selectedValue: null,
      selectedOption: null,
      inputValue: null
    };
  }
  handleOnChange(value, option){
    const selected = value ? true : false;
    this.setState({
      selectedValue: value,
      selectedOption: option[0],
      selected: selected
    });
  }
  handleButtonClick(){
    this.props.onAddRow(
      this.state.selectedOption.regionName,
      this.state.selectedOption.code,
      this.state.inputValue
    );
    this.setState({
      selected: false,
      selectedValue: null,
      selectedOption: null,
      inputValue: null
    });
  }
  handleInputBlur(newValue){
    this.setState({ inputValue: newValue });
  }
  render() {
    return (
      <div className="row middle-xs">
        <div className="col-sm-6">
          <Select
            name="empty-regions"
            value={this.state.selectedValue}
            options={this.props.emptyRegions}
            labelKey="regionName"
            valueKey="code"
            onChange={this.handleOnChange}
          />
        </div>
        <div className="col-sm-4">
          <NumericInput
            className="form-control"
            value={this.state.inputValue}
            onBlur={this.handleInputBlur}
          />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-default add-button"
            disabled={!this.state.selected}
            onClick={this.handleButtonClick}>
            <span className="glyphicon glyphicon-plus"></span>
          </button>
        </div>
      </div>
    );
  }
}

SelectBox.propTypes = {
  emptyRegions: React.PropTypes.array.isRequired,
  onAddRow: React.PropTypes.func.isRequired
}
