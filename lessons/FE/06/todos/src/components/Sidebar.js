import React from 'react';
import SideElement from './SideElement';
import Counter from './Counter';
import { Form } from 'react-bootstrap';

function Sidebar() {
	return (
		<>
			<h1>Sidebar</h1>
			<Form>
				<SideElement name='Tehtud' />
				<SideElement name='Tegemata' />
				<SideElement name='Veel midagi' />
				<SideElement name='Ja veel' />
			</Form>
			<Counter title='Click me!' />
			<Counter title='Do not click me!'/>
			<Counter title='I do not care!'/>
		</>
	)
};

export default Sidebar;
