import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// SCREENS
import Home from './src/screens/Home'
import Browse from './src/screens/Browse'
import Medical from './src/screens/Medical'
import TabBar from './src/components/TabBar'
import HomeStack from './src/screens/HomeStack'
import BrowseStack from './src/screens/BrowseSrack'
import MedicalStack from './src/screens/MedicalStack'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name='Home Stack' component={HomeStack} />
        <Tab.Screen name='Medical Stack' component={MedicalStack} />
        <Tab.Screen name='Browse Stack' component={BrowseStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App