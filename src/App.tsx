import React, { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
	const [numClocks, setNumClocks] = useState(1);
	const clocks = Array(numClocks).fill(1);
	return (
		<div className="App">
			{clocks.map(() => (
				<Clock />
			))}
			<button
				onClick={(event) => {
					setNumClocks(numClocks + 1);
				}}
			>
				Add Clock
			</button>
		</div>
	);
}

export default App;
