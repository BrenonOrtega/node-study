import React, { useContext } from 'react';
import propTypes from 'prop-types';
import ThemeContext from '../ThemeContext';
const Button = ({ onClick, children }) => {
  const { theme } = useContext(ThemeContext);
  return <>
    <button style={{ background: theme === 'dark' ? "#FFF" : '#000', color: theme === 'dark' ? "#000" : '#FFF' }} onClick={onClick}>
      {children}
    </button>
  </>
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  children: propTypes.node.isRequired
};

export default Button;