import React, { Component } from 'react';
import { ListItem } from './common';
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

  renderRow({ plantName, articleContents, shortArticleTexts }) {
    return <ListItem plantName={plantName} articleContents={articleContents} shortArticleTexts={shortArticleTexts}/>;
  }

  render() {
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
