import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

import AppScreen from "../../../components/shared/AppScreen";
import {
  MediumFontText,
  RegularFontText,
} from "../../../components/shared/Paragrahp";
import PublicEventDetails from "../../../components/Event/PublicEventDetails";
import PrivateEventDetails from "../../../components/Event/PrivateEventDetails";

const EventDetals = ({ navigation, route }) => {
  const { id, name } = route.params;
  console.log({
    id,
    name,
  });
  return (
    <AppScreen>
      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginLeft: 10,
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <MediumFontText
            data="Event Details"
            textstyle={{
              fontSize: 17,
              textAlign: "center",
            }}
          />
        </View>
      </View>

      {name === "host_events" && <PrivateEventDetails data_id={id} />}

      {name === "show_event" && <PublicEventDetails data_id={id} />}
    </AppScreen>
  );
};

// TicketSelectionScreen.js

export default EventDetals;
