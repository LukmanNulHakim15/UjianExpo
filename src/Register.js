import axios from 'axios';
import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, onChangeText, TouchableOpacity } from 'react-native'

class Register extends Component {

    constructor (props){
        super(props);
        this.state={
            name:"",
            email:"",
            phone:"",
            address:""
        }
    }

    handleAdd(){
        axios.post('http://d1d23548dca8.ngrok.io/user/AddUser/',this.state)
        .then( (response) => {
            // console.log(response)
            alert(response.data)
            // this.props.navigation.replace("Axios")
          })
          .catch(function (error) {
          // handle error
           console.log(error);
          })
    }

    render() {
        return (
            <View>
                
                <Text> Name </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({name:data})}}
                placeholder="Name"
                />

                <Text> Email </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({email:data})}}
                placeholder="Email"
                />

                <Text> Phone </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({phone:data})}}
                placeholder="Phone"
                />

                <Text> Address </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({address:data})}}
                placeholder="Address"
                />

                <TouchableOpacity style={styles.button} onPress={this.handleAdd.bind(this)}><Text style={styles.title}>Registrasi</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Login")}}><Text style={styles.title}>Login</Text></TouchableOpacity>
            </View>
        )
    }
}

export default Register;

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },

      button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
      },
});