import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  Touchable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import LottieView from "lottie-react-native";
import { useMutation } from "react-query";
import { API_BASEURL } from "@env";
import axios from "axios";
import Toast from "react-native-toast-message";

import {
  LightFontText,
  MediumFontText,
  RegularFontText,
} from "../../../components/shared/Paragrahp";
import { formatDateandTime } from "../../../utils/DateTime";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Get_My_Clan_Forum_Fun,
  Get_My_Clan_Single_Forum_Fun,
  reset__single_forum,
} from "../../../Redux/UserSide/ForumSlice";
import ForumModal from "../../../components/Forum/ForumModal";
import { CenterReuseModals } from "../../../components/shared/ReuseModals";
import {
  CustomTextArea,
  Formbutton,
  Forminput,
} from "../../../components/shared/InputForm";

const ForumDetails = () => {
  const {
    _id: forumid,
    content,
    createdAt,
    likes,
    user,
  } = useRoute()?.params?.forumid;
  // const {gggggg} = useRoute()?.params?.forumid;
  // console.log({
  //   gggggg: gggggg,
  // });

  const {
    user_data,
    user_isError,
    user_isSuccess,
    user_isLoading,
    user_message,
  } = useSelector((state) => state.AuthSlice);
  console.log({
    token: user_data?.token,
  });
  const navigation = useNavigation();
  const animation = useRef(null);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [newModalVisible, setNewModalVisible] = useState(false);
  const [newcomment, setNewcomment] = useState("");

  const [showComments, setShowComments] = useState(false); // Step 1
  const [commentInput, setCommentInput] = useState(""); // Step 3: State for user input

  const handleTextChange = (newText) => {
    setNewcomment(newText);
  };

  const toggleComments = () => {
    setShowComments(!showComments); // Step 1
    setNewModalVisible(true);
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
    uuu: get_my_clan_single_forum_data,
  });

  let item = {};

  const handleCommentSubmit = () => {
    // Step 4: Handle comment submission logic
    console.log("User submitted comment:", commentInput);
    // You can dispatch an action or perform any other logic here to submit the comment
    // Clear the comment input after submission
    setCommentInput("");
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Set the refreshing state to true
    setRefreshing(true);
    dispatch(Get_My_Clan_Single_Forum_Fun(forumid));

    // Wait for 2 seconds
    setRefreshing(false);
  };

  useEffect(() => {
    // Check if forumid is available before dispatching the action
    dispatch(Get_My_Clan_Single_Forum_Fun(forumid));

    return () => {
      // dispatch(reset__single_forum(null));
    };
  }, [dispatch, forumid]); // Include forumid in the dependency array

  const Like_Mutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}forum/like/${data_info?.clanId}/${data_info?.forumid}`;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //   "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };

      return axios.get(url, config);
    },
    {
      onSuccess: (success) => {
        // Toast.show({
        //   type: "success",
        //   text1: " successfully ",
        // });
        dispatch(Get_My_Clan_Single_Forum_Fun(forumid));

        // setTurnmodal(false);
      },

      onError: (error) => {
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.message} `,
          //   text2: ` ${error?.response?.data?.errorMsg} `,
        });

        // dispatch(Get_User_Clans_Fun());
        // dispatch(Get_User_Profle_Fun());
        // dispatch(Get_all_clan_User_Is_adminIN_Fun());
      },
    }
  );

  const Comment_Mutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}forum/comment`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //   "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };

      console.log({
        jdjd: data_info,
      });

      return axios.post(url, data_info, config);
    },
    {
      onSuccess: (success) => {
        Toast.show({
          type: "success",
          text1: " successfully ",
        });
        dispatch(Get_My_Clan_Single_Forum_Fun(forumid));
        setNewcomment("");

        // setTurnmodal(false);
      },

      onError: (error) => {
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.message} `,
          //   text2: ` ${error?.response?.data?.errorMsg} `,
        });

        // dispatch(Get_User_Clans_Fun());
        // dispatch(Get_User_Profle_Fun());
        // dispatch(Get_all_clan_User_Is_adminIN_Fun());
      },
    }
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 20,
          paddingHorizontal: 20,
          paddingHorizontal: 20,
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
              data={formatDateandTime(
                get_my_clan_single_forum_data?.data?.createdAt
              )}
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
          data={get_my_clan_single_forum_data?.data?.content}
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
              forumid: get_my_clan_single_forum_data?.data._id,
              clanId: get_my_clan_single_forum_data?.data?.clan,
            });
          }}
        >
          <AntDesign name="hearto" size={24} color="black" />
          <Text>
            {get_my_clan_single_forum_data?.data?.likes?.length} Likes{" "}
          </Text>
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
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <AntDesign name="sharealt" size={24} color="black" />
          <Text>Share</Text>
        </View> */}
      </View>

      {/* Conditionally render comments section based on state */}
      {/* {showComments && ( */}

      {get_my_clan_single_forum_data?.data?.comments?.length === 0 ? (
        <View style={{ paddingHorizontal: 20 }}>
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
            <Text>No Comment Available</Text>
          </View>
          {/* You can map through the comments array and render each comment */}
        </View>
      ) : (
        <View>
          {get_my_clan_single_forum_data?.data?.comments?.map((comment) => (
            <View
              style={{
                // flexDirection: "row",
                // alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 5,
                paddingHorizontal: 30,
              }}
              key={comment._id}
            >
              <View
                style={{
                  paddingHorizontal: 20,
                  backgroundColor: "#DAE4EF",
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                {console.log({
                  comment: comment,
                })}
                <Text>{comment?.content}</Text>
                {/* You can map through the comments array and render each comment */}
              </View>
            </View>
          ))}
        </View>
      )}

      <CenterReuseModals
        visible={newModalVisible}
        onClose={() => setNewModalVisible(false)}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            elevation: 5,
            width: "90%",
            height: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              fontFamily: "RobotoSlab-Medium",
              color: "black",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            Send Comment
          </Text>

          <View>
            <CustomTextArea
              placeholder="Enter text here..."
              // onChangeText={setNewcomment}
              value={newcomment}
              // value={text}
              onChangeText={handleTextChange}
              style={{ width: "80%" }}
              inputStyle={{
                backgroundColor: "#F6F8FAE5",
                paddingHorizontal: 10,
                paddingVertical: 20,
                height: 200,
                padding: 10,
                borderRadius: 6,
                fontSize: 16,
                marginTop: 20,
              }}
            />
          </View>

          <View style={{}}>
            <TouchableOpacity
              style={{
                // paddingHorizontal: 12,
                // paddingVertical: 2,
                // borderRadius: 6,
                position: "relative",
                top: -260,
                left: 10,
              }}
              // onPress={toggleModal}
              onPress={() => setNewModalVisible(false)}
            >
              <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>
            <Formbutton
              buttonStyle={{
                backgroundColor: "#04973C",
                borderWidth: 1,
                borderColor: "#04973C",
                paddingVertical: 14,
                alignItems: "center",
                borderRadius: 5,
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
                marginTop: 20,
              }}
              textStyle={{
                color: "white",
                fontWeight: "500",
                fontSize: 14,
                fontFamily: "RobotoSlab-Medium",
              }}
              data="Submit"
              onPress={() => {
                Comment_Mutation.mutate({
                  content: newcomment,
                  postId: get_my_clan_single_forum_data?.data?._id,
                });
              }}
              isLoading={Comment_Mutation.isLoading}
            />
          </View>
        </View>
      </CenterReuseModals>

      {/* // )} */}
      <ForumModal visible={isModalVisible} onClose={toggleModal} />
    </ScrollView>
  );
};

export default ForumDetails;
