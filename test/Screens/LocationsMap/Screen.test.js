import React from 'react';
import renderer from 'react-test-renderer';
import { LocationsMap } from '../../../src/Screens/LocationsMap/Screen';

jest.mock('react-native-maps', () => '');

jest.mock('geolib', () => ({
    getDistance: () => 1,
}));

it('renders without crashing', () => {
    const rendered = renderer.create(<LocationsMap userLocation={{}} locations={[]} />).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders without crashing after click on map', () => {
    const rendered = renderer.create(<LocationsMap userLocation={{}} locations={[]} />);

    rendered.getInstance().onPressOnMap({});
    expect(rendered).toBeTruthy();
});

it('renders without crashing after click on marker', () => {
    const rendered = renderer.create(<LocationsMap userLocation={{}} locations={[]} />);

    rendered.getInstance().onPressOnMarker({});
    expect(rendered).toBeTruthy();
});
