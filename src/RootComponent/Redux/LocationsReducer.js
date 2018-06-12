import { GET_LOCATIONS_SUCCESS } from './Actions/ListLocations';
import { UPDATE_LOCATION } from '../../Screens/LocationDetails/Redux/Actions/LocationActions';

const initialState = [];

export default function locationsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATIONS_SUCCESS:
            return [...state, ...action.payload.locations];
        case UPDATE_LOCATION:
            return state.map(
                location => (location.id === action.payload.id ? { ...action.payload } : location),
            );
        default:
            return state;
    }
}
