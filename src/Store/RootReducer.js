import { combineReducers } from 'redux';
import locations from '../RootComponent/Redux/LocationsReducer';
import userLocation from '../RootComponent/Redux/UserLocationReducer';

export default combineReducers({
    locations,
    userLocation,
});
