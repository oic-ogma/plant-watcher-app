import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

const ListItem = ({ plantName, articleContents, image }) => (
  <Card
    title={plantName}
    image={image ? { uri: image } : require('../../assets/images/imageNotFound.png')}
  >
    <Text style={{ paddingBottom: 8 }}>
      {articleContents.length > 72 ? `${articleContents.slice(0,73)} ...` : articleContents}
    </Text>
    <Button
      icon={{ name: 'notebook', type: 'simple-line-icon' }}
      backgroundColor='#228b22'
      title='読む'
      onPress={()=>{}}
    />
  </Card>
);

export { ListItem };
