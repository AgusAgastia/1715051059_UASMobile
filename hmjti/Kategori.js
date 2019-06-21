import React from 'react';
import { Text,View,FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import Header from "./Header";


//const axios = require('axios');
export default class Kategori extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("https://agas1006.000webhostapp.com/hmjti/getKategoriBidang.php")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}

    render() {
        return (
            <View style={styles.vHeader}>
                <Header header={"Kategori Bidang"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                   data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("Anggota",{id_Bidang:item.id_Bidang})}
                            title={item.namaBidang}

                        />
                    )
                    }
                />
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.props.navigation.navigate("Login")}    

                            
                  >
                  <Text style={styles.txtButton}>Logout</Text>
                  </TouchableHighlight>
                </View>     
            </View>
            
    
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            backgroundColor: '#469bd1',
        },
    list: {
            marginTop:10
        },
        box3: {
            flex: 0.8,
            margin:10,
            marginTop:10,
            flexDirection: 'row',
            alignItems: 'center'
        },
        vButton: {
            backgroundColor : '#03587f',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            padding:20,
            margin:80,
            width: '50%',
            height: 50, 
        },
        txtButton: {
            textAlign: 'center',
            color: 'white',
            fontSize: 20,
        }
    });
