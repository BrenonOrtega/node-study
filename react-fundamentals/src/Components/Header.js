import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';
export default function Header({ title, children, theme, themeChanged }) {
	const toggleTheme = () => themeChanged(isDark());
	return (
		<>
			<h1>{title}</h1>
			{children}
			<Button theme={theme} onClick={toggleTheme}>{isDark(theme).normalize()} Mode</Button>
		</>
	);

	function isDark() {
		return theme === 'dark' ? 'light' : 'dark';
	}
};

Header.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.node,
	themeChanged: propTypes.func.isRequired,
	theme: propTypes.oneOf(['light', 'dark']).isRequired,
}; 