import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Operan from './Operan'

export default class StateProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Sekolah: 'Ghiffari Kemal Hidayat'
        }
    }

    gantiState(){
        this.setState({
            Sekolah: 'Kemal'
        })
    }
    
    render() {
        const {Sekolah} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Belajar State & Props</Text>
                <View style={styles.garis}/>

                {/* isi */}
                <View style={styles.isi}>
                  <Text>Ini adalah : { Sekolah }</Text>

                    <Operan Sekolah={Sekolah} />

                  <TouchableOpacity style={styles.tombol} onPress={() =>
                this.gantiState()}>
                      <Text style={{ textAlign: 'center' }}>Ganti State</Text>
                  </TouchableOpacity>
                </View>
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
    tombol : {
        backgroundColor: 'skyblue',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    }
})
