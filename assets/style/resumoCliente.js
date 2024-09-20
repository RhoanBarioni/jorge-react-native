import { StyleSheet } from 'react-native';

const dados = StyleSheet.create({

  displayNone:{
    display:'none',
  },

  resumoContainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100vw',
    height:'auto',
    marginTop:10
  },

  resumoTitle:{
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
    marginTop:5,
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
    margin:5,
    outline:'none',
    width:'100%',
    maxWidth:350,
    cursor:'default'
  },

  buttonContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    maxWidth:350,
    backgroundColor:'#7A1CAC',
    padding:15,
    borderRadius:10,
    marginTop:10,
    maxHeight:100
  },

  button:{
    padding:5,
    backgroundColor:'#2E073F',
    width:'30%',
    maxWidth:250,
    textAlign:'center',
    borderRadius:10,
    fontSize:'85%',
    fontWeight:'bold',
    color:'#fff',
    maxHeight:50,
    textTransform:'uppercase',
    shadowColor:'#000',
    shadowOffset:{width:0, height:4},
    shadowOpacity:1
  }
});

export default dados;