import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';

export default class ArticleDetails extends Component {
  render() {
    const {
      body,
      section,
      section2,
      childSection,
      uploadImage,
      articleTitle,
      uploadDay,
      bookmarked,
      article,
      review,
      border
    } = styles;

    const {
      articleDetails,
      rating,
    } = this.props;

    return (
      <View style={body}>
        <View style={section}>
          <Image
            source={{ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pZ0SHqgZhy-_ATEzJPpqXL3241NN8_Y0TKMiNSdO0rZc6STa7A' }}
            style={uploadImage}
          />
          <View style={childSection}>
            <Text style={articleTitle}>ひまわりの育て方</Text>
            <Text style={uploadDay}>2000/2/2/</Text>
          </View>
        </View>
        <View style={section2}>
          <Text style={bookmarked}>0ブックマーク</Text>
          <Rating
            type='star'
            fractions={5}
            startingValue={5}
            readonly
            imageSize={18}
            onFinishRating={this.ratingCompleted}
          />
        </View>
        <View style={border} />
        <View>
          <Text style={article}>
            以前は実装に悩まされたという人も少なくないであろう、垂直に中央揃え。Flexboxを使えば、これも一行で解決です。使用するプロパティーは align-items 。サムネイル画像の配置なんかに使えそう。
          </Text>
        </View>
        <View>
          <Text style={review}>レビュー</Text>
          <View style={border} />
          <Rating
            type='star'
            readonly
            imageSize={24}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 30
  },
  section: {
    display: 'flex',
    flexDirection: 'row'
  },
  section2: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20
  },
  uploadImage: {
    width: 80,
    height: 80
  },
  childSection: {
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
  bookmarked: {
    marginRight: 18,
    fontSize: 12
  },
  article: {
    fontSize:15,
    letterSpacing: 1.5
  },
  review: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18
  },
  border: {
    marginBottom: 12,
    borderBottomColor: '#D1D1D6',
    borderBottomWidth: 1
  }
});