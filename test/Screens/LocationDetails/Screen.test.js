import React from 'react';
import renderer from 'react-test-renderer';
import { LocationDetails } from '../../../src/Screens/LocationDetails/Screen';

it('renders without crashing', () => {
    const mockNavigation = {
        state: { params: { location: {} } },
        setParams: () => {},
    };
    const rendered = renderer.create(<LocationDetails navigation={mockNavigation} />).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders without crashing in edit mode', () => {
    const mockNavigation = {
        state: {
            params: { editMode: true, isNew: false, location: { name: 'name', description: '' } },
        },
        setParams: () => {},
    };
    const rendered = renderer.create(<LocationDetails navigation={mockNavigation} />).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders without crashing in new mode', () => {
    const mockNavigation = {
        state: {
            params: { editMode: true, isNew: true, location: { name: 'name', description: '' } },
        },
        setParams: () => {},
    };
    const rendered = renderer.create(<LocationDetails navigation={mockNavigation} />).toJSON();
    expect(rendered).toBeTruthy();
});
