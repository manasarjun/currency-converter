import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';


import CurrencyConverter from '../Converter/CurrencyConverter';

import './CountryInfo.css'

function CountryInfo({ country }) {

  const currencies = country['currencies'];

  const currencyName = currencies.map(
    (currency, i) => (
      <span key={i}>
        <li>{currency.name}</li>
        <br />
      </span>
    ));


  const { name, capital, population } = country;
  return (
    <>
      <div className='container'>
        <Paper elevation={3}>
          <p>Country Name: <b>{name}</b></p>
          <p>Capital: {capital} </p>
          <p>Population: {population}</p>
          <span className='acceptedCurrency'>
            <p>Accepted Currency: </p>
            <ul>{currencyName} </ul></span>
        </Paper>
      </div>
      <CurrencyConverter country={country}></CurrencyConverter>
    </>
  )

}

CountryInfo.propTypes = {

}

export default CountryInfo

