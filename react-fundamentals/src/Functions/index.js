export const sum = (actual, value) => actual + value;

export const appendItem = (collection, newItem) => [ ...collection, newItem ];

export const getNewId = () => Math.random() * 100;

export const filterById = (collection, id) => collection.filter(article => article.id !== id);
