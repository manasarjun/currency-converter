const BASE_CURRENCY = 'SEK';
const BASE_COUNTRY = 'SE';

function fetchData(param) {

  if (param === 'currency') {
    return fetch(`https://api.exchangeratesapi.io/latest?base=${BASE_CURRENCY}`);
  }

  return fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population;languages;flag`)
}

export default fetchData;