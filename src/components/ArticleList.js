import React, { Component } from 'react';
import { ListItem, Error, Spinner } from './common';
import { ListView } from 'react-native';



class ArticleList extends Component {


  componentWillMount() {
    this.props.getMyArticles();
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
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    if (this.props.error) {
      return (<Error message={this.props.error} />);
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

export default ArticleList;
