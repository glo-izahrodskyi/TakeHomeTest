import { SET_CURRENT_USER_LOCATION } from './Actions/SetUserLocation';

const initialState = { latitude: 0, longitude: 0 };

export default function userLocationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_USER_LOCATION:
            return { latitude: action.payload.latitude, longitude: action.payload.longitude };
        default:
            return state;
    }
}
