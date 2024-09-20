import { StyleSheet } from 'react-native';

const resumo = StyleSheet.create({
  dadosContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100vw',
    marginTop:15,
  },

  dadosTitle:{
    fontWeight:'bold',
    color:'#fff',
    fontSize:20,
    cursor:'default',
  },

  containerInput:{
    justifyContent:'center',
    alignItems:'center',
    width:'85vw',
    marginTop:10,
    borderRadius:10,
    borderWidth:1,
    backgroundColor:'#7A1CAC',
    padding:15,
    maxWidth:500,
  },

  inputRow:{
    flexDirection:'row',
    marginTop:10,
    width:'100%',
    maxWidth:350,
  },

  inputText:{
    //fontWeight:'bold',
    color:'#F9E400',
    fontSize:15,
    backgroundColor:'#2E073F',
    borderWidth:1.5,
    borderRadius:5,
    padding:6,
    margin:4,
    outline:'none',
    width:'100%',
    maxWidth:350
  }
});

export default resumo;