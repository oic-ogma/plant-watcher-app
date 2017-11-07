import React, { Component } from 'react';
import { ListItem, Error, Spinner } from './';
import { ListView } from 'react-native';

class ListArticles extends Component {
  componentWillMount() {
    this.props.fetchArticles();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ articles }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(articles);
  }

  renderRow({ plantName, articleContents, error }) {
    return <ListItem plantName={plantName} articleContents={articleContents} error={error} />;
  }

  render() {
    const { loading, error } = this.props;

    if (loading) {
      return <Spinner size='large' />;
    }
    if (error) {
      return <Error message={error} />;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default ListArticles;
