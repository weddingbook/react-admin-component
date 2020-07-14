import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from 'react-eva-icons';
import {
	Button,
	Tag,
	useToast
} from '../../dist/index';


function App() {
	let c = 0;
	const {createToast, toasts} = useToast(); 

	return (
		<div className="App">
      		<Tag color="green">HI</Tag>
			<Button onClick={() => {
				createToast({message: `${c} abc`});
				c++;
			}}>Hello</Button>
			<Icon name="github" size="32" animation={{type: 'zoom'}}/>
			{/* <ToastContainer toasts={toasts} /> */}
    	</div>
	);
}

export default App;