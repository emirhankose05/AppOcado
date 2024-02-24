import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgMain from '../components/bgMain'
import { useNavigation } from '@react-navigation/native'
import { Medicina, Menstural, Nutrition, ProfileImage, Pulse, RightArrow, Sleep, Step } from '../svgS'
import DailyActivity from './DailyActivity'

const Browse = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container} >
      <BgMain />
      <View style={styles.header} >
        <Text style={styles.headerText} >Browse</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Detail' as never)}>
          <ProfileImage width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>Healt Categories</Text>
        <View style={styles.body}>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DailyActivity' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Step />
                <Text style={styles.ButtonText} > Daily Activity </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nutrition' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Nutrition />
                <Text style={styles.ButtonText} > Nutrition </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Medicine' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Medicina />
                <Text style={styles.ButtonText} > Medicine </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sleep' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Sleep />
                <Text style={styles.ButtonText} > Sleep </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pulse' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Pulse />
                <Text style={styles.ButtonText} > Pulse </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MensturalCycle' as never)} >
            <View style={styles.row}>
              <View style={styles.leftRow} >
                <Menstural/>
                <Text style={styles.ButtonText} > Menstural Cycle </Text>
              </View>
              <RightArrow />
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default Browse

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 20,
    marginBottom: 45,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '900',
  },
  bodyContainer: {
    paddingHorizontal: 40,
  },
  body: {
    backgroundColor: '#CCD3AE',
    borderRadius: 10,
    marginTop:12,
    paddingBottom:80
  },
  button: {
    borderBottomWidth: 1,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    marginHorizontal: 10,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '900'
  }

})