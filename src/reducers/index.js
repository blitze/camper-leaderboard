import {combineReducers} from 'redux';
import leaderBoard from './leaderBoardReducer';

const rootReducer = combineReducers({
	leaderBoard,
});

export default rootReducer;