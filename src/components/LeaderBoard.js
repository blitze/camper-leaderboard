import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Camper from './Camper';

class LeaderBoard extends React.Component {
	constructor(props) {
		super();

		this.showAllTime = this.showAllTime.bind(this);
		this.showRecent = this.showRecent.bind(this);
	}

	componentDidMount() {
		this.props.actions.fetchCampers('recent');
	}

	showAllTime(e) {
		e.preventDefault();
		if (this.props.leaderBoard.show !== 'alltime') {
			this.props.actions.fetchCampers('alltime');
		}
	}

	showRecent(e) {
		e.preventDefault();
		if (this.props.leaderBoard.show !== 'recent') {
			this.props.actions.fetchCampers('recent');
		}
	}

	render() {
		return (
		<div className="container">
			<Paper zDepth={5}>
				<Table className="leaderboard">
					<TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
						<TableRow>
							<TableHeaderColumn colSpan="4" style={{textAlign: 'center'}}>
								<h1>Camper Leaderboard</h1>
							</TableHeaderColumn>
						</TableRow>
						<TableRow className="titles">
							<TableHeaderColumn className="column1">#</TableHeaderColumn>
							<TableHeaderColumn className="column2">Camper Name</TableHeaderColumn>
							<TableHeaderColumn className="column3">
								<a href="#" onClick={this.showRecent}>Points in Past 30 days</a>
								<span className="arrow">{(this.props.leaderBoard.show === 'recent') ? '↓' : ''}</span>
							</TableHeaderColumn>
							<TableHeaderColumn className="column4">
								<a href="#" onClick={this.showAllTime}>All time points</a>
								<span className="arrow">{(this.props.leaderBoard.show === 'alltime') ? '↓' : ''}</span>
							</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false} showRowHover stripedRows>
						{this.props.leaderBoard.campers.map((row, idx) => (
							<TableRow key={idx}>
								<TableRowColumn className="column1">{idx + 1}</TableRowColumn>
								<TableRowColumn className="column2">
									<Camper username={row.username} img={row.img} />
								</TableRowColumn>
								<TableRowColumn className="column3">{row.recent}</TableRowColumn>
								<TableRowColumn className="column4">{row.alltime}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
			<Dialog modal={true} open={this.props.leaderBoard.loading} contentStyle={{width: '200px'}}>
				<CircularProgress size={2} />
			</Dialog>
		</div>
		);
	}
}

LeaderBoard.propTypes = {
	actions: PropTypes.object.isRequired,
	leaderBoard: PropTypes.object.isRequired
};

export default LeaderBoard;