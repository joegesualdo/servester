import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HelloWorldHeader from './../index.jsx';
import style from './../HelloWorldHeader.css';

test('root tag is a div', t => {
  const wrapper = shallow(<HelloWorldHeader />);
  t.is(wrapper.type(), 'div');
});

test('root class is applied', t => {
  const wrapper = shallow(<HelloWorldHeader />);
  t.true(wrapper.hasClass(style.root));
});
