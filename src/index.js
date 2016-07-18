/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import CamperLeaderBoard from './containers/CamperLeaderBoard';  // eslint-disable-line import/no-named-as-default
import './styles/styles.scss';

const store = configureStore();

render(
	<Provider store={store}>
		<MuiThemeProvider>
			<CamperLeaderBoard />
		</MuiThemeProvider>
	</Provider>,
    document.getElementById('app')
);