import React, { useState } from 'react';
import { formationsData } from '../data/formationsData';

function Formation(props) {

    const [currentFormation] = useState(formationsData);
    const formation = currentFormation[props.formationNumber];

    return (
        <div className='formation-main'>
            <div className='formation-content'>
                <h1>{formation.title}</h1>
                <p>{formation.date}</p>
            </div>
            <p>{formation.infos}</p>
        </div>
    )
}

export default Formation; 