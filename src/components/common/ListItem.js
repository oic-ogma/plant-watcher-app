import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card, Error } from '../common';

const sliceArticle = articleContent => {
  const shortArticle = articleContent.slice(0,73);
  if (shortArticle.length > 72) {
    return `${shortArticle} ...`;
  }
  return articleContent;
};

const ListItem = ({ plantName, articleContents, error }) => {
  return (
    <Card>
      <Error message={error} />
      <CardSection>
        <View>
          <Text>
            {plantName}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <View>
          <Text>
            {sliceArticle(articleContents)}
          </Text>
        </View>
      </CardSection>
    </Card>
  );
};

export { ListItem };
