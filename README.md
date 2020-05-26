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

## No Código

Para pegar a localização atual do usuário iremos utilizar o objeto Geolocation do pacote `react-native-geolocation-service`

``` javascript
import Geolocation from 'react-native-geolocation-service';

const App = () => {
const [minhaLocalizacao, setMinhaLocalizacao] = useState({})

useEffect(() => {
    Geolocation.getCurrentPosition(
        (position) => {
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
}
```

Os parâmetros do método `getCurrentPosition(sucesso(), erro(), opções)`

Para utilizar a localização obtida vamos usar o component MapView do pacote `react-native-maps`


``` javascript
import MapView from 'react-native-maps'


const App = () => {
...
   return (
      <>
      <MapView
        region={minhaLocalizacao}
        style={{ width: 400, height: 500}}
        showsUserLocation={true}
        onPress={(position) => getLocalizacao(position.nativeEvent)}
      />
    </>
   )
}

```

Com isso temos um mapa que marca a sua localização inicial.

Se você tirar o atributo `style={{ width: 400, height: 500}}` talvez o mapa não apareça.




