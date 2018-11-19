import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';

export default class UploadFab extends Component {
  constructor() {
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="fa-upload" />
            </Button>
          </Fab>
        </View>
    );
  }