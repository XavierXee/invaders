import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render correctly', () => {
    const component = create(<Main />).toJSON();;
    expect(component).toMatchSnapshot();
});