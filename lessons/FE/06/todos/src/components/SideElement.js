import React from 'react';
import { Form } from 'react-bootstrap';

function SideElement(props) {
	return (
		<Form.Check // prettier-ignore
        type="switch"
        id={props.name}
        label={props.name}
      />
	)
};

export default SideElement;
