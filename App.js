import React from 'react';
import { View, Text } from 'react-native';
import { DocumentPicker, FileSystem } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FooterTabs from './components/footer/footer';
import StyleSheet from './src/style/styles';


const Weather = () => {
    state = {
        data: null,
    };
    _pickDocument = async () => {
    }
    return (
        <View style={StyleSheet.weatherContainer}>
            <View style={StyleSheet.headerContainer}>
                <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
                <Text style={StyleSheet.tempText}>AppMeteo˚</Text>
            </View>
            <View style={StyleSheet.bodyContainer}>
                <Text style={StyleSheet.paragraph}>
                    AppMeteo˚ est une application qui permet d'analyser des fichiers de données météorologiques sous React Native. Cette application est principalement destinée aux militaires qui travaillent en zone désertique. Une station méteo fournit des fichiers de données aux militaires. Elle capte la pluviométrie, la température, la vitesse du vent. Ces données vont servir aux militaires pour garer des hélicoptères ou faire voler les drones pour observer un territoire.
        </Text>
                <Text>{JSON.stringify(this.state.data)}</Text>
            </View>
            <FooterTabs />
        </View>
    );
};


export default Weather;