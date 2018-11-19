import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DocumentPicker, FileSystem } from 'expo';
import { func } from 'prop-types';
import { FooterTabs } from './components/footer/footer';
import { Content, Card, CardItem, Body } from "native-base";
import { MainDrawer } from "./components/drawer/drawer";


const Weather = () => {
    state = {
        data: null,
    };
    // Pick document
    _pickDocument = async () => {
        const result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
        });
        // JSON parser
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
        style={styles.uploadFile}
        title="Click"
        onPress={async () => {
            _pickDocument();
        }}
        />
        <Content padder>
        <Card>
        <CardItem header bordered>
        <Text>NativeBase</Text>
        </CardItem>
        <CardItem bordered>
        <Body>
        <Text>
        NativeBase is a free and open source framework that enable
        developers to build
        high-quality mobile apps using React Native iOS and Android
        apps
        with a fusion of ES6.
        </Text>
        </Body>
        </CardItem>
        <CardItem footer bordered>
        <Text>GeekyAnts</Text>
        </CardItem>
        </Card>
        </Content>
        <Text>{JSON.stringify(this.state.data)}</Text>
        <Text style={styles.title}>So Sunny</Text>
        <Text style={styles.subtitle}>It hurts my eyes!</Text>
        { FooterTabs }
        { MainDrawer }
        </View>
        </View>
        );    
    };
    
    const styles = StyleSheet.create({
        weatherContainer: {
            flex: 1,
            backgroundColor: '#FFB600'
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
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 25,
            marginBottom: 40
        },
        title: {
            fontSize: 48,
            color: '#fff'
        },
        subtitle: {
            fontSize: 24,
            color: '#000'
        }
    });
    
    export default Weather;