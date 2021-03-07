import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesainTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Belajar tampilan & flexboxxxxxx </Text>
                <View style={styles.garis}/>

                {/* isi */}
                <View style={styles.isi}>
                    <Text>Flex Direction Row (Vertical)</Text>
                    <View style={styles.flexVertical}>
                        <View style={styles.kotakMerah} />
                        <View style={styles.kotakBiru} />
                        <View style={styles.kotakKuning} />
                    </View>

                    <Text>Flex Direction Column (Horizontal)</Text>
                    <View>
                        <View style={styles.kotakMerah} />
                        <View style={styles.kotakBiru} />
                        <View style={styles.kotakKuning} />
                    </View>


                    <Text>Justify content</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.kotakMerah} />
                        <View style={styles.kotakBiru} />
                        <View style={styles.kotakKuning} />
                    </View>


                    <Text>Align Item</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={styles.kotakMerah} />
                        <View style={styles.kotakBiru} />
                        <View style={styles.kotakKuning} />
                    </View>
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
    kotakBiru : {
        height: 30,
        width: 30,
        backgroundColor: 'blue'
    },
    kotakMerah: {
        height: 80,
        width: 80,
        backgroundColor: 'red'
    },
    kotakKuning : {
        height: 80,
        width: 80,
        backgroundColor: 'yellow'
    },
})
