import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const [term, setTerm] = useState();

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('term submitted')}
      />
      <Text>HomeScreen</Text>
      <Text>{term}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
