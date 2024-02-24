import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Back } from '../svgS'
import BgMain from '../components/bgMain'
import SvgProfileImageBig from '../svgS/ProfileImageBig'
import ProfileBoxes from '../components/ProfileBoxes'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <BgMain />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Back />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.ppBg}>
          <SvgProfileImageBig width={200} height={200} />
        </View>
        <ProfileBoxes header="Name" value="Emirhan" />
        <ProfileBoxes header="Surname" value="Köse" />
        <ProfileBoxes header="Birth" value="01/01/2002" />
        <ProfileBoxes header="Gender" value="Man" />
        <ProfileBoxes header="Blood Group" value="0+" />
        <ProfileBoxes header="Height" value="179" />
        <ProfileBoxes header="Weight" value="72" />
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  ppBg: {
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: '#CCD3AE',
    alignSelf: 'center',
    marginTop: 12,
  },

})