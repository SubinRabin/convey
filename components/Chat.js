import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,FlatList,
		Platform,TouchableHighlight,KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements'
export default class chat extends Component {
	constructor() {
		super()
		this.state = {
			text: '',
			disabled:true,
			messages:[
					{
						text:'Hello'
					},
					{
						text:'How are you?'
					}
				]
		}
	}
	onTyping(text) {
		if (text && text.length >= 1) {
			this.setState({
				disabled:false,
				text:"",
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

	renderChatItem({item}) {
		return <Text>{item.text}</Text>
	}

	keyExtractor = (item,index) => index;
	render() {
		const extraBtnStyle = this.state.disabled ? styles.disabledBtn : styles.enabledbtn;
		let behavior = '';
		if (Platform.OS == 'ios' || Platform.OS == 'android') {
			behavior= 'padding'
		}
		return (
			<View style={styles.container}>
				<Header
					centerComponent={{ text: 'Convey',style: { color:'#fff',fontSize:20 } }}
				 	outerContainerStyles={{
					    backgroundColor: '#EE596C',
					  }}
				 />
				 <FlatList
				 	inverted
				 	data={this.state.messages}
				 	renderItem={this.renderChatItem}
				 	keyExtractor={this.keyExtractor}
				 />
				 <KeyboardAvoidingView behavior={behavior}>
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