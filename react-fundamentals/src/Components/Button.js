import React from 'react';
import propTypes from 'prop-types';

const Button = ({ onClick, children, theme }) => {

    return <>
        <button style={{ background: theme === 'dark' ? "#FFF" : '#000', color: theme === 'dark' ? "#000" : '#FFF' }} onClick={onClick}>
            {children}
        </button>
    </>
}
Button.propTypes = {
    onClick: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
    theme: propTypes.oneOf([ 'dark', 'light' ]).isRequired
};

export default Button;