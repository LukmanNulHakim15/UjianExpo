import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class Laporan extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            kejadian:"",
            alamat:"",
            keterangan:"",
            gambar:""
        }
    }

    handleAdd(){
        axios.post('http://cfa21fa00de8.ngrok.io/laporan/AddLaporan/',this.state)
        .then( (response) => {
            // console.log(response)
            alert(response.data)
            this.props.navigation.replace("HistoryLaporan")
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

                <Text> Kejadian </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({kejadian:data})}}
                placeholder="Kejadian"
                />

                <Text> Alamat </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({alamat:data})}}
                placeholder="Alamat"
                />

                <Text> Keterangan </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({keterangan:data})}}
                placeholder="Keterangan"
                />

                <Text> Gambar </Text>
                <TextInput
                style={styles.input}
                onChangeText={(data)=>{this.setState({gambar:data})}}
                placeholder="Gambar"
                />

                <TouchableOpacity style={styles.button} onPress={this.handleAdd.bind(this)}><Text style={styles.title}>Laporkan</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("MainMenu")}}><Text style={styles.title}>MainMenu</Text></TouchableOpacity>
            </View>
        )
    }
}

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