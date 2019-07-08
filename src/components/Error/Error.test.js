import React from 'react';
import ReactDOM from 'react-dom';
import { Error } from './Error';
import { create } from "react-test-renderer";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has proper properties', () => {
    const component = create(<Error error="test-error" />);
    const instance = component.getInstance();
    expect(instance.props.error).toBe("test-error");
});

it('render correctly', () => {
    const component = create(<Error error="test-error"/>).toJSON();
    expect(component).toMatchSnapshot();
});