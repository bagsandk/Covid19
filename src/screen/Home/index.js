import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Cardglobal from '../../components/cardglobal'
import Cardindo from '../../components/cardindo'
import { darkindigo, diamond } from '../../config/color'
import AsyncStorage from '@react-native-community/async-storage'
import Api from '../../api'

const Home = (props) => {
    const [gmeninggal, setgmeninggal] = React.useState(null)
    const [gsembuh, setgsembuh] = React.useState(null)
    const [gpositif, setgpositif] = React.useState(null)
    const [indo, setindo] = React.useState({ 'positif': null, 'sembuh': null, 'meninggal': null })
    const [load, setload] = React.useState(null)
    React.useEffect(() => {
        try {
            fetch('https://api.kawalcorona.com/positif', {
                method: 'GET',
            }).then(response => response.json()).then(response => {
                console.log(response)
                setgpositif(response.value
                )
            })
            fetch('https://api.kawalcorona.com/sembuh', {
                method: 'GET',
            }).then(response => response.json()).then(response => {
                console.log(response)
                setgsembuh(response.value
                )
            })
            fetch('https://api.kawalcorona.com/meninggal', {
                method: 'GET',
            }).then(response => response.json()).then(response => {
                console.log(response)
                setgmeninggal(response.value)
            })
            fetch('https://api.kawalcorona.com/indonesia', {
                method: 'GET',
            }).then(response => response.json()).then(response => {
                console.log(response[0])
                setindo(response[0])
            })
        } catch (error) {
            console.error(error);
        }
    }, [])
    return (
        <ScrollView style={{ backgroundColor: diamond }}>
            <View style={{ flex: 1, backgroundColor: darkindigo }}>
                <View style={{ height: 300, backgroundColor: darkindigo, padding: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>Covid-19</Text>
                    <Text style={{ color: '#fff', fontSize: 20 }}>Global Kasus</Text>
                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <Cardglobal value={gpositif} bcolor={"#ffac0e"} teks={"Positif"} />
                        <Cardglobal value={gsembuh} bcolor={"#7ec544"} teks={"Sembuh"} />
                        <Cardglobal value={gmeninggal} bcolor={"#ea2336"} teks={"Meninggal"} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: diamond, borderTopEndRadius: 30, borderTopStartRadius: 30, padding: 20, }}>
                    <Text style={{ fontSize: 22 }}>Indonesia Kasus</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={{
                            flex: 1, height: 350, borderRadius: 10, backgroundColor: diamond, paddingVertical: 16, paddingHorizontal: 10, borderRadius: 20, position: 'relative', shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, hadowRadius: 4.65, elevation: 8,
                        }}>
                            <Cardindo value={indo.positif} bcolor={"#ffac0e"} teks={"Positif"} />
                            <Cardindo value={indo.sembuh} bcolor={"#7ec544"} teks={"Sembuh"} />
                            <Cardindo value={indo.meninggal} bcolor={"#ea2336"} teks={"Meninggal"} />
                            <View style={{ alignItems: "center", marginTop: 10, position: 'absolute', right: 0, top: -22, }}>
                                <TouchableWithoutFeedback onPress={() => { props.navigation.navigate('Provinsi') }}>
                                    <Text style={{ backgroundColor: darkindigo, color: '#fff', paddingHorizontal: 7, paddingVertical: 4, borderRadius: 8, fontSize: 10 }}>Lihat Provinsi</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

