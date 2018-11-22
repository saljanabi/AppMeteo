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
    // Pick document
    _pickDocument = async () => {
        // console.warn('info', 'ici');
        // console.log('info', 'ici');
        // const result = await DocumentPicker.getDocumentAsync({
        //     type: '*/*',
        // });
        console.log('info', 'app la');
        // console.warn('info', 'app la');

        // // JSON parser
        // if (result.type === 'cancel') return;
        // console.log('uri', result.uri);
        // try {
        //     const info = await FileSystem.getInfoAsync(result.uri);
        //     this.state = { data: info };
        //     console.warn('info', info);
        //     console.log('info', info);
        //     const content = await FileSystem.readAsStringAsync(result.uri).then(() => {
        //         let lines = content.split('\n');
        //         let res = [];
        //         for (var i = 1; i <= lines.length; i++) {
        //             columns = lines[i].split('\t');
        //             if (i == 1) {
        //                 titles = columns;
        //             } else {
        //                 res[i] = {};
        //                 for (var j = 0; j <= columns.length; j++) {
        //                     res[i][titles[j]] = columns[j];
        //                 }
        //             }
        //         }

        //     });
        //     console.log('content', content);
        //     console.log('res', res);
        //     this.state = { data: content };
        // } catch (e) {
        //     console.warn('exception', e.message);
        //     console.log('exception', e.message);
        //     this.state = { data: e.message };
        // }
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