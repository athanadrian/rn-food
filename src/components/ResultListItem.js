import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultListItem = ({
  item: { id, image_url, name, rating, review_count },
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ResultDetail', { id })}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={image_url ? { uri: image_url } : null}
        />
        <Text style={styles.name}>{name}</Text>
        <Text>
          {rating} Stars, {review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
    width: 250,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default withNavigation(ResultListItem);
