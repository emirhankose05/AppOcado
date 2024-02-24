import { View, Text } from 'react-native'
import React from 'react'
import styles from "./ProfileBoxes.style"

interface ProfileBoxesProps {
  header: string,
  value: string,
}

const ProfileBoxes: React.FC<ProfileBoxesProps> = ({ header, value }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.header}>{header}</Text>
      <View style={styles.box} >
        <Text style={styles.value} > {value} </Text>
      </View>
    </View>
  )
}

export default ProfileBoxes