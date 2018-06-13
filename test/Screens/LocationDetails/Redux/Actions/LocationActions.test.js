import {
    updateLocation,
    addLocation,
    ADD_LOCATION,
    UPDATE_LOCATION,
} from '../../../../../src/Screens/LocationDetails/Redux/Actions/LocationActions';

it('should return ADD_LOCATION action', () => {
    const location = { name: 'test' };
    const action = addLocation(location);
    expect(action).toEqual({ type: ADD_LOCATION, payload: { ...location } });
});

it('should return UPDATE_LOCATION action', () => {
    const location = { name: 'test' };
    const action = updateLocation(location);
    expect(action).toEqual({ type: UPDATE_LOCATION, payload: { ...location } });
});
