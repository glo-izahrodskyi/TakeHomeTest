import React from 'react';
import renderer from 'react-test-renderer';
import HeaderButton from '../../../../src/Screens/LocationDetails/Components/HeaderButton';

it('renders without crashing', () => {
    const rendered = renderer
        .create(<HeaderButton title="test" onPressCallback={() => {}} iconSource="" />)
        .toJSON();
    expect(rendered).toBeTruthy();
});
