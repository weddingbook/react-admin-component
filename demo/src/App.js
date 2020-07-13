import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from 'react-eva-icons';
import {
	Button,
	Tag,
	createPopup
} from '../../dist/index';


function App() {
	return (
		<div className="App">
      		<Tag color="green">HI</Tag>
			<Button onClick={() => createPopup({popupType: 'toast',  message: 'hi'})}>Hello</Button>
			<Icon name="github" size="32" animation={{type: 'zoom'}}/>
    	</div>
	);
}

export default App;