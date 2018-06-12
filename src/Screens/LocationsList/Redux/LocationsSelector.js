import { createSelector } from 'reselect';
import { calculateLocationsDistance } from '../../../Utils/Utils';

const getLocations = state => state.locations;
const getUserLocation = state => state.userLocation;

export default createSelector([getUserLocation, getLocations], (userLocation, locations) => {
    calculateLocationsDistance(locations, userLocation);
    return locations
        .map(location => ({ key: location.id, ...location }))
        .sort((a, b) => a.distance - b.distance);
});
