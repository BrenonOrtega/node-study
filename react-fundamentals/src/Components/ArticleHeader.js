import React from 'react';
import Button from './Button';
import propTypes from 'prop-types';

export default function ArticleHeader({ newContent, onClick, title, subtitle, content }) {
    const renderContentIfExists = () => newContent ? <p>{newContent}</p> : '';

    return (
        <>
            <strong>
                {title}
                <Button onClick={onClick}>Remove</Button>
            </strong>
            <br></br>
            <medium>{subtitle}</medium>
            <br />
            <p>{content}</p>
            {renderContentIfExists()}
        </>
    );
}

ArticleHeader.propTypes = {
    onClick: propTypes.func.isRequired,
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    newContent: propTypes.string.isRequired,
}