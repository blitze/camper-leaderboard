import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';

const Camper = ({username, img}) => (
	<div className="camper">
		<Avatar className="avatar" src={img} />
		<a href={"//www.freecodecamp.com/" + username} target="_blank">{username}</a>
	</div>
);

Camper.propTypes = {
	username: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired
};

export default Camper;