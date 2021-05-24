import axios from 'axios';
import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

export default class HistoryLaporan extends Component {
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    // componentDidUpdate(){
    //     this.getData
    // }

    getData=()=> {
        axios.get('http://cfa21fa00de8.ngrok.io/laporan/')
        .then( (response) => {
          // console.log(response.data)
          let data=response.data;   
          this.setState({data:data});
        })
        .catch(function (error) {
        // handle error
         console.log(error);
        })
    }

    renderItem = ({ item }) => (
        <View style = {{borderWidth:5, borderColor:"red"}}>
            <Text style={styles.title}>Nama : {item.name}</Text>
            <Text style={styles.title}>Kejadian : {item.kejadian}</Text>
            <Text style={styles.title}>Alamat : {item.alamat  }</Text>
            <Text style={styles.title}>Keterangan : {item.keterangan}</Text>
            <Text style={styles.title}>gambar : {item.gambar}</Text>
        </View>
    )


    render() {
        return (
            <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>{this.props.navigation.replace("MainMenu")}} style={styles.button}><Text style={styles.title}>Main Menu</Text></TouchableOpacity>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={item => item.id}
            />
            
          </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 18,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
  });