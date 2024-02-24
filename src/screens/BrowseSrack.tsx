import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import Detail from './Profile'
import Browse from './Browse'
import Profile from './Profile'
import DailyActivity from './DailyActivity'
import Nutrition from './Nutrition'
import Medicine from './Medicine'
import Sleep from './Sleep'
import Pulse from './Pulse'
import MensturalCycle from './MensturalCycle'


const Stack = createNativeStackNavigator()

const BrowseStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Browse' component={Browse} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='DailyActivity' component={DailyActivity}/>
            <Stack.Screen name='Nutrition' component={Nutrition}/>
            <Stack.Screen name='Medicine' component={Medicine}/>
            <Stack.Screen name='Sleep' component={Sleep}/>
            <Stack.Screen name='Pulse' component={Pulse}/>
            <Stack.Screen name='MensturalCycle' component={MensturalCycle}/>
        </Stack.Navigator>
    )
}

export default BrowseStack