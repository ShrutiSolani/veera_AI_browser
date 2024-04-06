import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import SearchBar from './screens/SearchBar';

export default function App() {
//  return <WelcomeScreen/>;
return <SearchBar/>;
}

import SearchPage from './screens/SearchPage';

export default function App() {
  return <SearchPage/>;
}
