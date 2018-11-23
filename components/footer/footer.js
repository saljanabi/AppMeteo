import React, { Component } from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DocumentPicker, FileSystem} from 'expo';
import StyleSheet from '../../src/style/styles';
import HighchartAverageHour from '../highcharts/averagehour';
// import {createStackNavigator} from 'react-navigation';
// import { checkPropTypes } from 'prop-types';

export default class FooterTabs extends Component {
  state = {
    data: null,
  };
  // Initialisation de la méthode pickDocument qui permet de sélectionner un fichier dans le répertoire Download de l'appareil
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
    });
    // Si sélection valide alors on quitte le dossier en cours pour afficher l'onglet principal de l'app
    if (result.type === 'cancel') {
      alert("Aucun fichier n'est chargé !");
      return;
    }
    // Récupération du contenu du fichier qui sera utilisé dans le parser json ensuite. 
    const content = await FileSystem.readAsStringAsync(result.uri);
    
    // Chaque valeur de ligne du fichier sera séparé par un saut de ligne
    let lines = content.split('\n');
    //On initialise notre tableau avec res
    let res = [];
    let i = 1;
    let j = 0;
    while (lines[i]) {
      columns = lines[i].split('\t');
      if (i == 1) {
        //Première itération de la boucle : on récupere le titre des colonnes
        titles = columns;
      } else {
        res[i - 2] = {};
        //Seconde itération de la boucle : pour chaque colonne, on enregistre dans res[i][titre] la valeur associée
        j = 0;
        while (columns[j]) {
          res[i - 2][titles[j]] = columns[j];
          j++;
        }
      }
      i++;
    }
    
    // On crée la variable locale dir qui permet d'initialiser le dossier de cache utilisé par Expo et le dossier meteo-etna qui va enregistrer notre tableau de données en .json
    let dir = FileSystem.cacheDirectory + 'meteo-etna';
    // On crée la variable locale filename qui enregistre un fichier en récupérant la première valeur de la colonne CREATEDATE pour créer le nom et on attribue au fichier l'extension en json
    let filename = res[0].CREATEDATE + '.json';
    // Conversion de res qui contient nos colonnes avec leurs valeurs en chaîne JSON
    let json = JSON.stringify(res);
    
    console.log(dir);
    console.log(FileSystem.cacheDirectory);

  
    console.log('res 2 = ', res[2]);
    console.log('filename', filename);
    
    FileSystem.writeAsStringAsync(dir + filename, json);
    this.state = { 
      data: res,
      filename : filename
    };
  }
  render() {
    return (
      <Footer style={StyleSheet.footer}>
      <FooterTab>
      <Button
      onPress={async () => {
        this._pickDocument();
      }}>
      <MaterialCommunityIcons name="cloud-upload" style={StyleSheet.tabsIcons} />
      </Button>
      <Button
      onPress={async () => {
        HighchartAverageHour();
      }}>
      <MaterialCommunityIcons name="monitor-dashboard" style={StyleSheet.tabsIcons} />
      </Button>
      <Button>
      <MaterialCommunityIcons name="delete-circle" style={StyleSheet.tabsIcons} />
      </Button>
      </FooterTab>
      </Footer>
      );
    }
  }