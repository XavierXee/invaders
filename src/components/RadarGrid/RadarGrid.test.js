import React from 'react';
import ReactDOM from 'react-dom';
import { RadarGrid } from './RadarGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadarGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});
