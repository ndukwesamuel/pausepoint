import { View, Text } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

const Marketplace = () => {
  const animation = useRef(null);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Marketplace</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            // backgroundColor: "#eee",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../../assets/Lottie/Animation - 1704444696995.json")}
        />
      </View>
    </View>
  );
};

export default Marketplace;
