import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,FlatList,TouchableHighlight,KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements'
export default class chat extends Component {
	constructor() {
		super()
		this.state = {
			text: '',
			disabled:true,
		}
	}
	onTyping(text) {
		if (text && text.length >= 1) {
			this.setState({
				disabled:false,
				text
			})
		} else {
			this.setState({
				disabled:true
			})
		}
	}
	onSendBtnPressed() {
		this.textInput.clear()
	}
	render() {
		const extraBtnStyle = this.state.disabled ? styles.disabledBtn : styles.enabledbtn;
		return (
			<View style={styles.container}>
				<Header
					centerComponent={{ text: 'Convey',style: { color:'#fff',fontSize:20 } }}
				 	outerContainerStyles={{
					    backgroundColor: '#EE596C',
					  }}
				 />
				 <FlatList/>
				 <KeyboardAvoidingView behavior="padding">
				 <View style={styles.inputBar}>
				 	<TextInput style={styles.textBox}
				 		multiline
				 		defaultHeight={30}
				 		onChangeText={(text) => this.onTyping(text)}
				 	/>
				 	<TouchableHighlight 
				 		style={[styles.sendBtn,extraBtnStyle]}
				 		disbled={this.state.disbled}
				 		onPress={this.onSendBtnPressed.bind(this)}
				 		>
				 		<Text style={{ color:'#fff',fontSize:10 }}>Send</Text>
				 	</TouchableHighlight>
				 </View>
				 </KeyboardAvoidingView>
        	</View>
		);
	}
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  inputBar:{
  	flexDirection:'row',
  	justifyContent:'space-between',
  	paddingHorizontal:5,
  	paddingVertical:10,
  	backgroundColor:'#efefef',
  },
  textBox:{
  	borderRadius:5,
  	borderWidth:1,
  	borderColor:'#EE596C',
  	fontSize:14,
  	paddingHorizontal:5,
  	flex:1,
  	paddingVertical:5,
  	marginLeft:5,

  },
  sendBtn:{
  	justifyContent:'center',
  	alignItems:'center',
  	paddingLeft:15,
  	paddingRight:15,
  	borderRadius:5,
  	marginLeft:5,
  },
  enabledbtn:{
  	backgroundColor:'#EE596C'
  },
  disabledBtn:{
  	backgroundColor:'#b7989c'
  }
})