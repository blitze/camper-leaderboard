import {FETCH_CAMPERS_START, FETCH_CAMPERS_SUCCEEDED, FETCH_CAMPERS_FAILED} from '../constants/actionTypes';
import initialState from './initialState';

export default function leaderBoardReducer(state = initialState.leaderBoard, action) {

	switch (action.type) {
		case FETCH_CAMPERS_START:
			return {
				...state,
				loading: true,
				show: action.show,
			};
		case FETCH_CAMPERS_SUCCEEDED:
			return {
				...state,
				loading: false,
				campers: action.campers,
			};
		case FETCH_CAMPERS_FAILED:
			return {
				...state,
				loading: false,
				message: action.message,
			};
		default:
			return state;
	}
}