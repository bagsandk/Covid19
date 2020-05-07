import React from 'react'
import { View, Text } from 'react-native'

const Cardglobal = (props) => {
    return (
        <View style={{ flex: 3, height: 110, backgroundColor: props.bcolor, padding: 7, justifyContent: 'space-around', marginHorizontal: 5, borderRadius: 10 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>{props.teks}</Text>
            <Text style={{ fontSize: 20, color: '#fff' }}>{props.value}</Text>
        </View>
    )
}

export default Cardglobal
