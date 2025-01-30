// // import { useNavigation, useRoute } from "@react-navigation/native";
// // import React from "react";

// // import {
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   Image,
// //   StyleSheet,
// //   Linking,
// //   ActivityIndicator,
// //   FlatList,
// // } from "react-native";
// // import PagerView from "react-native-pager-view";
// // import Icon from "react-native-vector-icons/FontAwesome";

// // import { useMutation } from "react-query";
// // const API_BASEURL = process.env.EXPO_PUBLIC_API_URL;

// // import axios from "axios";
// // import Toast from "react-native-toast-message";
// // import LottieView from "lottie-react-native";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   Market_data_Fun,
// //   myProductFun,
// // } from "../../../Redux/UserSide/MarketSLice";

// // const MarketReview = () => {
// //   const navigation = useNavigation();
// //   const { item, productType } = useRoute().params;
// //   const dispatch = useDispatch();
// //   console.log({
// //     ddd: productType,
// //   });

// //   // console.log({
// //   //   item: item,
// //   // });

// //   const {
// //     user_data,
// //     user_isError,
// //     user_isSuccess,
// //     user_isLoading,
// //     user_message,
// //   } = useSelector((state) => state.AuthSlice);

// //   const phoneNumber = item?.contact; //"1234567890"; // Replace with the phone number you want to call

// //   const makePhoneCall = () => {
// //     const url = `tel:${phoneNumber}`;
// //     Linking.canOpenURL(url)
// //       .then((supported) => {
// //         if (supported) {
// //           return Linking.openURL(url);
// //         } else {
// //           console.error(`Cannot open phone call: ${url}`);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error(`Error making phone call: ${error}`);
// //       });
// //   };

// //   const DeleteProductMutation = useMutation(
// //     (data_info) => {
// //       let url = `${API_BASEURL}market/myproduct/${item?._id}`;
// //       console.log({
// //         data_info: url,
// //       });
// //       const config = {
// //         headers: {
// //           "Content-Type": "application/json",
// //           Accept: "application/json",
// //           //   "Content-Type": "multipart/form-data",
// //           Authorization: `Bearer ${user_data?.token}`,
// //         },
// //       };

// //       //   if (data_info?.method == "GET") {
// //       //     return axios.get(url, config);
// //       //   }

// //       // if (data_info?.method == "DELETE") {
// //       return axios.delete(url, config);
// //       // }
// //     },
// //     {
// //       onSuccess: (success) => {
// //         Toast.show({
// //           type: "success",
// //           text1: "Request To Join Estate successfully ",
// //         });

// //         dispatch(Market_data_Fun());
// //         dispatch(myProductFun());

// //         navigation.goBack();
// //         // dispatch(Get_User_Clans_Fun());
// //         // dispatch(Get_User_Profle_Fun());
// //         // dispatch(Get_all_clan_User_Is_adminIN_Fun());
// //         // dispatch(reset_login());
// //         // dispatch(reset_isOnboarding());

// //         // onClose();
// //       },

// //       onError: (error) => {
// //         Toast.show({
// //           type: "error",
// //           text1: `${error?.response?.data?.message} `,
// //           //   text2: ` ${error?.response?.data?.errorMsg} `,
// //         });

// //         // onClose();
// //         // dispatch(Get_User_Clans_Fun());
// //         // dispatch(Get_User_Profle_Fun());
// //         // dispatch(Get_all_clan_User_Is_adminIN_Fun());
// //       },
// //     }
// //   );

// //   return (
// //     <>
// //       <View>
// //         <Image
// //           source={{
// //             uri: item?.images[0]?.url, // "https://res.cloudinary.com/dho7vgusw/image/upload/v1717066205/olyzcdftqbon10c958gb.png", //item?.images[0]?.url,
// //           }}
// //           style={{
// //             width: "100%",
// //             height: 250,
// //           }}
// //         />

// //         <FlatList
// //           data={item?.images}
// //           renderItem={({ item }) => (
// //             <Image
// //               source={{
// //                 uri: item?.url, // "https://res.cloudinary.com/dho7vgusw/image/upload/v1717066205/olyzcdftqbon10c958gb.png", //item?.images[0]?.url,
// //               }}
// //               style={{
// //                 width: "100%",
// //                 height: 250,
// //               }}
// //             />
// //           )}
// //         />

// //         <View style={styles.contentContainer}>
// //           <View style={styles.headerContainer}>
// //             <View
// //               style={{
// //                 paddingRight: 10,
// //                 width: "70%",
// //               }}
// //             >
// //               <Text style={styles.productTitle}>{item?.name}</Text>
// //               <Text style={styles.productCategory}>{item?.category?.name}</Text>
// //             </View>
// //             <View
// //               style={{
// //                 paddingRight: 10,
// //                 width: "30%",
// //               }}
// //             >
// //               <Text style={styles.productPrice}>₦{item?.price}</Text>
// //             </View>
// //           </View>
// //           <Text style={styles.description}>{item?.description}</Text>
// //         </View>

// //         <View
// //           style={{
// //             paddingLeft: 15,
// //           }}
// //         >
// //           <Text
// //             style={{
// //               fontSize: 20,
// //               fontWeight: "400",
// //             }}
// //           >
// //             Status : {item?.status}
// //           </Text>
// //         </View>
// //         <View style={styles.downContainer}>
// //           <Text style={styles.sellerTitle}>Seller Details</Text>
// //           <Text style={styles.sellerInfo}>
// //             <Icon name="user" size={20} color="green" />
// //             <Text> {item?.seller?.name} </Text>
// //           </Text>
// //           {/* <Text style={styles.sellerInfo}>
// //             <Icon name="home" size={20} color="green" />
// //             <Text> House 24, Tinubu estate</Text>
// //           </Text> */}
// //         </View>
// //         <View style={styles.buttonContainer}>
// //           {productType === "myproduct" && (
// //             <>
// //               {DeleteProductMutation.isLoading ? (
// //                 <ActivityIndicator size="small" color="red" />
// //               ) : (
// //                 <TouchableOpacity
// //                   // onPress={DelteItem}

// //                   onPress={() => {
// //                     DeleteProductMutation.mutate({});
// //                   }}
// //                   style={{
// //                     backgroundColor: "red",
// //                     padding: 15,
// //                     borderRadius: 5,
// //                     alignItems: "center",
// //                     marginBottom: 10,
// //                   }}
// //                 >
// //                   <Text style={styles.buttonText}>Delete </Text>
// //                 </TouchableOpacity>
// //               )}
// //             </>
// //           )}

// //           <TouchableOpacity
// //             onPress={makePhoneCall}
// //             style={styles.approveButton}
// //           >
// //             <Text style={styles.buttonText}>Order now!</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   image: {
// //     width: "100%",
// //   },
// //   contentContainer: {
// //     padding: 20,
// //   },
// //   headerContainer: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //   },
// //   productTitle: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   productCategory: {
// //     fontSize: 14,
// //     color: "gray",
// //   },
// //   productPrice: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   productStock: {
// //     fontSize: 14,
// //     color: "gray",
// //   },
// //   description: {
// //     marginTop: 10,
// //     fontSize: 14,
// //     color: "gray",
// //   },
// //   downContainer: {
// //     paddingBottom: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: "#F6F6F6",
// //     paddingHorizontal: 20,
// //   },
// //   sellerTitle: {
// //     fontSize: 20,
// //     fontWeight: "400",
// //     paddingBottom: 5,
// //   },
// //   sellerInfo: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginTop: 5,
// //   },
// //   icon: {
// //     marginRight: 10,
// //   },
// //   buttonContainer: {
// //     paddingHorizontal: 20,
// //     paddingTop: 20,
// //   },
// //   approveButton: {
// //     backgroundColor: "green",
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: "center",
// //     marginBottom: 10,
// //   },

// //   buttonText: {
// //     color: "white",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// //   page: {
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// // });

// // export default MarketReview;

// import { useNavigation, useRoute } from "@react-navigation/native";
// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Linking,
//   ActivityIndicator,
// } from "react-native";
// import PagerView from "react-native-pager-view";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { useMutation } from "react-query";
// import axios from "axios";
// import Toast from "react-native-toast-message";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   Market_data_Fun,
//   myProductFun,
// } from "../../../Redux/UserSide/MarketSLice";

// const MarketReview = () => {
//   const navigation = useNavigation();
//   const { item, productType } = useRoute().params;
//   const dispatch = useDispatch();

//   const {
//     user_data,
//     user_isError,
//     user_isSuccess,
//     user_isLoading,
//     user_message,
//   } = useSelector((state) => state.AuthSlice);

//   const phoneNumber = item?.contact;

//   const makePhoneCall = () => {
//     const url = `tel:${phoneNumber}`;
//     Linking.canOpenURL(url)
//       .then((supported) => {
//         if (supported) {
//           return Linking.openURL(url);
//         } else {
//           console.error(`Cannot open phone call: ${url}`);
//         }
//       })
//       .catch((error) => {
//         console.error(`Error making phone call: ${error}`);
//       });
//   };

//   const DeleteProductMutation = useMutation(
//     (data_info) => {
//       let url = `${API_BASEURL}market/myproduct/${item?._id}`;
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: `Bearer ${user_data?.token}`,
//         },
//       };
//       return axios.delete(url, config);
//     },
//     {
//       onSuccess: (success) => {
//         Toast.show({
//           type: "success",
//           text1: "Request To Join Estate successfully ",
//         });
//         dispatch(Market_data_Fun());
//         dispatch(myProductFun());
//         navigation.goBack();
//       },
//       onError: (error) => {
//         Toast.show({
//           type: "error",
//           text1: `${error?.response?.data?.message} `,
//         });
//       },
//     }
//   );

//   return (
//     <>
//       <View>
//         {/* Replace the single Image with PagerView for swiping images */}
//         <PagerView style={styles.pagerView} initialPage={0}>
//           {item?.images?.map((image, index) => (
//             <View key={index} style={styles.page}>
//               <Image
//                 source={{ uri: image.url }}
//                 style={styles.image}
//                 resizeMode="cover"
//               />
//             </View>
//           ))}
//         </PagerView>

//         <View style={styles.contentContainer}>
//           <View style={styles.headerContainer}>
//             <View style={{ paddingRight: 10, width: "70%" }}>
//               <Text style={styles.productTitle}>{item?.name}</Text>
//               <Text style={styles.productCategory}>{item?.category?.name}</Text>
//             </View>
//             <View style={{ paddingRight: 10, width: "30%" }}>
//               <Text style={styles.productPrice}>₦{item?.price}</Text>
//             </View>
//           </View>
//           <Text style={styles.description}>{item?.description}</Text>
//         </View>

//         <View style={{ paddingLeft: 15 }}>
//           <Text style={{ fontSize: 20, fontWeight: "400" }}>
//             Status : {item?.status}
//           </Text>
//         </View>
//         <View style={styles.downContainer}>
//           <Text style={styles.sellerTitle}>Seller Details</Text>
//           <Text style={styles.sellerInfo}>
//             <Icon name="user" size={20} color="green" />
//             <Text> {item?.seller?.name} </Text>
//           </Text>
//         </View>
//         <View style={styles.buttonContainer}>
//           {productType === "myproduct" && (
//             <>
//               {DeleteProductMutation.isLoading ? (
//                 <ActivityIndicator size="small" color="red" />
//               ) : (
//                 <TouchableOpacity
//                   onPress={() => {
//                     DeleteProductMutation.mutate({});
//                   }}
//                   style={{
//                     backgroundColor: "red",
//                     padding: 15,
//                     borderRadius: 5,
//                     alignItems: "center",
//                     marginBottom: 10,
//                   }}
//                 >
//                   <Text style={styles.buttonText}>Delete </Text>
//                 </TouchableOpacity>
//               )}
//             </>
//           )}

//           <TouchableOpacity
//             onPress={makePhoneCall}
//             style={styles.approveButton}
//           >
//             <Text style={styles.buttonText}>Order now!</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   pagerView: {
//     height: 250,
//     width: "100%",
//   },
//   page: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   contentContainer: {
//     padding: 20,
//   },
//   headerContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   productTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   productCategory: {
//     fontSize: 14,
//     color: "gray",
//   },
//   productPrice: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   description: {
//     marginTop: 10,
//     fontSize: 14,
//     color: "gray",
//   },
//   downContainer: {
//     paddingBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#F6F6F6",
//     paddingHorizontal: 20,
//   },
//   sellerTitle: {
//     fontSize: 20,
//     fontWeight: "400",
//     paddingBottom: 5,
//   },
//   sellerInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   buttonContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   approveButton: {
//     backgroundColor: "green",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default MarketReview;

import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Linking,
  ActivityIndicator,
} from "react-native";
import PagerView from "react-native-pager-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { useMutation } from "react-query";
import axios from "axios";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import {
  Market_data_Fun,
  myProductFun,
} from "../../../Redux/UserSide/MarketSLice";

const MarketReview = () => {
  const navigation = useNavigation();
  const { item, productType } = useRoute().params;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active image index

  const {
    user_data,
    user_isError,
    user_isSuccess,
    user_isLoading,
    user_message,
  } = useSelector((state) => state.AuthSlice);

  const phoneNumber = item?.contact;

  const makePhoneCall = () => {
    const url = `tel:${phoneNumber}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.error(`Cannot open phone call: ${url}`);
        }
      })
      .catch((error) => {
        console.error(`Error making phone call: ${error}`);
      });
  };

  const DeleteProductMutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}market/myproduct/${item?._id}`;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };
      return axios.delete(url, config);
    },
    {
      onSuccess: (success) => {
        Toast.show({
          type: "success",
          text1: "Request To Join Estate successfully ",
        });
        dispatch(Market_data_Fun());
        dispatch(myProductFun());
        navigation.goBack();
      },
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.message} `,
        });
      },
    }
  );

  return (
    <>
      <View>
        {/* PagerView for swiping images */}
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={(event) => {
            setActiveIndex(event.nativeEvent.position); // Update active index on page change
          }}
        >
          {item?.images?.map((image, index) => (
            <View key={index} style={styles.page}>
              <Image
                source={{ uri: image.url }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          ))}
        </PagerView>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {item?.images?.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={{ paddingRight: 10, width: "70%" }}>
              <Text style={styles.productTitle}>{item?.name}</Text>
              <Text style={styles.productCategory}>{item?.category?.name}</Text>
            </View>
            <View style={{ paddingRight: 10, width: "30%" }}>
              <Text style={styles.productPrice}>₦{item?.price}</Text>
            </View>
          </View>
          <Text style={styles.description}>{item?.description}</Text>
        </View>

        <View style={{ paddingLeft: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>
            Status : {item?.status}
          </Text>
        </View>
        <View style={styles.downContainer}>
          <Text style={styles.sellerTitle}>Seller Details</Text>
          <Text style={styles.sellerInfo}>
            <Icon name="user" size={20} color="green" />
            <Text> {item?.seller?.name} </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {productType === "myproduct" && (
            <>
              {DeleteProductMutation.isLoading ? (
                <ActivityIndicator size="small" color="red" />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    DeleteProductMutation.mutate({});
                  }}
                  style={{
                    backgroundColor: "red",
                    padding: 15,
                    borderRadius: 5,
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text style={styles.buttonText}>Delete </Text>
                </TouchableOpacity>
              )}
            </>
          )}

          <TouchableOpacity
            onPress={makePhoneCall}
            style={styles.approveButton}
          >
            <Text style={styles.buttonText}>Order now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    height: 250,
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000", // Active dot color
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productCategory: {
    fontSize: 14,
    color: "gray",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
  downContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
    paddingHorizontal: 20,
  },
  sellerTitle: {
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 5,
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  approveButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MarketReview;
