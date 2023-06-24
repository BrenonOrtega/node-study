import React from 'react';
import propTypes from 'prop-types';

export default function Header({ title, children }) {
	return (
		<>
			<h1>{title}</h1>
			{children}
		</>
	);
};

Header.propTypes = {
	title: propTypes.string.isRequired,
	children: propTypes.node,
}; 