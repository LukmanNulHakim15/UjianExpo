import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, styles, onChangeText} from 'react-native'

 class Login extends Component {
    constructor (props){
        super(props);
        this.state= {
            email:"",
            phone:""

        }
    }

    handleLogin() {
       axios.get('http://6e414e8ddfbf.ngrok.io/user/AddUser/',{
                           email:this.state.email,
                           phone:this.state.phone
                       }).then(response=> {
                           // console.log(response.data);
                           this.props.navigation.navigate('MainMenu');
                       }).catch(error=>{
                           console.log(error);
                       })
    }
   render() {
       return (
           <View>
                   <Text>Email</Text>
                   <TextInput style={{height:50, backgroundColor:'white'}} 
                   placeholder="Enter Your Email"
                   onChangeText={(data)=>{this.setState({email:data})}}>
                   </TextInput>
                    
                    <Text>Phone</Text>
                   <TextInput secureTextEntry={true} 
                   style={{height:50, backgroundColor:'white'}} 
                   placeholder="Enter Your Phone"
                   onChangeText={(data)=>{
                       this.setState({phone:data});
                   }}>
                   </TextInput>


                   <TouchableOpacity 
                   style={{ height:28, width: 50, backgroundColor:'violet'}}
                   onPress={()=>{this.handleLogin()}}>
                       <Text> Login </Text>
                   </TouchableOpacity>
               
           </View>
       )
   }
}