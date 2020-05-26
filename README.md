# React Native com mapa e geolocalização

## Tecnologias utilizadas
- React Native
- [react-native-maps](https://github.com/react-native-community/react-native-maps)
- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service)

## Preparação
### react-native-maps

Instalamos o pacote através do seguinte comando:

```sh
$ yarn add react-native-geolocation-service
```

Devemos adicionar o seguinte código em `android/app/src/main/AndroidManifest.xml`

``` xml
<application>
   <meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="Sua API KEY do google maps"/>

  <!-- You will also only need to add this uses-libray tag -->
  <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

Para as versões do react native superior ou igual a 0.60 não é preciso realizar o seguinte passo:

Arquivo: build.gradle

```
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
### react-native-geolocation-service

Instalamos o pacote com o comando:

``` sh
$ yarn add react-native-geolocation-service
```

Devemos adicionar as permissões no arquivo `android/app/src/main/AndroidManifest.xml`

```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

