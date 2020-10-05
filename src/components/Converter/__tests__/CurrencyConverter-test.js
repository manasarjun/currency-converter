import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyConverter from '../CurrencyConverter'
Enzyme.configure({ adapter: new Adapter() });

describe.only('<CurrencyConverter />', () => {

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
