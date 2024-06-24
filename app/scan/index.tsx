import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import { useState, useEffect } from "react";
import { Camera, CameraView } from "expo-camera";
import { Image } from "expo-image";
import { router } from "expo-router";
import axios from "axios";

type Permissions = null | true | false;

const BACKEND = process.env.EXPO_PUBLIC_BACKEND as string;

export default function App() {
  const [hasPermission, setHasPermission] = useState<Permissions>(null);
  const [scanned, setScanned] = useState(false);

  function showProcessingToast() {
    ToastAndroid.show("Processing...", ToastAndroid.SHORT);
  }

  function showerrorToast() {
    ToastAndroid.show("Invalid", ToastAndroid.SHORT);
  }

  useEffect(() => {
    Camera.requestCameraPermissionsAsync()
      .then((res) => setHasPermission(res.status === "granted"))
      .catch((e) => console.log(e));
  }, []);

  if (hasPermission != true) {
    return <Text>No access to camera</Text>;
  }

  const handleScan = (data: any) => {
    let order_id = JSON.parse(data.raw);
    setScanned(true);
    showProcessingToast();
    axios
      .post(`${BACKEND}/api/order/validateOrder`, order_id)
      .then((res) => {
        router.push({
          pathname: "/success",
        });
      })
      .catch((err) => showerrorToast())
      .finally(() => setScanned(false));
  };

  return (
    <View style={styles.container}>
      <CameraView
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        style={styles.cameraView}
        onBarcodeScanned={scanned == false ? handleScan : undefined}
      >
        <Image style={styles.image} source="https://shorturl.at/I7Z9l" />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  image: {
    height: 250,
    width: 250,
  },
});
