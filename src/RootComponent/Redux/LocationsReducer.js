import { GET_LOCATIONS_SUCCESS } from './Actions/ListLocations';

const initialState = [];

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATIONS_SUCCESS:
            return [...state, ...action.payload.locations];
        default:
            return state;
    }
}
