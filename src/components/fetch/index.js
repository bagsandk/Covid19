import React from 'react'
import { View, Text } from 'react-native'
import { darkindigo, diamond } from '../../config/color'

const _fetch = (props) => {
    return (
        <View style={{ backgroundColor: darkindigo, height: 150, borderRadius: 15, marginVertical: 10, padding: 10, }}>
            <Text style={{ color: '#fff', marginBottom: 20, fontSize: 20 }}>{props.item.Provinsi}</Text>
            <View style={{ flexDirection: 'row', alignSelf: "center", }}>
                <View style={{ backgroundColor: '#ffac0e', flex: 3, height: 60, padding: 4, marginHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#fff', }}>Positif</Text>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'right' }}>{props.item.Kasus_Posi}</Text>
                </View>
                <View style={{ backgroundColor: '#7ec544', flex: 3, height: 60, padding: 4, marginHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#fff', }}>Sembuh</Text>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'right' }}>{props.item.Kasus_Semb}</Text>
                </View>
                <View style={{ backgroundColor: '#ea2336', flex: 3, height: 60, padding: 4, marginHorizontal: 10, justifyContent: 'space-between' }}>
                    <Text style={{ color: '#fff', }}>Meninggal</Text>
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'right' }}>{props.item.Kasus_Meni}</Text>
                </View>
            </View>
        </View>
    )
}

export default _fetch
