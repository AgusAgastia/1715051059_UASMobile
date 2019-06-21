import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';


export default class Anggota extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        id_Bidang:this.props.navigation.state.params.id_Bidang,
         };
  }
  componentDidMount() {
    axios.get('https://agas1006.000webhostapp.com/hmjti/getAnggota.php?id_Bidang='+this.state.id_Bidang)
      .then((response)=>{
        console.log(response.data);
        this.setState({data:response.data });
      })
      .catch(function (error){
          console.log(error);
      })
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Daftar Anggota </Text>
          </View>
          <FlatList 
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.data}
              renderItem = {({ item }) => (
                <ListItem style={styles.list} onPress={()=>this.props.navigation.navigate("ViewDetail",{NIM:item.NIM})}
                  title={item.namaAnggota}
                />
              )}
          />
          <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.props.navigation.navigate("AddAnggota")}                                
                  >
                  <Text style={styles.txtButton}>Tambah</Text>
                  </TouchableHighlight>
                </View> 
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#469bd1',
    marginTop: 20,
       flex: 1,
  },
  list: {
    marginTop:10
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'#03587f',
    justifyContent:'center',
    alignItems:'center'
  },
  box3: {
    flex: 0.8,
    margin:10,
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  vButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03587f',
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