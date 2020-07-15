import React from 'react';
import logo from './logo.svg';
import './App.css';

import Icon from 'react-eva-icons';
import {
	Button,
	Tag,
	useToast,
	ToastContainer
} from '../../dist/index';



function App() {
	const {createToast, toasts, removeToast} = useToast(); 

	return (
		<div className="App">
      		<Tag color="green">HI</Tag>
			<Button onClick={() => {
				createToast({message: `abcd`, position: 'RIGHT_TOP'});
			}}>RGHT_TOP</Button>
			<Button onClick={() => {
				createToast({message: `abcde`, position: 'RIGHT_BOTTOM'});
			}}>RIGHT_BOTTOM</Button>


			<ToastContainer toasts={toasts} removeToast={removeToast}/>
    	</div>
	);
}

export default App;