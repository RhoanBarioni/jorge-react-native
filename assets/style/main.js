import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#2E073F',
    height:'100vh',
    width:'100vw',
    minHeight:'100vh'
  },

  bodyContainer:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#2E073F',
    height:'94vh',
    width:'100vw',
    padding:15,
    marginTop:25
  },

  containerLogo:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    //margin:15,
    backgroundColor:'#7A1CAC',
    width:'95vw',
    height:'20%',
    maxHeight:100,
    padding:10,
    borderRadius:10,
    maxWidth:500,
  },

  logo: {
    maxWidth:100,
    maxHeight:75,
  },

  textLogo:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
    marginLeft:15,
    cursor:'default'
  }
});

export default styles;