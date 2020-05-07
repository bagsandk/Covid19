import React from 'react'
import { FlatList, Image, TouchableWithoutFeedback, View, ActivityIndicator, Text } from 'react-native'
import _fetch from '../../components/fetch'
import { darkindigo, diamond, gooseberry } from '../../config/color'
import { TextInput } from 'react-native-gesture-handler'

const Provinsi = (props) => {
    const [load, setload] = React.useState(true)
    const [prov, setprov] = React.useState(null)
    const [filterprov, setfilterprov] = React.useState(null)
    React.useEffect(() => {
        try {
            fetch('https://api.kawalcorona.com/indonesia/provinsi', {
                method: 'GET',
            }).then(response => response.json()).then(response => {
                console.log(response)
                setprov(response)
                setfilterprov(response)
                setload(false)
            })
        } catch (error) {
            console.error(error);
        }
    }, [])
    const renfooter = () => {
        if (load == false) return null
        return (
            <ActivityIndicator />
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: darkindigo }}>
            <View style={{ height: 80, backgroundColor: darkindigo, padding: 20, alignItems: 'center', position: 'relative' }}>
                <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Home') }} >
                    <Image source={require('../../img/back.png')} style={{ width: 35, height: 35, position: 'absolute', left: 20, top: 20 }} />
                </TouchableWithoutFeedback>
                <View>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Provinsi Kasus</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: diamond, borderTopEndRadius: 30, borderTopStartRadius: 30, padding: 20, }}>
                <FlatList
                    data={prov}
                    renderItem={({ item, }) => <_fetch item={item.attributes} />}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={renfooter()}
                />

            </View>
        </View >
    )
}

export default Provinsi
