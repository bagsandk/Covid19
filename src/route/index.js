import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home, Provinsi } from '../screen'
const Stack = createStackNavigator();
const Route = () => {
    return (
        <NavigationContainer>
            < Stack.Navigator initialRouteName="Home" headerMode='none' >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Provinsi" component={Provinsi} />
            </Stack.Navigator>
        </NavigationContainer >
    );

}
export default Route