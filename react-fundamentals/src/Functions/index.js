import createReducerFor from './createReducer';

export const sum = (actual, value) => actual + value;

export const appendItem = (articles, newArticle) => [ ...articles, newArticle ];

export const createReducer = createReducerFor;