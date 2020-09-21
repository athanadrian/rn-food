import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        term={term}
      />
      {errorMessage ? <Text>{`ERROR: ${errorMessage}`}</Text> : null}
      <ScrollView>
        <ResultsList
          //navigation={navigation}
          results={filterResultsByPrice('$')}
          title='Cost Effective'
        />
        <ResultsList
          //navigation={navigation}
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
        />
        <ResultsList
          //navigation={navigation}
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
        />
      </ScrollView>
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
