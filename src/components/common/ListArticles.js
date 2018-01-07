import React from 'react';
import { ListItem, Error, Spinner } from './';
import { FlatList } from 'react-native';

const renderRow = (article, setArticleDetails) => (
  <ListItem
    article={article}
    setArticleDetails={setArticleDetails}
  />
);

export const ListArticles = ({ articles, loading, error, setArticleDetails }) => {
  if (loading) return <Spinner size='large' />;
  if (error) return <Error message={error} />;
  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => renderRow(item, setArticleDetails)}
    />
  );
};
