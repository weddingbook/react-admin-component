import React, { useEffect } from 'react';
import './App.css';

import {
	Button,
	useToast,
	ToastContainer
} from '../../dist/index';



function App() {
	const { createToast, toasts, removeToast, removeToastState } = useToast();
	useEffect(() => {
		console.log('toast!')
	}, [toasts])
	return (
		<div className="App">
			<Button size="large" iconName="github" iconSize="24"></Button>
			<Button onClick={() => {
				createToast({ message: `1,000 포인트 지급되었습니다.`, position: 'RIGHT_TOP', color: 'red' });
			}}>RGHT_TOP</Button>
			<Button onClick={() => {
				createToast({ message: `abcde`, position: 'RIGHT_BOTTOM', color: 'green' });
			}}>RIGHT_BOTTOM</Button>

			<ToastContainer toasts={toasts} removeToast={removeToast} removeToastState={removeToastState} />
		</div>
	);
}

export default App;