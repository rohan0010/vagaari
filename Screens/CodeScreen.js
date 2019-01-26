import React, { Component } from "react";
import { Icon } from 'native-base'
import { View,
         Text,
        TouchableOpacity,
        Dimensions,
       TextInput } from 'react-native'
import { Button } from 'react-native-elements'
       const SCREEN_HEIGHT = Dimensions.get('window').width
class CodeScreen extends Component {
     static navigationOptions = {
    header: null
  }
    constructor(props) {
        super(props)
    }
    render(){
        return(
                <View style={{flex:1}}>
                <View style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        top: 60,
                        left: 25,
                        zIndex: 100,
                        opacity: 1,
                        backgroundColor: '#54575e',
                        borderRadius: 30,
                        alignItems: 'center',
                        justifyContent: 'center' }}
                >
                    <TouchableOpacity 
                
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                    >
                        <Icon name="md-arrow-back" style={{ color: 'black'}}
                         />
                    </TouchableOpacity>
                    </View>
                    <View style={{
                                        marginTop: 160,//animated
                                        paddingHorizontal: 25,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                    <Text  style={{
                                            fontSize: 30, color: 'gray',
                                            position: 'absolute',
                                            opacity: 1//animated
                                        }}>Kindly wait while we auto verify your OTP.</Text>
                    </View>
                    <View
                                        style={{
                                            marginTop: 70,
                                            width:SCREEN_HEIGHT,
                                            paddingleft:20,
                                            paddingHorizontal:60,
                                            justifyContent:'center'
                                         
                                        }}
                                    >
                                         <TouchableOpacity    onPress={() => this.refs.textInputMobile.focus()}
                    >                    
                                        <TextInput
                                            keyboardType="numeric"
                                            ref="textInputMobile"
                                            style={{  fontSize: 40,padding:10,alignItems:'center' }}
                                            placeholder='****'
                                            underlineColorAndroid="#000000"
                                            
                                            
                                        />
                                        </TouchableOpacity>
                            
                                    </View>
                                    <View style={{
                                        marginTop:5,
                                        paddingHorizontal:20
                                    }}>
                                    <Text style={{
                                        fontSize:20,
                                        color:'gray'
                                    }} >
                                    Resend?
                                    </Text>
                                    </View>
                                    <View style={{
                                       marginTop:80,
                                       justifyContent:'center'
                                    }}     >
                                    <Button
                                    title='Verify'
                                    backgroundColor='#f00'
                                    >
                                    
                                    </Button>
                                    </View>

                </View>
                );
                }
               }
               
               export default CodeScreen;