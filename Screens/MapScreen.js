import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
class MapScreen extends Component {
    
  state = {
    mapLoaded: false,
    region: {
      longitude:  77.3382,
      latitude: 28.6433,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
 componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }
  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        </View>
        );
     }
}
export default MapScreen;