import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { MediumFontText } from "../../../components/shared/Paragrahp";
import ApprovedGoods from "./ApprovedGoods";
import PendingGoods from "./PendingGoods";


const VendorLists = () => {
  const [forumlist, setforumlist] = useState(true);
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          // marginBottom: 10,
          backgroundColor: "white"
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
            data="ApprovedGoods"
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
            data="PendingGoods"
            textstyle={{
              fontSize: 20,
              fontWeight: "500",
              marginVertical: 10,
              textAlign: "center",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: "100%", }}>
        {forumlist ? <ApprovedGoods /> : <PendingGoods />}
      </View>
    </>
  );
};

export default VendorLists;
