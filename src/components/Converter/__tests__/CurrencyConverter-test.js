import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyConverter from '../CurrencyConverter'
Enzyme.configure({ adapter: new Adapter() });

describe.only('<CurrencyConverter />', () => {
  /****** API DATA sample 
  {
    "currencies": [
        {
            "code": "AFN",
            "name": "Afghan afghani",
            "symbol": "؋"
        }
    ],
    "languages": [
        {
            "iso639_1": "ps",
            "iso639_2": "pus",
            "name": "Pashto",
            "nativeName": "پښتو"
        }
    ],
    "flag": "https://restcountries.eu/data/afg.svg",
    "name": "Afghanistan",
    "capital": "Kabul",
    "population": 27657145
}
*******/
  const baseProps = {
    country: {
      currencies: [
        {
          code: "AFN",
          name: "Afghan afghani",
          symbol: "؋"
        }
      ]
    }
  }

  it('renders correctly', () => {
    const tree = renderer
      .create(<CurrencyConverter {...baseProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test initial states', () => {
    const wrapper = mount(<CurrencyConverter {...baseProps} />);
    expect(wrapper.state().total).toBeNull();
    expect(wrapper.state().forexList).toStrictEqual({});
  });
});
