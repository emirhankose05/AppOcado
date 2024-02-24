import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import styles from "./TabBar.style"
import { BrowseTab, BrowseTabTouched, HomeTab, HomeTabTouched, MedicalIdTab, MedicalIdTabTouched } from '../../svgS'

interface TabBarProps {
  state: any,
  descriptors: any,
  navigation: any
}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <View key={label} style={styles.menuButtons} onTouchStart={onPress} >
            {label === 'Home Stack' && isFocused &&  <HomeTabTouched width={50} height={50}  />}
            {label === 'Home Stack' && !isFocused && <HomeTab width={30} height={30} />}

            {label === 'Browse Stack' && isFocused && <BrowseTabTouched width={50} height={50} />}
            {label === 'Browse Stack' && !isFocused && <BrowseTab width={30} height={30} />}

            {label === 'Medical Stack' && isFocused && <MedicalIdTabTouched width={50} height={50} />}
            {label === 'Medical Stack' && !isFocused && <MedicalIdTab width={30} height={30} />}
          </View>
        );
      })}
    </View>
  )
}

export default TabBar