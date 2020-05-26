/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const App: () => React$Node = () => {
  const [minhaLocalizacao, setMinhaLocalizacao] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  })

  useEffect(() => {
    Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setMinhaLocalizacao({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          })
          console.log('minha localização => ', minhaLocalizacao);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, [])

  const [posicaoMarcador, setPosicaoMarcador] = useState({
    latitude: minhaLocalizacao.latitude,
    longitude: minhaLocalizacao.longitude
  })
  const getLocalizacao = (cord) => {
    console.log('cords => ', cord)
    setPosicaoMarcador(cord.coordinate)
  }

  return (
    <>
      <MapView
        region={minhaLocalizacao}
        style={{ width: 400, height: 500}}
        showsUserLocation={true}
        showsMyLocationButton={true}
        moveOnMarkerPress={true}
        onPress={(position) => getLocalizacao(position.nativeEvent)}
      >
        <Marker
          coordinate={posicaoMarcador}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
