import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

let wrapper;

const defaultProps = {};

const getWrapper = (newProps) => {
  const props = { ...defaultProps, ...newProps };
  return shallow(<App {...props} />);
};

describe('<App />', () => {
  beforeEach(() => {
    wrapper = getWrapper();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
