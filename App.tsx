import 'react-native-reanimated';

import { Alert, StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraDevices, useCameraPermission, useFrameProcessor } from 'react-native-vision-camera';
import { useEffect } from 'react';

// import * as DDN from "vision-camera-dynamsoft-document-normalizer";

export default function App() {
  const device = useCameraDevice('front')
  const { hasPermission, requestPermission } = useCameraPermission()

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

  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';

  //   const detectionResults = DDN.detect(frame);

  //   // let normalizedImageResult = await normalizeFile(photoPath, detectionResult.location,{saveNormalizationResultAsFile:true});
  // }, [])

  return (
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your aawdawd!!!!!</Text>

          <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Camera
              style={{ flex: 1, height: '100%', backgroundColor: 'red' }}
              isActive={true}
              photo={true}
              device={device!}
              torch='off'
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
