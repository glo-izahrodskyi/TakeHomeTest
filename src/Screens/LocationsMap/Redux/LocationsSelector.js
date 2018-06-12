import { createSelector } from 'reselect';

const getLocations = state => state.locations;

export default createSelector(getLocations, locations => locations);
