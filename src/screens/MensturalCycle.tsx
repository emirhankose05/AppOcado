import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgOther from '../components/bgOther'
import { useNavigation } from '@react-navigation/native'
import { Back } from '../svgS'

const MensturalCycle = () => {
  const navigation = useNavigation()
  return (
    <View>
      <BgOther />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Menstural Cycle</Text>
      </View>
    </View>
  )
}

export default MensturalCycle

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '900',
    marginLeft: 10,
  },
})