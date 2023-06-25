import React, { Fragment, useReducer, } from "react";
import BlogArticle from './Components/BlogArticle';
import Header from './Header'
import createReducerFor from './Functions/createReducer';
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

  const receiveContentChanged =(received) => dispatch({ action: actions.childrenContent, key: 'childrenContent', value: received });

  const handleRemoveArticle = (articleId) => dispatch({ action: actions.removeArticle, key: 'articles', value: articleId });

  return <Fragment key="fragment">
    <Header title="My blog articles" content={state.childrenContent} >
      <h4>Im the children subtitle</h4>
      <h5>{state.childrenContent}</h5>
    </Header>

    <button onClick={handleIncreaseClick}>Clicked {state.count} times</button>
    <button onClick={handleRefreshArticle}>Refresh Articles</button>

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
  </Fragment>;
};

export default App;

function createArticle(length) {
  return {
    id: getNewId(),
    title: `Article number ${length}`,
    subtitle: `SubArticle#${length}`,
    content: "eeeeeeeeeeeu, parado no bailao UUUH no bailao, ela com o popozao"
  };
}
