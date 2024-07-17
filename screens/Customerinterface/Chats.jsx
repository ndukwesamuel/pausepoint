import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  MediumFontText,
  RegularFontText,
} from "../../components/shared/Paragrahp";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Chats = () => {
  const route = useRoute();
  const { item } = route.params;

  let otheruser_id = item?._id;

  console.log({
    item,
    otheruser_id,
  });

  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const flatListRef = useRef(null);
  const socketConnection = useSelector(
    (state) => state?.socketSlice?.socketConnection
  );

  const { user_data } = useSelector((state) => state.AuthSlice);

  const [allMessage, setAllMessage] = useState([]);

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    // profile_pic : "",
    online: false,
    _id: "",
  });
  console.log({ user_data });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, how are you?",
      sender: "User2",
    },
    {
      id: 2,
      image:
        "https://prod-media.beinsports.com/image/1699134009745_8beaa0e5-ac0b-4663-b620-658912531c03.jpg",
      sender: "User2",
    },
    {
      id: 3,
      text: "I'm doing well, thanks!",
      sender: "User1",
    },
    {
      id: 4,
      text: "What have you been up to?",
      sender: "User2",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const onSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "User1", // You can replace this with the sender's username
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const onSendImage = (imageURL) => {
    const message = {
      id: messages.length + 1,
      image: imageURL,
      sender: "User1", // You can replace this with the sender's username
    };
    setMessages([...messages, message]);
  };

  const [message, setMessage] = useState({
    text: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleTextChange = (text) => {
    setMessage((prevState) => ({
      ...prevState,
      text: text,
    }));
  };

  const submitdata = () => {};
  const handleSendMessage = () => {
    // e.preventDefault();

    let user_Sender_id = user_data?.user?.id;
    let user_Receiver_id = otheruser_id;

    console.log({
      user_Sender_id,
      user_Receiver_id,
    });

    if (message.text || message.imageUrl || message.videoUrl) {
      if (socketConnection) {
        socketConnection.emit("new message", {
          sender: user_Sender_id,
          receiver: user_Receiver_id,
          text: message.text,
          //   imageUrl: message.imageUrl,
          //   videoUrl: message.videoUrl,
          msgByUserId: user_Sender_id,
        });
        setMessage({
          text: "",
          imageUrl: "",
          videoUrl: "",
        });
      }
    }
  };

  useEffect(() => {
    if (socketConnection) {
      let user_Sender_id = user_data?.user?.id;
      let user_Receiver_id = otheruser_id;

      socketConnection.emit("fetch-conversation", {
        sender: user_Sender_id,
        receiver: user_Receiver_id,
      });

      socketConnection.emit("message-page", otheruser_id);

      socketConnection.emit("seen", otheruser_id);

      socketConnection.on("message-user", (data) => {
        console.log({
          ememe: data,
        });
        setDataUser(data);
      });

      socketConnection.on("conversation-history", (data) => {
        setAllMessage(data);
      });

      socketConnection.on("message", (data) => {
        console.log("message data", data);
        setAllMessage(data);
      });
    }
  }, [socketConnection, otheruser_id, user_data]);

  const handleContentSizeChange = () => {
    if (!isUserScrolling && allMessage.length > 0) {
      flatListRef.current.scrollToIndex({
        index: allMessage.length - 1,
        animated: true,
      });
    }
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const isScrollingUpward = contentOffset.y > 0;
    setIsUserScrolling(isScrollingUpward);
  };

  const getItemLayout = (data, index) => ({
    length: 70, // Adjust this based on the height of your message items
    offset: 70 * index,
    index,
  });

  const handleScrollToIndexFailed = (info) => {
    const wait = new Promise((resolve) => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Choose the behavior based on the platform
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -100} // Adjust the offset if needed
    >
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: 68, height: 68, borderRadius: 50 }}
          />

          <View>
            <MediumFontText
              data={item?.name}
              textstyle={{ fontSize: 18, fontWeight: "500" }}
            />
            <Text>{dataUser?.online ? "Online" : "Offline"}</Text>
          </View>
        </View>
        {console.log({
          fire: allMessage,
        })}
        <FlatList
          ref={flatListRef}
          data={allMessage}
          keyExtractor={(message) => message._id}
          getItemLayout={getItemLayout}
          onScrollToIndexFailed={handleScrollToIndexFailed}
          onContentSizeChange={handleContentSizeChange}
          onScroll={handleScroll}
          renderItem={({ item }) => (
            <View
              style={{
                alignSelf:
                  item?.msgByUserId === user_data?.user?.id
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              {console.log({
                fire: item,
              })}
              {item.text && (
                <Text
                  style={{
                    padding: 10,
                    margin: 5,
                    backgroundColor:
                      item?.msgByUserId === user_data?.user?.id
                        ? "#B9B9B94D"
                        : "#F3FFF3",
                    borderRadius: 10,
                    color: "black",
                  }}
                >
                  {item.text}
                </Text>
              )}
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 200,
                    height: 200,
                    margin: 5,
                    borderRadius: 10,
                  }}
                />
              )}
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#FBFBFD",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/images/gallery.png")}
            style={{ width: 24, height: 24 }}
          />
          <TextInput
            style={{
              flex: 1,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
              backgroundColor: "#F6F8FA",
            }}
            // value={newMessage}
            // onChangeText={(text) => setNewMessage(text)}
            value={message.text}
            onChangeText={handleTextChange}
            placeholder="Type a message..."
          />
          {/* <TouchableOpacity onPress={onSendMessage}>
            <FontAwesome name="microphone" size={24} color="black" />
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={handleSendMessage}
            // onPress={() => onSendImage("https://example.com/image.jpg")}
          >
            <FontAwesome name="send-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chats;
