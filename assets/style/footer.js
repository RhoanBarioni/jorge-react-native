import { StyleSheet } from 'react-native';

const footer = StyleSheet.create({
  footerContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100vw',
    height:'5vh',
    maxHeight:80,
    padding:15,
    marginTop:10
  },

  footerText:{
    color:'#fff'
  }
});

export default footer;