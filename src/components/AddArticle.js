import React, { Component } from 'react';
import { Card, CardSection, Spinner, Input, Button } from './common';
import { Text } from 'react-native';

export default class AddArticle extends Component {
  onPlantNameChanged(text) {
    this.props.plantNameChanged(text);
  }

  onArticleContentsChanged(text) {
    this.props.articleContentsChanged(text);
  }

  saveArticle() {
    const { plantName, articleContents, saveArticle } = this.props;
    saveArticle(plantName, articleContents);
  }

  renderButtons() {
    if (this.props.loading) {
      return <CardSection><Spinner size='large'/></CardSection>;
    }
    return (
      <CardSection>
        <Button onPress={this.saveArticle.bind(this)}>
          投稿
        </Button>
      </CardSection>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='植物名'
            placeholder='ひまわり'
            onChangeText={this.onPlantNameChanged.bind(this)}
            value={this.props.plantName}
          />
        </CardSection>

        <CardSection>
          <Input
            label='記事'
            placeholder='植物についての説明'
            onChangeText={this.onArticleContentsChanged.bind(this)}
            value={this.props.articleName}
            multiline={true}
            height={120}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        {this.renderButtons()}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    paddingTop: 5,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  }
};
