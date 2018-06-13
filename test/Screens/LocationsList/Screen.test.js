import React from 'react';
import renderer from 'react-test-renderer';
import { LocationsList } from '../../../src/Screens/LocationsList/Screen';

it('renders without crashing', () => {
    const rendered = renderer.create(<LocationsList />).toJSON();
    expect(rendered).toBeTruthy();
});
