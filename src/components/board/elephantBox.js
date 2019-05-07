import React from 'react';

import Elephant from './elephant';

const ElephantBox = (props) => {
    return(
        <div className="elephant-box">
            {props.elephants.map( (elephant, index) => <Elephant elephant={elephant} index={index} onClick={props.onClick} key={elephant.name} />)}
        </div>
    )
};

export default ElephantBox;
