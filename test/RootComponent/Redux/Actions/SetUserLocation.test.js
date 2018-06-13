import setUserLocation, {
    SET_CURRENT_USER_LOCATION,
} from '../../../../src/RootComponent/Redux/Actions/SetUserLocation';

it('should return SET_CURRENT_USER_LOCATION action', () => {
    const latitude = 4;
    const longitude = 12;
    const action = setUserLocation(latitude, longitude);
    expect(action).toEqual({ type: SET_CURRENT_USER_LOCATION, payload: { latitude, longitude } });
});
