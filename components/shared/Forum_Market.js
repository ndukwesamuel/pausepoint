import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Forum from "../Forum/Forum";
import { MediumFontText } from "./Paragrahp";
import Marketplace from "../../screens/Customerinterface/MarketPlace/Marketplace";

const Forum_Market = () => {
  const [forumlist, setforumlist] = useState(true);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setforumlist(true)}
          style={{
            borderBottomWidth: forumlist ? 2 : 0,

            borderColor: "#D9D9D9",
            // marginVertical: 10,
            width: "50%",
          }}
        >
          <MediumFontText
            data="Forum"
            textstyle={{
              fontSize: 20,
              fontWeight: "500",
              marginVertical: 10,
              textAlign: "center",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderBottomWidth: forumlist ? 0 : 2,

            borderColor: "#D9D9D9",
            width: "50%",

            // marginVertical: 10,
          }}
          onPress={() => setforumlist(false)}
        >
          <MediumFontText
            data="Marketplace"
            textstyle={{
              fontSize: 20,
              fontWeight: "500",
              marginVertical: 10,
              textAlign: "center",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: "85%" }}>
        {forumlist ? <Forum /> : <Marketplace />}
      </View>
    </>
  );
};

export default Forum_Market;
