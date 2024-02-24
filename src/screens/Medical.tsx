import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BgMain from '../components/bgMain'
import HeaderTab from '../components/HeaderTab'

const Medical = () => {
  return (
    <View>
      <BgMain/>
      <HeaderTab value="Medical ID" />
    </View>
  )
}

export default Medical

const styles = StyleSheet.create({})