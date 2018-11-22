import React, { Component } from 'react';
import { Footer, FooterTab, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DocumentPicker, FileSystem } from 'expo';
import StyleSheet from '../../src/style/styles';

export default class FooterTabs extends Component {
  state = {
    data: null,
  };
  // Pick document
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
    });

    if (result.type === 'cancel') {
      console.log('cancel');
      return;
    }

    const info = await FileSystem.getInfoAsync(result.uri);
    this.state = { data: info };
    const content = await FileSystem.readAsStringAsync(result.uri);
    
    let lines = content.split('\n');

    let res = [];
    let i = 1;
    let j = 0;
    while (lines[i]) {
      columns = lines[i].split('\t');
      if (i == 1) {
        //1ere itération de la boucle : on récupere le titre des colonnes
        titles = columns;
      } else {
        res[i - 2] = {};
        //Pour chaque colonne, on enregistre dans res[i][titre] la valeur associée
        j = 0;
        while (columns[j]) {
          res[i - 2][titles[j]] = columns[j];
          j++;
        }
      }
      i++;
    }
    let filename = res[2].CREATEDATE;

    console.log('res 2 = ', res[2]);
    console.log('filename', filename);
    this.state = { data: res };
  }
  render() {
    return (
      <Footer style={StyleSheet.footer}>
      <FooterTab>
      <Button
      onPress={async () => {
        this._pickDocument();
      }}>
      <MaterialCommunityIcons size={30} name="cloud-upload" style={StyleSheet.tabsIcons} />
      </Button>
      <Button>
      <MaterialCommunityIcons size={30} name="monitor-dashboard" style={StyleSheet.tabsIcons} />
      </Button>
      <Button>
      <MaterialCommunityIcons size={30} name="delete-circle" style={StyleSheet.tabsIcons} />
      </Button>
      </FooterTab>
      </Footer>
      );
    }
  }