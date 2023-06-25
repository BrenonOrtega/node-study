import React, { Fragment, useReducer, } from "react";
import BlogArticle from './Components/BlogArticle';
import Header from './Header'
import createReducerFor from './Functions/createReducer';
import { articlesSeed } from './articlesSeed';
import { appendItem, sum, } from './Functions';

const actions = {
  refresh: 'refreshArticles',
  childrenContent: 'receiveChildrenContent',
  increaseCount: 'increaseCount'
};

const reducer = createReducerFor(actions);

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, { articles: articlesSeed, childrenContent: '', count: 0 });

  const handleRefreshArticle = () => {
    const length = state.articles.length;
    dispatch({ action: actions.childrenContent, key: 'articles', value: createArticle(length), applyTransform: appendItem, });
  };

  const handleIncreaseClick =
    () => dispatch({ action: actions.increaseCount, key: 'count', value: 1, applyTransform: sum });

  const receiveContentChanged =
    (received) => dispatch({ action: actions.childrenContent, key: 'childrenContent', value: received });

  return <Fragment key="fragment">
    <Header title="My blog articles" content={state.childrenContent} >
      <h4>Im the children subtitle</h4>
      <h5>{state.childrenContent}</h5>
    </Header>

    <button onClick={handleIncreaseClick}>Clicked {state.count} times
    </button>
    <button onClick={handleRefreshArticle}>Refresh Articles</button>

    {state.articles.map(article =>
      <BlogArticle
        key={article.title}
        title={article.title}
        subtitle={article.subtitle}
        content={article.content}
        onContentChanged={receiveContentChanged}
      />)
    }
  </Fragment>;
};

export default App;

function createArticle(length) {
  return {
    title: `Article number ${length}`,
    subtitle: `SubArticle#${length}`,
    content: "eeeeeeeeeeeu, parado no bailao UUUH no bailao, ela com o popozao"
  };
}
