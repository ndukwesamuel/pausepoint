import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MediumFontText, RegularFontText } from "../shared/Paragrahp";

function ForumModal({ visible, onClose }) {
  let data = [
    {
      id: "1",
      title: "Hide this post",
      description: "This announcement will be deleted instantly",
      img: require("../../assets/images/trash.png"),
    },
    {
      id: "2",
      title: "Save for later",
      description: "Save this post to view later ",
      img: require("../../assets/images/save-add.png"),
    },
    {
      id: "3",
      title: "Mute John Doe",
      description: "Temporary mute the announcement author ",
      img: require("../../assets/images/volume-cross.png"),
    },
  ];
  return (
    <Modal transparent={true} animationType="slide" visible={visible}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {data.map((item) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                  gap: 10,
                }}
                key={item.id}
              >
                <Image
                  source={item?.img} // Replace with the correct path to your image
                  style={{ width: 30, height: 30, tintColor: "black" }}
                />

                <View>
                  <MediumFontText
                    data="Hide this post"
                    textstyle={{ fontSize: 16, fontWeight: "500" }}
                  />

                  <RegularFontText data="This announcement will be deleted instantly" />
                </View>
              </View>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "30%",
  },
});

export default ForumModal;
