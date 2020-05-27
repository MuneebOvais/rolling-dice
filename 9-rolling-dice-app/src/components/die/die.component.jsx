import React from 'react';
import './die.styles.scss';

const Die = ({face, isRolling}) => {
    console.log(face);
    console.log(isRolling);
    return (
        <div className={`die ${isRolling ? 'shaking': ''}`}>
            <i className={`fas fa-dice-${face} fa-10x`}></i>
        </div>
    );
}

export default Die;