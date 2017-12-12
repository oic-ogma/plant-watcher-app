import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Error } from '../common';
import { Card } from 'react-native-elements';

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
            {articleContents.length > 72 ? `${articleContents.slice(0,73)} ...` : articleContents}
          </Text>
        </View>
      </CardSection>
    </Card>
  );
};

export { ListItem };
