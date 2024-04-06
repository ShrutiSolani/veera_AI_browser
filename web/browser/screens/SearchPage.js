import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('tea'); // Set default search query to 'tea'
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios.get('http://10.105.24.34:8000/server/get_web_results/', {
      params: {
        search_query: searchQuery // Use the state value for search query
      }
    })
    .then(function (response) {
      console.log(response);
      setSearchResults(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // Always executed
    });  
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Enter search query"
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default SearchPage;
