import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, ScrollView} from 'react-native';
import {ListItem, Card, Image } from 'react-native-elements'
import axios from 'axios';

export default class ViewDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: [],
        NIM:this.props.navigation.state.params.NIM,
         };
  }
  componentDidMount() {
    axios.get('https://agas1006.000webhostapp.com/hmjti/getAnggotaNIM.php?NIM='+this.state.NIM)
      .then((response)=>{
        console.log(response.data);
        this.setState({data:response.data });
      })
      .catch(function (error){
          console.log(error);
      });
  }
  hapus = () => {
    axios.post('https://agas1006.000webhostapp.com/hmjti/hapusAnggota.php', {
        NIM: this.state.NIM,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
    }

    
    


  render() {
    return (
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Detail Anggota </Text>
          </View>
          <FlatList 
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.data}
              renderItem = {({ item }) => (
                <View>
                <View>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image
                    source={{uri:'https://agas1006.000webhostapp.com/hmjti/upload/'+item.photo+''}}
                    style={{width:150, height:150}}
                    />
                    </View>
                    <Card title="Detail Anggota">
                            <Text>NIM :{item.NIM}</Text>
                            <Text>Nama :{item.namaAnggota}</Text>
                            <Text>Jabatan :{item.jabatan}</Text>
                            <Text>TTL :{item.ttl}</Text>
                            <Text>Alamat:{item.alamat}</Text>
                            <Text>id_Bidang:{item.id_Bidang}</Text>
                    </Card>
                </View>
                <View style={styles.box3}>
                <TouchableHighlight activeOpacity={0.5}
                          style={styles.BoxStyle2} onPress={()=>this.props.navigation.navigate('Edit', {NIM:item.NIM})}>
                          <Text style={styles.txtBox2}>Edit</Text>
                 
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.5} 
                          style={styles.BoxStyle1} onPress={() => {this.hapus();this.props.navigation.navigate('Kategori')}}>
                          <Text style={styles.txtBox2}>Hapus</Text>
                        </TouchableHighlight>
                      </View> 
                      </View>
              )}
              
          />
          
       </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#469bd1',
    marginTop: 20,
       flex: 1,
  },
  txtBox2: {
      color: 'white'
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
  BoxStyle1: {
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 30, 
    padding: 20,
    width: '40%',
    height: 30,
    backgroundColor: '#03587f',
    marginTop:40,
    margin:10,
    marginLeft:20,
},
BoxStyle2: {
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 30, 
    padding: 20,
    width: '40%',
    height: 30,
    backgroundColor: '#03587f',
    marginTop:40,
    margin:10,
},
  vButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191970',
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