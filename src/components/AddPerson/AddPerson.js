import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <button onClick={props.clicked}>Add Person</button>
    </div>
);

export default addPerson;