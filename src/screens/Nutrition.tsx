import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgOther from '../components/bgOther'
import { useNavigation } from '@react-navigation/native'
import { Back, Calori, Feet, Foodcatal, Step, Water } from '../svgS'
const Nutrition = () => {
  const navigation = useNavigation()
  return (
    <View>
      <BgOther />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Nutrition</Text>
      </View>

      <View style={styles.body}>

        <View style={styles.leftSide}>
          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Needed</Text>
            <View style={styles.leftSideside}>
              <Calori width={13} height={13} />
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Exercise</Text>
            <View style={styles.leftSideside}>
              <Calori width={13} height={13} />
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Step</Text>
            <View style={styles.leftSideside}>
              <Feet width={13} height={13} />
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Water</Text>
            <View style={styles.leftSideside}>
              <Water width={13} height={13} />
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.justify}>
            <Text style={styles.data}>0</Text>
            <Text style={styles.dataValue}>callories</Text>
          </View>
          <Text style={styles.dataValue}>Left</Text>
          <Text style={styles.kalanValue}>0</Text>
        </View>

        <View style={styles.rightSide}>
          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Morning</Text>
            <View style={styles.rightSideside}>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>

          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>AfterNoon</Text>
            <View style={styles.rightSideside}>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>

          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Evening</Text>
            <View style={styles.rightSideside}>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>

          <View style={styles.leftSideBox}>
            <Text style={styles.boxHeader}>Morning</Text>
            <View style={styles.rightSideside}>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
        </View>


      </View>
      <View style={styles.footer}>
        <View style={styles.valuesRow}>
          <Text style={styles.dataValue}>Carbonhydrate</Text>
          <Text style={styles.dataValue}>0/0g</Text>
        </View>
        <View style={styles.dataStick}></View>

        <View style={styles.valuesRow}>
          <Text style={styles.dataValue}>Protein</Text>
          <Text style={styles.dataValue}>0/0g</Text>
        </View>
        <View style={styles.dataStick}></View>

        <View style={styles.valuesRow}>
          <Text style={styles.dataValue}>Oil</Text>
          <Text style={styles.dataValue}>0/0g</Text>
        </View>
        <View style={styles.dataStick}></View>
      </View>
    </View>
  )
}

export default Nutrition

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
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#CCD3AE',
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 6,
    paddingVertical: 50,
    marginTop:25,
  },
  /////////////////
  leftSide: {
    width: '17%'
  },
  leftSideBox: {
    marginTop: 10,
  },
  boxHeader: {
    color: '#00000070',
    fontWeight: '900',
    fontSize: 13,
  },
  leftSideside: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxValue: {
    color: '#000000',
    fontWeight: '900',
    fontSize: 13,
    marginLeft: 8
  },
  ////////////////////////
  center: {
    width: 200,
    height: 200,
    backgroundColor: '#d9d9d9',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    alignSelf: 'center',
    borderWidth: 6,
    borderColor: '#4D11CC',
  },
  justify: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 25
  },
  data: {
    fontSize: 30,
    fontWeight: '900',
    color: '#000000',
  },
  dataValue: {
    fontWeight: '900',
    color: '#00000065',
  },
  kalanValue: {
    fontSize: 20,
    fontWeight: '900',
    color: '#000000',
  },
  ///////////////////
  rightSide: {
    width: '17%',
  },
  rightSideside: {
    alignItems: 'flex-end',
  },
  /////////////////
  footer: {
    marginHorizontal: 12,
    marginTop: 25,
  },
  valuesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5
  },
  footerData: {},
  dataStick: {
    height: 20,
    borderRadius: 100,
    backgroundColor: '#CCD3AE',
    marginBottom: 15
  }

})