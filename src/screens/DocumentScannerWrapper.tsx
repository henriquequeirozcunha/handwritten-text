import 'react-native-reanimated';

import { Alert, PermissionsAndroid, Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import DocumentScanner from 'react-native-document-scanner-plugin'

// import * as DDN from "vision-camera-dynamsoft-document-normalizer";

function DocumentScannerWrapper() {
  const [scannedImage, setScannedImage] = useState<string>();

  function handleClick() {
    console.log('execute HENRIQUE CUNHA');

    (async () => {
      // prompt user to accept camera permission request if they haven't already
      if (Platform.OS === 'android' && await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      ) !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Error', 'User must grant camera permissions to use document scanner.')
        return
      }

      // start the document scanner
      const { scannedImages, status } = await DocumentScanner.scanDocument()

      // get back an array with scanned image file paths
      if (scannedImages && scannedImages.length > 0) {
        console.log('scannedImages', scannedImages)
        console.log('status', status)
        // set the img src, so we can view the first scanned image
        // setScannedImage(scannedImages[0])
      }
    })()
  }

  // useEffect(() => {
  //   (async () => {
  //     // prompt user to accept camera permission request if they haven't already
  //     if (Platform.OS === 'android' && await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA
  //     ) !== PermissionsAndroid.RESULTS.GRANTED) {
  //       Alert.alert('Error', 'User must grant camera permissions to use document scanner.')
  //       return
  //     }

  //     // start the document scanner
  //     const { scannedImages, status } = await DocumentScanner.scanDocument()

  //     // get back an array with scanned image file paths
  //     if (scannedImages && scannedImages.length > 0) {
  //       // set the img src, so we can view the first scanned image
  //       setScannedImage(scannedImages[0])
  //     }
  //   })()
  // }, []);

  return (
    <View>
      {
        scannedImage && (
          <Image
            resizeMode="contain"
            style={styles.scanner}
            source={{ uri: scannedImage }}
          />
        )
      }

      <TouchableOpacity
        style={styles.button}
        onPress={handleClick}
      >
        <Text>Scan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scanner: {
    flex: 1
  },
  button: {
    height: 70,
    backgroundColor: 'red',
    marginTop: 'auto'
  }
});


export default DocumentScannerWrapper;