import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const BlogArticle = ({ id, title, subtitle, content, children, onContentChanged, onRemoveArticle }) => {
  
  const [ newContent, setNewContent ] = useState('');
  const handleContentButtonClick = () => setNewContent(`${title} content has been clicked`);
  const handleRemoveButtonClick = () => onRemoveArticle(id);
  useEffect(() => onContentChanged?.(newContent), [ newContent ]);
  
  const renderContentIfExists = () => newContent ? <p>{newContent}</p> : '';
  return (
    <article>
      <strong>{title} <button onClick={handleRemoveButtonClick}>Remove</button></strong><br></br>
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
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  onContentChanged: propTypes.func,
  onRemoveArticle: propTypes.func,
};

export default BlogArticle;