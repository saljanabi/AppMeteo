import React { Component } from 'react';
import { View, Footer, FooterTab, Button } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyleSheet from '..../src/style/styles';

export default class FooterTabs extends Component {
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
        for (var i = 1; i <= lines.length; i++) {
          columns = lines[i].split('\t');
          if (i == 1) {
            titles = columns;
          } else {
            res[i] = {};
            for (var j = 0; j <= columns.length; j++) {
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
  render() {
    return (
      <View style={StyleSheet.footer}>
      <Footer>
      <FooterTab>
      <Button
      onPress={async () => {
        _pickDocument();
      }}>
      <MaterialCommunityIcons size={30} name="cloud-upload" color={'#fff'} />
      </Button>
      <Button>
      <MaterialCommunityIcons size={30} name="monitor-dashboard" color={'#fff'} />
      </Button>
      <Button>
      <MaterialCommunityIcons size={30} name="delete-circle" color={'#fff'} />
      </Button>
      </FooterTab>
      </Footer>
      </View>
      );
    }
  }