export const SET_CURRENT_USER_LOCATION = 'app/SET_CURRENT_USER_LOCATION';

export default (latitude, longitude) => ({
    type: SET_CURRENT_USER_LOCATION,
    payload: { latitude, longitude },
});
