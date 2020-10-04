import React from 'react'
import PropTypes from 'prop-types'
import CurrencyConverter from '../Converter/CurrencyConverter';

import './CountryInfo.css'

function CountryInfo({ country }) {

  const currencies = country['currencies'];

  const currencyName = currencies.map(
    (currency, i) => (
      <span className='acceptedCurrency' key={i}>
        <ul>
          <li>{currency.name}</li>
          <br />
        </ul>
      </span>
    ));


  const { name, capital, population } = country;
  return (
    <>
      <div className='container'>
        <p>Country Name: {name} </p>
        <p>Capital: {capital} </p>
        <p>Population: {population}</p>
        <p>Accepted Currency: </p>{currencyName}
      </div>
      <CurrencyConverter country={country}></CurrencyConverter>

    </>
  )

}

CountryInfo.propTypes = {

}

export default CountryInfo

