import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Button from './Button';
import ThemeContext from '../ThemeContext';
export default function Header({ title, children }) {
	const {theme, toogleTheme } = useContext(ThemeContext);
	return (
		<>
			<h1>{title}</h1>
			{children}
			<Button theme={theme} onClick={toogleTheme}>{theme.normalize()} Mode</Button>
		</>
	);
};

Header.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.node,
}; 