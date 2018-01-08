import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';
import Bookmark from './Bookmark';

export default class ArticleDetails extends Component {
  convertTimestamp(timestamp) {
    const dt = new Date(timestamp);
    const year = dt.getFullYear();
    const month = dt.getMonth();
    const date = dt.getDate();

    return `${year}/${month + 1}/${date}`;
  }

  editOrBookmark(editable) {
    const { bookmarked, addBookmark, removeBookmark, articleId, bookmarkProcessing } = this.props;
    if (editable === true) {
      return (
        <Text style={styles.edit}>編集</Text>
      );
    } else {
      return (
        <Bookmark
          bookmarked={bookmarked}
          addBookmark={addBookmark}
          removeBookmark={removeBookmark}
          articleId={articleId}
          processing={bookmarkProcessing}
        />
      );
    }
  }

  render() {
    const {
      body,
      editOrBookmarkBlock,
      block1,
      uploadImage,
      blockChild1,
      articleTitle,
      uploadDay,
      block2,
      bookmarked,
      article,
      review,
      border,
      rating
    } = styles;

    const {
      plantName,
      articleContents,
      createdAt,
      currentRating,
      image,
      editable,
    } = this.props;

    return (
      <ScrollView style={body}>
        <View style={editOrBookmarkBlock}>
          {this.editOrBookmark(editable)}
        </View>
        <View style={block1}>
          <Image
            source={image ? { uri: image } : require('../assets/images/image-not-found-small.png')}
            style={uploadImage}
          />
          <View style={blockChild1}>
            <Text style={articleTitle}>{plantName}</Text>
            <Text style={uploadDay}>{this.convertTimestamp(createdAt)}</Text>
          </View>
        </View>
        <View style={block2}>
          <Text style={bookmarked}>0ブックマーク</Text>
          <Rating
            type='star'
            readonly
            imageSize={18}
            startingValue={currentRating || 0}
          />
        </View>
        <View style={border}/>
        <View>
          <Text style={article}>{articleContents}</Text>
        </View>
        <Text style={review}>レビュー</Text>
        <View style={border}/>
        <Rating
          type='star'
          showRating
          startingValue={3}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          style={rating}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 30,
  },
  editOrBookmarkBlock: {
    position: 'absolute',
    top: -10,
    right: 5
  },
  block1: {
    display: 'flex',
    flexDirection: 'row'
  },
  uploadImage: {
    width: 80,
    height: 80
  },
  blockChild1: {
    marginLeft: 18,
  },
  articleTitle: {
    paddingBottom: 5,
    fontSize: 21
  },
  uploadDay: {
    color: '#95989A',
    fontSize: 12
  },
  block2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20
  },
  bookmarked: {
    marginRight: 18,
    fontSize: 12
  },
  article: {
    fontSize: 15,
    color: '#555555',
    letterSpacing: 1.5,
    lineHeight: 15 * 1.3,
  },
  review: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 5,
    fontSize: 18
  },
  border: {
    marginBottom: 12,
    borderBottomColor: '#D1D1D6',
    borderBottomWidth: 1
  },
  rating: {
    marginBottom: 60
  },
  edit: {
    fontSize: 18,
    color: '#6BC6FD',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#6BC6FD',
    borderRadius: 3
  }
});
