import 'react-native-reanimated';

import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera, useCameraDevice, useCameraDevices, useCameraPermission, useCodeScanner, useFrameProcessor } from 'react-native-vision-camera';
import { useEffect, useRef, useState } from 'react';

// import * as DDN from "vision-camera-dynamsoft-document-normalizer";

function ReactNativeCameraVision() {
  const device = useCameraDevice('back')
  const { hasPermission, requestPermission } = useCameraPermission()
  const [scannedImage, setScannedImage] = useState();
  const camera = useRef<Camera>(null)
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes.length} codes!`, codes[0].value)
    }
  })

  console.log('device', device)


  useEffect(() => {
    // (async () => {
    //   let license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="; //one-day public trial

    //   let result = await DDN.initLicense(license);
    //     console.log("Licesne valid: ");
    //     console.log(result);
    //     if (result === false) {
    //       Alert.alert("DDN","License invalid");
    //     }else{
    //       // setStatus("");
    //     }

    // })()

    if (!hasPermission) {
      requestPermission()
    }
  }, [])

  console.log('hasPermission', hasPermission)
  console.log('requestPermission', requestPermission)

  // const frame0

  return (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your aawdawd!!!!!</Text>

          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: 'red'
            }}
            onPress={async () => {
              if (camera) {
                const photo = await camera.current!.takePhoto()

                // await CameraRoll.save(`file://${file.path}`, {
                //   type: 'photo',
                // })
              }
          }}>
            <Text>TAKE PIC</Text>
          </TouchableOpacity>

          <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Camera
              ref={camera}
              style={{ flex: 1, height: '100%', backgroundColor: 'red' }}
              isActive={true}
              photo={true}
              device={device!}
              torch='off'
              androidPreviewViewType="texture-view"
              codeScanner={codeScanner}
              // frameProcessor={frameProcessor}
            />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default ReactNativeCameraVision;