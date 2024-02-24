import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgOther from '../components/bgOther'
import { Back, Ekg, Heart } from '../svgS'
import { useNavigation } from '@react-navigation/native'


const Pulse = () => {
  const navigation = useNavigation()

  return (
    <View>
      <BgOther />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pulse</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.headerText}>Today</Text>
        <View style={{marginVertical:15}}></View>
        <View style={styles.bigBox}>
          <View style={styles.headerRow}>
            <Heart />
            <Text style={styles.headerMiniText} >Bpm</Text>
          </View>
          <View style={styles.headerRow}>
            <Text style={styles.headerMiniTextButNoMargin} >data </Text>
            <Text style={styles.bodyMiniText} >Kcal</Text>
          </View>
        </View>

        <View style={styles.bigBox}>
          <View style={styles.headerRow}>
            <Ekg />
            <Text style={styles.headerMiniText} >HRV</Text>
          </View>
          <View style={styles.headerRow}>
            <Text style={styles.headerMiniTextButNoMargin} >data </Text>
            <Text style={styles.bodyMiniText} >Km</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Pulse

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
  body:{
    alignSelf:'center',
    marginTop:50,
  },
  bigBox: {
    backgroundColor: '#CCD3AE',
    width: 360,
    height: 95,
    borderRadius: 20,
    marginBottom: 55,
  },
  bodyMiniText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#aaa'
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15
  },
  headerMiniText: {
    fontSize: 17,
    fontWeight: '900',
    marginLeft: 10,
    color: '#000'
  },
  headerMiniTextButNoMargin: {
    fontSize: 17,
    fontWeight: '900',
    color: '#000'
  },
})