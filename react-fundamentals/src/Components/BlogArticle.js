import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import ArticleHeader from './ArticleHeader';
import Button from './Button';

const BlogArticle = ({ id, title, subtitle, content, children, onContentChanged, onRemoveArticle }) => {
  
  const [ newContent, setNewContent ] = useState('');
  const handleContentButtonClick = () => setNewContent(`${title} content has been clicked`);
  const handleRemoveButtonClick = () => onRemoveArticle(id);

  // Remark, this is only triggered when this content changes, 
  // so clicking the button only triggers this once, since the content is always the same
  // if changing this to add more things to string every time, it would re-render the components and trigger callbacks.
  useEffect(() => onContentChanged?.(newContent), [ newContent ]);

  return (
    <article>
      <ArticleHeader 
        title={title}
        subtitle={subtitle}
        onClick={handleRemoveButtonClick}
        content={content}
        newContent={newContent}
      >
      </ArticleHeader>
      <Button onClick={handleContentButtonClick}>Click for new content</Button>
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
  onRemoveArticle: propTypes.func
};

export default BlogArticle;