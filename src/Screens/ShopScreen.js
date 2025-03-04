import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE } from '../configs/Constant'
import { getData } from '../configs/Global';
import { LogBox } from 'react-native';
import { ShopRequest } from '../components/Request';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShopDetail from '../components/ShopDetail';
import SearchBar from '../components/SearchBar';

const ShopScreen = ({ navigation }) => {
  const [results, setresults] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [term, setTerm] = useState('');

  try {
    useEffect(() => {
      ShopRequest().then(res => {
        setresults(res.data.shops);
        setIsLoaded(true);
      });;
    }, [])


  } catch (error) {
    console.log(error.message);
  }
  if (!isLoaded) {
    return (

      <View style={[styles.Activitycontainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#696969" />
      </View>

    )
  }
  else {

    return (< >
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          if (!term) {
            navigation.navigate('InfluenceursRecherche', { term: term })
          }
        }}
      />
      <FlatList
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ShopDetail shop={item} />
            </TouchableOpacity>
          )
        }}
      />
    </>)
  }
};


export default ShopScreen;

const styles = StyleSheet.create({
  Activitycontainer: {
    flex: 1,
    justifyContent: "center"
  }
});