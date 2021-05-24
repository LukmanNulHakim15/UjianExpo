import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

 class MainMenu extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={{ height:30, backgroundColor:'blue', alignItems:'center', marginBottom: 30}} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text>Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height:30, backgroundColor:'blue', alignItems:'center', marginBottom: 30}} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text>History Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height:30, backgroundColor:'blue', alignItems:'center', marginBottom: 30}} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text>Map Kejadian</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height:30, backgroundColor:'blue', alignItems:'center', marginBottom: 30}} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height:30, backgroundColor:'blue', alignItems:'center', marginBottom: 30}} onPress={()=>{this.props.navigation.navigate("Login")}}>
                    <Text>Emerency</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default MainMenu;