import React, { Component } from 'react';
import { ListItem, Error, Spinner } from './';
import { FlatList } from 'react-native';

class ListArticles extends Component {
  renderRow({ plantName, articleContents, error }) {
    return <ListItem plantName={plantName} articleContents={articleContents} error={error} />;
  }

  render() {
    const { loading, error, articles } = this.props;
    if (loading) {
      return <Spinner size='large' />;
    }
    if (error) {
      return <Error message={error} />;
    }
    return (
      <FlatList
        data={articles}
        renderItem={({ item }) => this.renderRow(item)}
      />
    );
  }
}

export default ListArticles;
