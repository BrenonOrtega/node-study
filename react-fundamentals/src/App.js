import React, { Fragment, useReducer, useState } from "react";
import BlogArticle from './Components/BlogArticle';
import Header from './Components/Header'
import createReducerFor from './Functions/createReducer';
import Button from './Components/Button';
import ThemeContext from './ThemeContext';
import { articlesSeed } from './articlesSeed';
import { appendItem, sum, getNewId, filterById } from './Functions';
import { createAction } from './Functions/createActions';

const actions = {
  refreshArticles: createAction('refreshArticles', appendItem),
  removeArticle: createAction('removeArticle', filterById),
  childrenContent: createAction('receiveChildrenContent'),
  increaseCount: createAction('increaseCount', sum),
};

const reducer = createReducerFor(actions);

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, { articles: articlesSeed, childrenContent: '', count: 0 });

  const handleRefreshArticle =
    () => dispatch({ action: actions.refreshArticles, key: 'articles', value: createArticle(state.articles.length) });

  const handleIncreaseClick = () => dispatch({ action: actions.increaseCount, key: 'count', value: 1 });

  const receiveContentChanged = (received) => dispatch({ action: actions.childrenContent, key: 'childrenContent', value: received });

  const handleRemoveArticle = (articleId) => dispatch({ action: actions.removeArticle, key: 'articles', value: articleId });
  
  const [ theme, setTheme ] = useState(`dark`);

  const toogleTheme = () => setTheme(theme === `dark` ? `light` : 'dark');
  
  return <ThemeContext.Provider value={{ theme, toogleTheme }}>
    <Fragment key="fragment">
      <Header title="My blog articles" content={state.childrenContent}>
        <h4>Im the children subtitle</h4>
        <h5>{state.childrenContent}</h5>
      </Header>
      <Button onClick={handleIncreaseClick}>Clicked {state.count} times</Button>
      <Button onClick={handleRefreshArticle}>Refresh Articles</Button>
      {state.articles.map(article =>
        <BlogArticle
          id={article.id}
          key={article.title}
          title={article.title}
          subtitle={article.subtitle}
          content={article.content}
          onContentChanged={receiveContentChanged}
          onRemoveArticle={handleRemoveArticle}
        />)
      }
    </Fragment>
  </ThemeContext.Provider>;
};

export default App;

// TODO - Remove this.
function createArticle(length) {
  return {
    id: getNewId(),
    title: `Article number ${length}`,
    subtitle: `SubArticle#${length}`,
    content: "eeeeeeeeeeeu, parado no bailao UUUH no bailao, ela com o popozao"
  };
}
