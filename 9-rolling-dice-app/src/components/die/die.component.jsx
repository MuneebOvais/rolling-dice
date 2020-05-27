import React from 'react';
import './die.styles.scss';

const Die = ({face}) => {
    console.log(face);
    return (
        <div className='die'>
            <i className={`fas fa-dice-${face} fa-10x`}></i>
        </div>
    );
}

export default Die;