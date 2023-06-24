import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

const BlogArticle = ({ title, subtitle, content, children, onContentChanged }) => {

  const [ newContent, setNewContent ] = useState('');

  useEffect(() => onContentChanged?.(newContent), [ newContent ]);

  return (
    <article>
      <strong>{title}</strong><br></br>
      <medium>{subtitle}</medium>
      <br />
      <p>{content}</p>
      {newContent ? <p>{newContent}</p> : ''}
      <button onClick={() => setNewContent(`${title} content has been clicked`)}>
        Click for new content
      </button>
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