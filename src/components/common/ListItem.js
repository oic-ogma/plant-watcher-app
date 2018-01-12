import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export class ListItem extends Component {
  handlePress() {
    const { article, setArticleDetails } = this.props;
    setArticleDetails(article);
    const { currentUser } = firebase.auth();
    currentUser ? Actions.articledetails() : Actions.articledetailsauth();
  }

  render() {
    const { plantName, articleContents, image } = this.props.article;
    return (
      <Card
        title={plantName}
        image={image ? { uri: image } : require('../../assets/images/imageNotFound.png')}
      >
        <Text style={{ marginBottom: 20 }}>
          {articleContents.length > 72 ? `${articleContents.slice(0,73)} ...` : articleContents}
        </Text>
        <Button
          icon={{ name: 'notebook', type: 'simple-line-icon' }}
          backgroundColor='#228b22'
          title='読む'
          onPress={this.handlePress.bind(this)}
        />
      </Card>
    );
  }
}
