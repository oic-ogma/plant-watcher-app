import React from 'react';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const Home = () => (
  <Card>
    <CardSection>
      <Button onPress={Actions.listarticles}>自分の記事の一覧</Button>
    </CardSection>

    <CardSection>
      <Button onPress={Actions.articlesearch}>記事を検索</Button>
    </CardSection>

    <CardSection>
      <Button onPress={Actions.addarticle}>記事を投稿</Button>
    </CardSection>
  </Card>
);

export default Home;
