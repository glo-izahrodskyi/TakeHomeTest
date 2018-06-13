import {
    UPDATE_LOCATION,
    ADD_LOCATION,
} from '../../../src/Screens/LocationDetails/Redux/Actions/LocationActions';
import { GET_LOCATIONS_SUCCESS } from '../../../src/RootComponent/Redux/Actions/ListLocations';
import reducer from '../../../src/RootComponent/Redux/LocationsReducer';

/*
export const UPDATE_LOCATION = 'app/UPDATE_LOCATION';
export const ADD_LOCATION = 'app/ADD_LOCATION';

export const updateLocation = location => ({ type: UPDATE_LOCATION, payload: location });

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });

*/
it('unknown action', () => {
    const initState = [];
    const state = reducer(initState, { type: 'unknown' });
    expect(state).toEqual(initState);
});

it('default state', () => {
    const initState = undefined;
    const state = reducer(initState, { type: 'unknown' });
    const resultState = [];
    expect(state).toEqual(resultState);
});

it('GET_LOCATIONS_SUCCESS', () => {
    const location = { name: 'test name' };
    const initState = undefined;
    const state = reducer(initState, {
        type: GET_LOCATIONS_SUCCESS,
        payload: { locations: [{ ...location }] },
    });
    const resultState = [{ ...location }];
    expect(state).toEqual(resultState);
});

it('ADD_LOCATION', () => {
    const location = { name: 'test name' };
    const initState = [{ name: 'old' }];
    const state = reducer(initState, {
        type: ADD_LOCATION,
        payload: { ...location },
    });
    const resultState = [{ name: 'old' }, { ...location }];
    expect(state).toEqual(resultState);
});

it('UPDATE_LOCATION', () => {
    const location = { id: 3, name: 'test name' };
    const initState = [{ id: 3, name: 'old' }, { id: 4, name: 'old' }];
    const state = reducer(initState, {
        type: UPDATE_LOCATION,
        payload: { ...location },
    });
    const resultState = [{ ...location }, { id: 4, name: 'old' }];
    expect(state).toEqual(resultState);
});
