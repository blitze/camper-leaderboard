import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/leaderBoardActions';
import LeaderBoard from '../components/LeaderBoard';

export const CamperLeaderBoard = () => (
	<LeaderBoard />
);

function mapStateToProps(state) {
	return {
		leaderBoard: state.leaderBoard
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LeaderBoard);