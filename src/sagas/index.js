import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions/leaderBoardActions';

export function fetchData(query) {
	return fetch(`https://fcctop100.herokuapp.com/api/fccusers/top/${query}`)
		.then(response => response.json());
}

export function* fetchLeaderboard(action) {
	try {
		const campers = yield call(fetchData, action.show);
		yield put({
			type: "FETCH_CAMPERS_SUCCEEDED",
			campers,
		});
	} catch (e) {
		yield put({
			type: "FETCH_CAMPERS_FAILED",
			message: e.message
		});
	}
}

export default function* rootSaga() {
	yield * takeLatest("FETCH_CAMPERS_START", fetchLeaderboard);
}