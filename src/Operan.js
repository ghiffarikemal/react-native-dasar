import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Operan extends Component {
    render() {
        return (
            <View>
                <Text> Ini adalah props : {this.props.Sekolah} </Text>
            </View>
        )
    }
}

export default Operan
