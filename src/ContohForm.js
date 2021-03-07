import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native'

export default class ContohForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
             username: '',
             password: '',
             isLogin: false
        };
    }
    
    login = () => {
        if(!this.state.username && !this.state.password) {
            Alert.alert("Error", "Username dan Password harus diisi");
        } else{
            this.setState({
                isLogin: true
            }) 
        }
    }
    render() {
        const {username, password, isLogin} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Belajar Membuat Form</Text>
                <View style={styles.garis}/>

                {/* isi */}
                <View style={styles.isi}>
                    <View style={styles.wrapperInput}>
                        <Text>Username : </Text>
                        <TextInput style={styles.textInput} 
                        placeholder="Masukkan Username"
                        value={username}
                        onChangeText={(username) => this.setState({username})}/>
                    </View>

                    <View style={styles.wrapperInput}>
                        <Text>Password : </Text>
                        <TextInput style={styles.textInput} 
                        placeholder="Masukkan Password"
                        value={password}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}/>
                    </View>
                </View>

                <TouchableOpacity style={styles.Button} onPress={() => this.login()}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>

                {isLogin && (
                    <Text style={{marginTop: 20}}>
                        Selamat berhasil login : {username}
                    </Text>
                )}
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container : {padding: 30},
    title : {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    garis : {
        borderBottomWidth: 1,
        marginTop: 10
    },
    isi : {marginTop: 30},
    flexVertical : {
        flexDirection: 'row'
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        borderColor: 'grey',
        height: 40
    },
    wrapperInput : {
        marginTop: 10
    },
    Button: {
        marginTop: 20,
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 5,
    },
    textButton: {
        textAlign: 'center'
    }

})
