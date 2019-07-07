import React from 'react';
import ReactDOM from 'react-dom';
import Radar from './Radar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Radar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
