import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,Alert } from 'react-native';
import * as firebase from 'firebase';
import db from '../config.js';

export default class writeStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title : '',
      author : '',
      story : '',
    }
  }

  submitStory = async()=>{
    db.collection("Title").add({
      'title' : this.state.title,
    });
    db.collection("Author").add({
      'author' : this.state.author,
    });
    db.collection("Story").add({
      'story' : this.state.story,
    });
  }
    
render() {
      return(
        
        <View style={styles.container}>
         <Text> Reading story</Text>
        </View> 
         
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
       backgroundColor: '#FBC02D',
       width: 100,
      height:50 
        },
     submitButtonText:{
       padding: 10, 
       textAlign: 'center', 
       fontSize: 20, 
       fontWeight:"bold",
        color: 'white'
       }
  });