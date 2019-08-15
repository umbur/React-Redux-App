import React from 'react';

const Dogapi = props => {
    console.log('props from Dogapi', props)
    return(
        <div> <img src={props.getdog} /> </div>
    )

}


export default Dogapi;
