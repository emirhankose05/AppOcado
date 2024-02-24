import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgOther from '../components/bgOther'
import { useNavigation } from '@react-navigation/native'
import { Back } from '../svgS'


const Sleep = () => {
  const navigation = useNavigation()
  return (
    <View>
      <BgOther />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sleep</Text>
      </View>
      <Text style={[styles.headerText, { fontSize: 20 }]}>Sleep Stages</Text>
      <View style={styles.row}>
        
        <View style={styles.box}>
          <View style={[styles.circle, { borderColor: '#3DAFD2' }]}>
            <Text style={styles.data} >0%</Text>
          </View>
          <View style={styles.altTaraf}>
            <View style={styles.miniCircle}></View>
            <Text style={styles.dataAlt} >Light Sleep</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { borderColor: '#3DAFD2' }]}>
            <Text style={styles.data} >0%</Text>
          </View>
          <View style={styles.altTaraf}>
            <View style={styles.miniCircle}></View>
            <Text style={styles.dataAlt} >Light Sleep</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={[styles.circle, { borderColor: '#3DAFD2' }]}>
            <Text style={styles.data} >0%</Text>
          </View>
          <View style={styles.altTaraf}>
            <View style={styles.miniCircle}></View>
            <Text style={styles.dataAlt} >Light Sleep</Text>
          </View>
        </View>


      </View>
    </View>
  )
}

export default Sleep

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
  circle: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d9d9d9',
    borderWidth: 8,
    borderRadius: 10000,
  },
  data: {
    color: '#000',
    fontWeight: '900',
    fontSize: 25,
  },
  miniCircle:{
    width:30,
    height:30,
    backgroundColor:'transparent',
    borderRadius:100,
    borderWidth:7,
  },
  altTaraf:{
    flexDirection:'row',
    alignItems:'center',
  },
  row:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'space-between',
  },
  box:{
    width:'33%',
  },
  dataAlt: {
    color: '#000',
    fontWeight: '900',
    fontSize: 25,
    width:'50%'
  },
})