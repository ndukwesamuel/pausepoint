import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import LottieView from "lottie-react-native";

const Guests = () => {
  const animation = useRef(null);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            // backgroundColor: "#eee",
          }}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../../assets/Lottie/commingSoon.json")}
        />
        {/* <Text>{get_my_clan_forum_message}</Text> */}
      </View>
    </View>
  );
};

export default Guests;
