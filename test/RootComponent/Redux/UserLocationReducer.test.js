import { SET_CURRENT_USER_LOCATION } from '../../../src/RootComponent/Redux/Actions/SetUserLocation';
import reducer from '../../../src/RootComponent/Redux/UserLocationReducer';

it('unknown action', () => {
    const initState = { latitude: 0, longitude: 0 };
    const state = reducer(initState, { type: 'unknown' });
    expect(state).toEqual(initState);
});

it('default state', () => {
    const initState = undefined;
    const state = reducer(initState, { type: 'unknown' });
    const resultState = { latitude: 0, longitude: 0 };
    expect(state).toEqual(resultState);
});

it('change state', () => {
    const initState = undefined;
    const state = reducer(initState, {
        type: SET_CURRENT_USER_LOCATION,
        payload: { latitude: 4, longitude: 5 },
    });
    const resultState = { latitude: 4, longitude: 5 };
    expect(state).toEqual(resultState);
});
