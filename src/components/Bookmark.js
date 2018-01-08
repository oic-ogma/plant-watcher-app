import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { Spinner } from './common';

export default class Bookmark extends Component {
  addBookmark() {
    const { addBookmark, articleId } = this.props;
    addBookmark(articleId);
  }

  removeBookmark() {
    const { removeBookmark, articleId } = this.props;
    removeBookmark(articleId);
  }

  render() {
    const { bookmarked, processing } = this.props;
    if (processing) {
      return <Spinner size='small' color='#D04255'/>;
    }
    return (
      <Icon
        type='font-awesome'
        name={bookmarked ? 'bookmark' : 'bookmark-o'}
        color='#D04255'
        size={30}
        onPress={bookmarked ? this.removeBookmark.bind(this) : this.addBookmark.bind(this)}
      />
    );
  }
}
