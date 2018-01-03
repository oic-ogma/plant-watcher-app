import React from 'react';
import { ListItem, Error, Spinner } from './';
import { FlatList } from 'react-native';

const renderRow = ({ plantName, articleContents, image }) => <ListItem plantName={plantName} articleContents={articleContents} image={image} />;

export const ListArticles = ({ articles, loading, error }) => {
  if (loading) return <Spinner size='large' />;
  if (error) return <Error message={error} />;
  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => renderRow(item)}
    />
  );
};
