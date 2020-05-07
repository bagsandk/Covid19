import React from 'react'
import { View, Text } from 'react-native'

const Cardindo = (props) => {
    return (
        <View style={{ backgroundColor: props.bcolor, marginVertical: 8, flex: 3, borderRadius: 15, justifyContent: 'space-between', flexDirection: 'row', alignItems: "center", padding: 20 }}>
            <Text style={{ color: '#fff', fontSize: 16 }}>{props.teks}</Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>{props.value}</Text>
        </View>
    )
}

export default Cardindo
