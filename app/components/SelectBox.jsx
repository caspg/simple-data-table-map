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
    const inputValue = this.state.inputValue || 0;
    this.props.onAddRow(
      this.state.selectedOption.regionName,
      this.state.selectedOption.code,
      inputValue
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
      <div className="select-box-container">
          <div className="column">
            <Select
              name="empty-regions"
              value={this.state.selectedValue}
              options={this.props.emptyRegions}
              labelKey="regionName"
              valueKey="code"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="column numeric-input-column">
            <NumericInput
              value={this.state.inputValue}
              onBlur={this.handleInputBlur}
            />
          </div>
          <div className="column button-column">
            <button className="btn add-button"
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
