import React, { useState } from 'react';

function Counter(props) {
	const [count, setCount] = useState(0);
	return(
		<div>
			<p>You clicked button {count} times</p>
			<button onClick={() => {setCount(count + 1)}}>{props.title}</button>
		</div>
	);
}

export default Counter;
