import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Rating } from 'react-native-elements';
import { Spinner } from './common';
import { Icon } from 'react-native-elements';

export default class ArticleDetails extends Component {
  componentWillMount() {
    const { fetchArticleDetails, fetchArticleDecision } = this.props;
    fetchArticleDetails();
    fetchArticleDecision();
  }

  computeDuration(ms) {
    const dt = new Date();
    const year = dt.getFullYear(ms);
    const month = dt.getMonth(ms);
    const date = dt.getDate(ms);

    return year + '/' + month + '/' + date;
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
      rating,
    } = styles;

    const {
      plantName,
      articleContents,
      createdAt,
      currentRating,
      articleDecision,
    } = this.props;

    const editOrBookmark = () => {
      if (articleDecision === true) {
        const style = {
          fontSize: 18,
          color: '#6BC6FD',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#6BC6FD',
          borderRadius: 3
        };
        return (
          <Text style={style}>編集</Text>
        );
      } else {
        return (
          <Icon type='font-awesome' name='bookmark-o' color='#D04255' size={30}/>
        );
      }
    };

    if (currentRating) {
      return (
        <ScrollView style={body}>
          <View style={editOrBookmarkBlock}>
            {editOrBookmark()}
          </View>
          <View style={block1}>
            <Image
              source={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pZ0SHqgZhy-_ATEzJPpqXL3241NN8_Y0TKMiNSdO0rZc6STa7A' }}
              style={uploadImage}
            />
            <View style={blockChild1}>
              <Text style={articleTitle}>{plantName}</Text>
              <Text style={uploadDay}>{this.computeDuration(createdAt)}</Text>
            </View>
          </View>
          <View style={block2}>
            <Text style={bookmarked}>0ブックマーク</Text>
            <Rating
              type='star'
              readonly
              imageSize={18}
              startingValue={currentRating}
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
    return <Spinner/>;
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
  }
});