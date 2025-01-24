import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import { FaceDetector } from "expo-face-detector"; // Import the FaceDetector module

export default function FaceDetectionExample() {
  const [hasPermission, setHasPermission] = useState(null);
  const [faces, setFaces] = useState([]);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleFacesDetected = ({ faces }) => {
    setFaces(faces);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.front}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.Constants.Mode.fast, // Use FaceDetector's Mode.fast for fast detection
          detectLandmarks: FaceDetector.Constants.Landmarks.all, // Detect all landmarks
          runClassifications: FaceDetector.Constants.Classifications.all, // Classify face attributes
        }}
        ref={(ref) => setCamera(ref)}
      >
        {faces.map((face, index) => (
          <View
            key={index}
            style={[
              styles.face,
              {
                left: face.bounds.origin.x,
                top: face.bounds.origin.y,
                width: face.bounds.size.width,
                height: face.bounds.size.height,
              },
            ]}
          >
            <Text style={styles.faceText}>Face {index + 1}</Text>
          </View>
        ))}
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  face: {
    position: "absolute",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 4,
  },
  faceText: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: 5,
  },
});
