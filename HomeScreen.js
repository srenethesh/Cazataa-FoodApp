import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text,TextInput,Searchbar, View, } from 'react-native';
import Content from './Content';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollfoodImage from './ScrollfoodImage';
import { ScrollView } from 'react-native';



export default function HomeScreen({ navigation }) {
  const [searchKey, setSeachKey] =useState('');
  console.log(searchKey);

  const handleSearch = (text) => {
    setSeachKey(text)
  };
    return (
    
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View>
            <TextInput 
            value={searchKey} 
            onChangeText={ handleSearch } 
            placeholder='Search , Order, Enjoy , Repeat!...' 
            clearButtonMode='always'            
            style={styles.Searchbar}/>
            </View>

            <Content />
            </ScrollView>
          <StatusBar style="auto" />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:9,

      },

      
      Searchbar:{
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        padding:10,
        borderRadius:10,
      },
    
    });