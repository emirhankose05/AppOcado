import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import Detail from './Profile'
import Medical from './Medical'

const Stack = createNativeStackNavigator()

const MedicalStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Medical' component={Medical} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default MedicalStack