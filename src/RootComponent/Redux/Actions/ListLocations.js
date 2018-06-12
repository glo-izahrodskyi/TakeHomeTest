import { randomId } from '../../../Utils/Utils';

export const GET_LOCATIONS_SUCCESS = 'app/GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAIL = 'app/GET_LOCATIONS_FAIL';

export default () => async dispatch => {
    try {
        const url = `https://s3-ap-southeast-2.amazonaws.com/com-cochlear-sabretooth-takehometest/locations.json`;
        const response = await fetch(url);
        const responseBody = await response.json();
        if (responseBody.locations) {
            responseBody.locations.forEach(location => {
                if (!location.description) {
                    location.description = '';
                }
                if (!location.id) {
                    location.id = randomId();
                }
            });
        }
        dispatch({ type: GET_LOCATIONS_SUCCESS, payload: responseBody });
    } catch (error) {
        dispatch({ type: GET_LOCATIONS_FAIL, payload: error });
    }
};
