import * as types from '../constants/actionTypes';

export function fetchCampers(show) {
    return {
        type: types.FETCH_CAMPERS_START,
        show
    };
}