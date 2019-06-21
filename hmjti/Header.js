import React from 'react';
import {Text,View} from 'react-native';
const Header = (props) => {
    const { text, vheader } = styles;
    return (
        <View style={vheader}>
          <Text style={styles.Htext}> {props.header} </Text>
        </View>
    );
};
const styles = {
  vheader: {
    backgroundColor: '#03587f',
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10, 
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  Htext: {
    color: 'white',
    textAlign: 'center',
    fontSize:15,
  }
};
export default Header;