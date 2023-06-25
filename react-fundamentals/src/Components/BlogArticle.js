import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const BlogArticle = ({ title, subtitle, content, children, onContentChanged }) => {
  
  const [ newContent, setNewContent ] = useState('');
  const handleContentButtonClick = () => setNewContent(`${title} content has been clicked`);
  useEffect(() => onContentChanged?.(newContent), [ newContent ]);
  
  const renderContentIfExists = () => newContent ? <p>{newContent}</p> : '';
  return (
    <article>
      <strong>{title}</strong><br></br>
      <medium>{subtitle}</medium>
      <br />
      <p>{content}</p>
      {renderContentIfExists()}
      <button onClick={handleContentButtonClick}>Click for new content</button>
      <hr></hr>
      {children}
    </article>
  );
};

BlogArticle.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  onContentChanged: propTypes.func,
};

export default BlogArticle;