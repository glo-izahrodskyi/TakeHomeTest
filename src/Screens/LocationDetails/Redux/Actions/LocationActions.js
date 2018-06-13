export const UPDATE_LOCATION = 'app/UPDATE_LOCATION';
export const ADD_LOCATION = 'app/ADD_LOCATION';

export const updateLocation = location => ({ type: UPDATE_LOCATION, payload: location });

export const addLocation = location => ({ type: ADD_LOCATION, payload: location });
