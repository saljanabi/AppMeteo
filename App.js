import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DocumentPicker, FileSystem } from 'expo';
import { func } from 'prop-types';

const Weather = () => {
    state = {
        data: null,
    };
    _pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
        });
        if (result.type === 'cancel') return;
        console.log('uri', result.uri);
        try {
            const info = await FileSystem.getInfoAsync(result.uri);
            this.state = { data: info };
            console.warn('info', info);
            console.log('info', info);
            const content = await FileSystem.readAsStringAsync(result.uri).then(() => {
                let lines = content.split('\n');
                let res = [];
                for(var i = 1; i <= lines.length; i++){
                    columns = lines[i].split('\t');
                    if (i == 1){
                        titles = columns;
                    } else {
                        res[i] = {};
                        for(var j = 0; j <= columns.length; j++){
                            res[i][titles[j]] = columns[j];
                        }
                    }
                }

            });
            console.log('content', content);
            console.log('res', res);
            this.state = { data: content };
        } catch (e) {
            console.warn('exception', e.message);
            console.log('exception', e.message);
            this.state = { data: e.message };
        }
    }
    
    return (
        <View style={styles.weatherContainer}>
        <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
        <Text style={styles.tempText}>AppMeteo˚</Text>
        </View>
        <View style={styles.bodyContainer}>
        <Button
        title="Click"
        onPress={async () => {
            _pickDocument();
        }}
        />
        <Text>{JSON.stringify(this.state.data)}</Text>  
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
        </View>
        );    
    };
    
    const styles = StyleSheet.create({
        weatherContainer: {
            flex: 1,
            backgroundColor: '#f7b733'
        },
        headerContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        tempText: {
            fontSize: 48,
            color: '#fff'
        },
        bodyContainer: {
            flex: 2,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingLeft: 25,
            marginBottom: 40
        },
        title: {
            fontSize: 48,
            color: '#fff'
        },
        subtitle: {
            fontSize: 24,
            color: '#fff'
        }
    });
    
    export default Weather;