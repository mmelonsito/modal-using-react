import React from 'react';
import PropTypes from 'prop-types';

import './buttonStyles.css';

const Button = ({value, onClick}) => (
    <button
    className="buttoncito"
        onClick={(event) => onClick(event)}>
            <img className="close-icon" src={value}/>
        {value}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;