import React, { Component } from 'react'
import {  View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'


 class Home extends Component {
     constructor(props){
         super(props)
     }

    render() {
        return (
            <View>
                 <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                <Image style={styles.stretch} source={require('../src/Chip.png')}/>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.title}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Register")}}><Text style={styles.title}>Register</Text></TouchableOpacity>
            </View>
            </View>
        )
    }
}


export default Home;
const styles = StyleSheet.create({
    // stretch: {
    //     width: 130,
    //     height: 200,
    //     resizeMode: 'stretch',
    //   },
      text:{
        textAlign:'center',
        borderWidth:5,
    },
        
      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 20,
      },
    
    });
    
