import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text,SafeAreaView, RefreshControlBase } from 'react-native';
import axios from 'axios';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const searchQuery = "tea"; 
    handleSearch(searchQuery);
  }, []);

  const handleSearch = () => {
    //const searchQuery = "tea"; 
    axios.get('http://10.105.24.34:8000/server/get_web_results/', {
      params: {
        search_query: searchQuery
      }
    })
    .then(function (response) {
      console.log(response);
      //setSearchResults(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // Always executed
    });  
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 10,marginTop:50, }}>
      
      
      <Button title="Search" onPress={() => handleSearch("tea")} />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
};


export default SearchPage;
