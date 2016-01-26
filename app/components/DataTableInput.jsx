import React from 'react';

export default class DataTableInput extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: this.props.value };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  handleOnChange(event){
    const newValue = event.target.value;
    if (newValue === this.state.value) return;
    if (!/^[+-]?\d*(\.\d*)?$/.test(newValue)) return;
    this.setState({value: newValue});
  }
  handleOnBlur(event){
    const newValue = parseFloat(event.target.value) || 0;
    if (this.props.value === newValue) return;
    this.setState({ value: newValue });
    this.props.onEditRow(newValue);
  }
  render() {
    return (
      <input 
        type="text"
        value={this.state.value}
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
      />
    );
  }
}

DataTableInput.propTypes = {
  value: React.PropTypes.number.isRequired,
  onEditRow: React.PropTypes.func.isRequired
}
