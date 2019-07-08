import React from 'react';
import ReactDOM from 'react-dom';
import { RadarGrid } from './RadarGrid';
import { create } from "react-test-renderer";

const mockData = ['---', 'ooo'];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadarGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has proper properties', () => {
    const component = create(<RadarGrid data={mockData} />);
    const instance = component.getInstance();
    expect(instance.props.data).toEqual(['---', 'ooo']);
});

it('render correctly', () => {
    const component = create(<RadarGrid data={mockData} reports={[]}/>).toJSON();;
    expect(component).toMatchSnapshot();
});
