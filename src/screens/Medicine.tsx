import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import BgOther from '../components/bgOther';
import { useNavigation } from '@react-navigation/native';
import { Back, Hour, SearchIcon } from '../svgS';

const Medicine: React.FC = () => {
  const navigation = useNavigation();
  const [text, setText] = useState<string>('');

  const handleChangeText = (inputText: string) => {
    setText(inputText);
  };

  return (
    <View>
      <BgOther />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Medicines</Text>
      </View>
      <View style={styles.center}>
        <Image source={require("../pngS/medicines.png")} style={styles.image} />
        <Text style={styles.headerText}>Medicine name</Text>
        <View style={styles.textInputBg}>
          <SearchIcon />
          <TextInput
            value={text}
            onChangeText={handleChangeText}
            placeholder="Add medicine name"
            placeholderTextColor={'#00000080'}
            style={styles.textInput}
          />
        </View>
        <Text style={styles.text} >Create Medication Reminder</Text>
        <View style={styles.reminderBg}>
          <Hour />
          <Text style={styles.value}>Add a Reminder</Text>
        </View>
      </View>
    </View>
  );
};

export default Medicine;

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
  center: {
    alignSelf: 'center',
    alignItems: 'center'
  },
  image: {
    width: 168,
    height: 164,
    marginTop: 25,
  },
  textInputBg: {
    backgroundColor: '#CCD3AE',
    width: '90%',
    height: 41,
    borderRadius: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    width: 270,
    height: 40,
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    alignSelf: 'flex-start',
    marginTop: 50,
    color: '#00000060',
    fontWeight: '900',
    fontSize: 15,
  },
  value: {
    alignSelf: 'flex-start',
    marginTop: 50,
    color: '#00000060',
    fontWeight: '900',
    fontSize: 15,
  },
  reminderBg: {
    backgroundColor: '#CCD3AE',
    height: 41,
    borderRadius: 50,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
});
