import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,FlatList, } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Edit extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          NIM:this.props.navigation.state.params.NIM,
            namaAnggota:'',
            jabatan:'',
            ttl:'',
            alamat:'',
            photo:'',
            id_Bidang:''
           
        };
    }


    componentDidMount(){ 
      axios.get('https://agas1006.000webhostapp.com/hmjti/getAnggotaNIM.php?NIM='+this.state.NIM )
      .then((response)=>{ 
      console.log(response.data); 
      this.setState({ data:response.data }); 
      }) 
      .catch(function (error) { 
          console.log(error); 
      }); 
  } 
  
    render() {
      handleSubmit = () => {
        axios.post('https://agas1006.000webhostapp.com/hmjti/editAnggota.php', {
          NIM: this.state.NIM,
          namaAnggota: this.state.namaAnggota,
          jabatan: this.state.jabatan,
          ttl: this.state.ttl,
          alamat: this.state.alamat,
          id_Bidang: this.state.id_Bidang,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        return (
            <View style={styles.containerMain}>
            <Header header={"Edit"} />
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item }) => ( 
        <View style={styles.box3}>           
        <View style={styles.box1}>
            <TextInput
                placeholder={item.NIM} 
                style={styles.textInput}
                onChangeText={NIM => this.setState({ NIM })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.namaAnggota} 
                style={styles.textInput}
                onChangeText={namaAnggota => this.setState({ namaAnggota })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.jabatan} 
                style={styles.textInput}
                onChangeText={jabatan => this.setState({ jabatan })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.ttl} 
                style={styles.textInput}
                onChangeText={ttl => this.setState({ ttl })}
            />
        </View>

        <View style={styles.box1}>
            <TextInput
                placeholder={item.alamat} 
                style={styles.textInput}
                onChangeText={alamat => this.setState({ alamat })}
            />
        </View>
        <View style={styles.box1}>
            <TextInput
                placeholder={item.id_Bidang} 
                style={styles.textInput}
                onChangeText={id_Bidang => this.setState({ id_Bidang })}
            />
        </View>
        </View>
            )} 
               /> 
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> handleSubmit()}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableHighlight>
                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: '#469bd1',
    },
    box1: {
        width: "90%",
        paddingTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: '#03587f',
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: '#03587f'
        },
      box3: {
          width: "100%",
          paddingTop: 100,
          marginLeft: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        },
    Text:{
        textAlign: "center",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 13,
      },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Edit;