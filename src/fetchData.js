function fetchData(param) {

  return fetch(`https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;population;languages;flag`)
}

export default fetchData;