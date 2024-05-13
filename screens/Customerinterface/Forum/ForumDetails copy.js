import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import {
  LightFontText,
  MediumFontText,
  RegularFontText,
} from "../../../components/shared/Paragrahp";
import { formatDateandTime } from "../../../utils/DateTime";
import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  Get_My_Clan_Single_Forum_Fun,
  reset__single_forum,
} from "../../../Redux/UserSide/ForumSlice";
import ForumModal from "../../../components/Forum/ForumModal";

const ForumDetails = () => {
  const { _id: forumid, content, createdAt, likes, user } = useRoute()?.params;

  const navigation = useNavigation();
  const animation = useRef(null);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [showComments, setShowComments] = useState(false); // Step 1
  const [commentInput, setCommentInput] = useState(""); // Step 3: State for user input

  const toggleComments = () => {
    setShowComments(!showComments); // Step 1
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Accessing nested properties
  // const { content, createdAt, likes, user } = forumid;

  const { get_my_clan_single_forum_data } = useSelector(
    (state) => state?.ForumSlice
  );

  console.log({
    dfdf: get_my_clan_single_forum_data?.data,
  });
  let item = {};

  useEffect(() => {
    // Check if forumid is available before dispatching the action
    dispatch(Get_My_Clan_Single_Forum_Fun(forumid));

    return () => {
      dispatch(reset__single_forum(null));
    };
  }, [dispatch, forumid]); // Include forumid in the dependency array

  const handleCommentSubmit = () => {
    // Step 4: Handle comment submission logic
    console.log("User submitted comment:", commentInput);
    // You can dispatch an action or perform any other logic here to submit the comment
    // Clear the comment input after submission
    setCommentInput("");
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri:
                forumid?.user?.photo ||
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />

          <View>
            <MediumFontText
              data={forumid?.user?.name}
              textstyle={{ fontSize: 16, fontWeight: "500" }}
            />

            <LightFontText
              data={formatDateandTime(forumid?.createdAt)}
              // "Jane Doe - 54 mins ago"
              textstyle={{ fontSize: 12, fontWeight: "300" }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 6,
          }}
          onPress={toggleModal}
        >
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <RegularFontText
          data={get_my_clan_single_forum_data?.forum?.content}
          textstyle={{
            fontSize: 12,
            fontWeight: "400",
            textAlign: "justify",
          }}
        />
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: "#D9D9D9",
          marginVertical: 10,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={() => {
            Like_Mutation.mutate({
              forumid: forumid?._id,
              clanId: forumid?.clan,
            });
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <Text>{forumid?.likes?.length} Likes </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
          onPress={toggleComments} // Step 2
        >
          <AntDesign name="message1" size={24} color="black" />
          <Text>Comment</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="sharealt" size={24} color="black" />
          <Text>Share</Text>
        </View>
      </View>

      {/* Conditionally render comments section based on state */}
      {/* {showComments && ( */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text>Comments Section</Text>
        {/* You can map through the comments array and render each comment */}
      </View>

      {/* // )} */}
      <ForumModal visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
};

export default ForumDetails;
