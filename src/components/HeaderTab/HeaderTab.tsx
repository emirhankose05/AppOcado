import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./HeaderTab.style"
import { ProfileImage } from '../../svgS'
import { useNavigation } from '@react-navigation/native'

interface HeaderTabProps {
  value : string
}

const HeaderTab:React.FC<HeaderTabProps> = ({value}) => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={styles.header} >
                <Text style={styles.headerText} >{value}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Detail' as never)}>
                    <ProfileImage width={30} height={30} />
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default HeaderTab