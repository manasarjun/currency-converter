import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import fetchData from '../../fetchData';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {

  constructor(props) {
    super(props);
    this.refAmount = React.createRef();
    this.forexRef = React.createRef();
  }

  state = {
    forexList: {},
    total: null
  }

  componentDidMount() {
    fetchData('currency')
      .then(res => res.json())
      .then((res) => this.setState(() => ({ forexList: res })))
  }

  componentDidUpdate(prevProps) {
    const { country: { name } } = this.props;
    if (prevProps.country.name !== name) {
      this.setState(() => ({ total: null }))
    }
  }

  handleConversion = (e) => {
    const { forexList: { rates } } = this.state;

    for (const currencyName in rates) {
      if (this.forexRef.current.value === currencyName) {
        const times = rates[currencyName] * this.refAmount.current.value;
        this.setState(() => ({ total: times }))
        return;
      }
      this.setState(() => ({ total: null }))
    }
  }

  renderAcceptedCurrency = () => {
    return this.props.country.currencies.map(
      (currency, i) => (
        <option
          key={i}
          vlaue={currency.code}
        >
          {currency.code}
        </option>
      ));
  };


  render() {
    const showAcceptedCurrency = (
      <select
        ref={this.forexRef}
      >
        {this.renderAcceptedCurrency()}
      </select>
    )

    return (
      <div className="converterContainer">
        <Paper elevation={3} >
          <h4>Convert SEK to local currency</h4>
          <div className="converterItems">
            {showAcceptedCurrency}
            <input type="number" ref={this.refAmount} defaultValue={1} />
            <Button variant="outlined" color="primary" onClick={this.handleConversion}>CONVERT</Button>
          </div>
          {this.state.total && <h4>Converted amount {this.state.total}</h4>}
        </Paper>
      </div>
    )
  }
}

CurrencyConverter.propTypes = {

}

export default CurrencyConverter

