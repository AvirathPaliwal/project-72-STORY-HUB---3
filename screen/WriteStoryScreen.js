import React from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet,ToastAndroid,KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
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
        <KeyboardAvoidingView  behavior='padding' enabled>
        <View>
          <View>
          <Header
          backgroundColor={'#3a4750'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#eeeeee', fontSize: 20 },
          }}
        />
        </View>
        <View style={styles.inputView}>
          
        <TextInput 
          style={styles.inputBox}
          placeholder="Story Title"
          value={this.state.title }/>
          <TextInput 
          style={styles.inputBox}
          placeholder="Story Author"
          value={this.state.author }/>
          <TextInput 
          style={styles.inputBox}
          placeholder=" Write your own Story "
          value={this.state.story}/>
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={async()=>{
             this.submitStory()
             ToastAndroid.show('Story submited',ToastAndroid.SHORT)
             }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        </View> 
           </KeyboardAvoidingView>
         
        );
      }
    }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'black'
    },
    inputView:{
    
      margin: 20
    },
    inputBox:{
      width: 250,
      height: 40,
      borderWidth: 1,
      fontSize: 20,
      marginLeft:50,
      backgroundColornfcolor:'#303841'
    },
    submitButton:{
       backgroundColor: '#d72323',
       width: 200,
      height:50 ,
      marginLeft:70,
      marginTop:50

        },
     submitButtonText:{
       padding: 10, 
       textAlign: 'center', 
       fontSize: 20, 
       fontWeight:"bold",
        color: '#303841',
       }
  });