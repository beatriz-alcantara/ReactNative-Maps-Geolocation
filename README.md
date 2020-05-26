# React Native com mapa e geolocalização

## Tecnologias utilizadas
- React Native
- react-native-maps[https://github.com/react-native-community/react-native-maps]
- react-native-geolocation-service[https://github.com/Agontuk/react-native-geolocation-service]

## Preparação
### react-native-maps

Instalamos o pacote através do seguinte comando:

```sh
$ yarn add react-native-geolocation-service
```

Para as versões do react native acima ou igual de 0.60 não é preciso realizar o seguinte passo:
Arquivo: build.gradle

```sh
ext {
  compileSdkVersion   = 28
  buildToolsVersion   = "28.0.3"
  minSdkVersion       = 16
  targetSdkVersion    = 28

  // Any of the following will work
  googlePlayServicesVersion      = "17.0.0"
  // playServicesVersion         = "17.0.0"
  // playServicesLocationVersion = "17.0.0"
}
```


