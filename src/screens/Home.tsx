import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Back, Bicycle, Heart, Hour, Moon, ProfileImage, Pulse, Step, Weight } from '../svgS'
import BgMain from '../components/bgMain'
import HeaderTab from '../components/HeaderTab'

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <BgMain />
            <HeaderTab value="Home"/>
            <View style={styles.body}>
                <View style={styles.rowBoxes}>
                    <View style={styles.box}>
                        <View style={styles.headerRow}>
                            <Pulse />
                            <Text style={styles.headerMiniText} >Height</Text>
                        </View>
                        <View style={styles.headerRow}>
                            <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                            <Text style={styles.bodyMiniText} >Meter</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.headerRow}>
                            <Weight />
                            <Text style={styles.headerMiniText} >Weight</Text>
                        </View>
                        <View style={styles.headerRow}>
                            <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                            <Text style={styles.bodyMiniText} >Kilos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Step />
                        <Text style={styles.headerMiniText} >Step</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                        <Text style={styles.bodyMiniText} >Steps</Text>
                    </View>
                </View>
                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Moon />
                        <Text style={styles.headerMiniText} >Sleep</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                        <Text style={styles.bodyMiniText} >Hours</Text>
                    </View>
                </View>
                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Heart/>
                        <Text style={styles.headerMiniText} >Heart Rate</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                        <Text style={styles.bodyMiniText} >h/min</Text>
                    </View>
                </View>
                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Hour/>
                        <Text style={styles.headerMiniText} >Medicine Time</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >none </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 22,
        marginTop: 20
    },
    headerText: {
        fontSize: 25,
        fontWeight: '900',
    },
    body: {
        paddingHorizontal: 22,
    },
    rowBoxes: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 35
    },
    box: {
        backgroundColor: '#CCD3AE',
        width: 155,
        height: 95,
        borderRadius: 20,
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
    bigBox: {
        backgroundColor: '#CCD3AE',
        width: 360,
        height: 95,
        borderRadius: 20,
        marginBottom: 35,
    },
    bodyMiniText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#aaa'
    }
})