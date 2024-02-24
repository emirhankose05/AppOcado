import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BgOther from '../components/bgOther'
import { Back, Bicycle, Calori, Step, Swim, Weight } from '../svgS'
import { useNavigation } from '@react-navigation/native'

const DailyActivity = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <BgOther />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Back />
                </TouchableOpacity>
                <Text style={styles.headerText}>Daily Activities</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>Today</Text>

                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Calori />
                        <Text style={styles.headerMiniText} >Callories</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                        <Text style={styles.bodyMiniText} >Kcal</Text>
                    </View>
                </View>

                <View style={styles.bigBox}>
                    <View style={styles.headerRow}>
                        <Step />
                        <Text style={styles.headerMiniText} >Walking And Running data</Text>
                    </View>
                    <View style={styles.headerRow}>
                        <Text style={styles.headerMiniTextButNoMargin} >data </Text>
                        <Text style={styles.bodyMiniText} >Km</Text>
                    </View>
                </View>

                <View style={styles.circles}>
                    <TouchableOpacity style={styles.circle}>
                        <Step />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Bicycle />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Swim />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}>
                        <Weight />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DailyActivity

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        marginBottom: 55,
    },
    bodyMiniText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#aaa'
    },
    circles: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    circle: {
        backgroundColor: '#d9d9d9',
        borderRadius: 100,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyText:{
        marginTop:50,
        marginBottom:10,
        fontWeight:'900',
        fontSize:25,
    }
})