import React, { useState,useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text,SafeAreaView, RefreshControlBase } from 'react-native';
import axios from 'axios';


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    console.log("here");
    try {
      const response = await axios.get("http://192.168.74.202:8000/server/");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
  function sayHello() {
    alert('Hello!');
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <SafeAreaView style={{ flex: 1, padding: 10,marginTop:50, }}>
      
      
      <Button title="Search" onPress={() => getResults} />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </SafeAreaView>
  );
};


export default SearchPage;
