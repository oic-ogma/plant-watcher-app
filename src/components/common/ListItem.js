import React from 'react';
import { View, Text } from 'react-native';
import { Error } from '../common';
import { Card } from 'react-native-elements';

const ListItem = ({ plantName, articleContents, error }) => {
  return (
    <Card image={require('../../assets/images/imageNotFound.png')} title={plantName}>
      <Error message={error} />
      <View>
        <Text>
          {articleContents.length > 72 ? `${articleContents.slice(0,73)} ...` : articleContents}
        </Text>
      </View>
    </Card>
  );
};

export { ListItem };
