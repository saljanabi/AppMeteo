import React from 'react';
import { View, Text } from 'react-native';
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
        {/* <View style={StyleSheet.headerContainer}> */}
        {/* </View> */}
        <View style={StyleSheet.bodyContainer}>
        <Text style={StyleSheet.Title}><MaterialCommunityIcons name="weather-sunny" style={StyleSheet.Icon} /> AppMeteo˚</Text>
        <Text style={StyleSheet.paragraph}>
        AppMeteo˚ est une application qui permet d'analyser des fichiers de données météorologiques sous React Native. Cette application est principalement destinée aux militaires en zone désertique. Elle capte la pluviométrie, la température, la vitesse du vent qui vont servir aux militaires pour garer des hélicoptères ou faire voler les drones pour observer un territoire.{"\n"}{"\n"}
        Le premier onglet permet de sélectionner un fichier au format .HIS dans le dossier « Téléchargements » et de le transférer vers un dossier sûr qui empêchera l'utilisateur de le sélectionner et de le supprimer  uniquement à travers l'interface. Le fichier sera renommé à l'upload avec la date.{"\n"}{"\n"}
        Cet onglet permet d'afficher trois types de graphiques :{"\n"}
        - Un premier graphique de type basic line qui présente la moyenne par heure. Il est téléchargeable au format .PNG avec une légende.{"\n"}
        - Un deuxième graphique de type timeseries qui présente la totalité des données de la journée pour un type de données sélectionné par l'utilisateur.{"\n"}
        - Un troisième graphique de type wind rose créé avec l'information LOCAL_WD_2MIN_MNM.
        </Text>
        <FooterTabs />
        {/* <Text>{JSON.stringify(this.state.data)}</Text> */}
        </View>
        </View>
        );
    };
    
    
    export default Weather;