import React from 'react';
import { Button, Card, CardSection } from './common';
// import { Actions } from 'react-native-router-flux';

const Home = () => (
  <Card>
    <CardSection>
      <Button>自分の記事の一覧</Button>
    </CardSection>

    <CardSection>
      <Button>記事を検索</Button>
    </CardSection>

    <CardSection>
      <Button>記事を投稿</Button>
    </CardSection>
  </Card>
);

export default Home;
