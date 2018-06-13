import React from 'react';
import renderer from 'react-test-renderer';
import { RootComponent } from '../../src/RootComponent/Component';

// mock navigator
global.navigator = {
    geolocation: {
        getCurrentPosition: () => {},
    },
};

jest.mock('../../src/Components/TabsRouter', () => '');

it('renders without crashing', () => {
    const rendered = renderer
        .create(
            <RootComponent
                listLocations={() => {}}
                locations={[]}
                setCurrentUserLocation={() => {}}
            />,
        )
        .toJSON();
    expect(rendered).toBeTruthy();
});
