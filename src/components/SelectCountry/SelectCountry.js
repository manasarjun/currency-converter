import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import fetchData from '../../fetchData';
import CountryInfo from "../CountryInfo/CountryInfo";
import './SelectCountry.css';


class SelectCountry extends Component {

  state = {
    countries: [],
    countryInfo: null
  }

  componentDidMount() {
    fetchData()
      .then(res => res.json())
      .then((res) => this.setState(() => ({ countries: res })))
  }


  renderOption = (option, { inputValue }) => {
    const matches = match(option.name, inputValue);
    const parts = parse(option.name, matches);

    return (
      <div
        className='countryOptions'
        onClick={this.handleOnclick(option.name)}
      >
        {parts.map((part, index) => (
          <span
            key={index}
          >
            {part.text}
          </span>
        ))}
      </div>
    );
  };

  handleOnclick = (value) => () => {
    if (value) {
      const info = this.state.countries.filter((country) => country.name === value);
      this.setState({ countryInfo: info[0] })
    }
  }

  renderInput = (params) => {
    return (
      <div>
        <TextField
          {...params}
          label="Countries"
          variant="outlined"
          margin="normal"
        />
      </div>
    );
  };

  render() {
    const { countries, countryInfo } = this.state;
    return (
      <>
        <Autocomplete
          id="countries-list"
          className='autoComplete'
          disabled={countries.length === 0}
          options={countries}
          getOptionLabel={(option) => option.name}
          renderInput={this.renderInput}
          renderOption={this.renderOption}
        />
        { countryInfo && <CountryInfo country={countryInfo} />}
      </>
    )
  }
}

export default SelectCountry;