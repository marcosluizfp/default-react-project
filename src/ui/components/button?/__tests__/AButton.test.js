/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import AButton from '../AButton';

describe('<AButton />', () => {
  it('expect to match snapshot', () => {
    expect(shallow(<AButton />)).toMatchSnapshot();
  });
});
