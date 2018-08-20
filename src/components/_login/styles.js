import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	header:{
		backgroundColor: 'red'
	},
	content:{
		backgroundColor: '#efefef'
	}, 
	login: {
	    flex: 1,
	    backgroundColor: 'white',
	    height: 400,
	    marginTop:90,
	    marginRight: 20,
	    marginLeft: 20,
	    borderRadius: 20,
	},
	button:{
	  	marginTop: 20,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15,
	  	backgroundColor: 'red'
	},
	name:{
	  	color: 'red',
	  	justifyContent:'center'
	},
	password:{
	  	color: 'red'
	},
	Lname:{
	  	borderWidth: 5,
	  	borderColor: 'blue',
	  	marginLeft:15,
	  	marginRight: 15
	},
	Lpassword:{
	  	borderWidth: 10,
	  	borderColor: 'blue',  	
	  	marginLeft:15,
	  	marginRight: 15
	},
	Ltext:{
    	borderRadius: 50,
    	marginTop:17,
    	alignContent: 'center',
       	backgroundColor: '#efefef',
       	marginLeft:150,	marginRight:150,	
    },
	fb:{
    	marginTop: 17,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15
    },
    google:{
    	marginTop: 15,
	  	borderRadius: 20,
	  	marginLeft:15,
	  	marginRight: 15,
	  	borderColor: '#000000'
    },
    
//change input
	a: {
		color: 'red',
		fontFamily: 'roboto',
		fontSize: 14,
	},
	b : {
		color: '#333333',
		fontFamily: 'roboto',
		fontSize: 14,
	},
	c: {
		color: 'red',
	},
	d : {
		color: '#333333',
	}, 
	textBoxBtnHolder:
	{
	  position: 'relative',
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	},
	textBox:
	{
	  fontSize: 18,
	  alignSelf: 'stretch',
	  height: 45,
	  paddingRight: 45,
	  paddingLeft: 8,
	//   borderWidth: 1,
	  paddingVertical: 0,
	//   borderColor: 'grey',
	//   borderRadius: 5
	},
	visibilityBtn:
	{
	  position: 'absolute',
	  right: 3,
	  height: 40,
	  width: 35,
	  padding: 5
	},
  
	btnImage:
	{
	  resizeMode: 'contain',
	  height: '100%',
	  width: '100%'
	},
	//password style props
	hiddenPassword:{
		color :'red', marginRight: 15,
		alignSelf: 'flex-end'
	},
	errorMessage:{
		color:'red', marginLeft:15, 
		alignSelf:'flex-start'
	},
	
});

export default styles;
