import React from 'react';
import renderer from 'react-test-renderer';
import LocationListRow from '../../../../src/Screens/LocationsList/Components/LocationListRow';

it('renders without crashing', () => {
    const rendered = renderer
        .create(<LocationListRow onRowPress={() => {}} locationData={{}} />)
        .toJSON();
    expect(rendered).toBeTruthy();
});
