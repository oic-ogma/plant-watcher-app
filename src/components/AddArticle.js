import React, { Component } from 'react';
import { Card, CardSection, Spinner, Input, Button, Error } from './common';

export default class AddArticle extends Component {
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
    const {
      plantName,
      articleName,
      plantNameChanged,
      articleContentsChanged,
      error
    } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label='植物名'
            placeholder='ひまわり'
            onChangeText={plantNameChanged}
            value={plantName}
          />
        </CardSection>

        <CardSection>
          <Input
            label='記事'
            placeholder='植物についての説明'
            onChangeText={articleContentsChanged}
            value={articleName}
            multiline={true}
            height={120}
          />
        </CardSection>

        <Error message={error}/>
        {this.renderButtons()}
      </Card>
    );
  }
}
