import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppScreen from '../../components/shared/AppScreen'
import { LightFontText, MediumFontText, RegularFontText } from '../../components/shared/Paragrahp';
import { Entypo, AntDesign } from "@expo/vector-icons";


const ICEcontact = () => {

    const data = [
        { id: "1", title: "Item 1" },
        { id: "2", title: "Item 2" },
        { id: "3", title: "Item 2" },
        { id: "4", title: "Item 2" },
        { id: "5", title: "Item 2" },
        { id: "6", title: "Item 2" },

        // Add more items as needed
    ];
    return (


        <AppScreen>
            <View style={{ paddingHorizontal: 20, }}>




                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={{ borderWidth: 1, borderColor: "#CFCDCD", paddingHorizontal: 20, marginBottom: 20 }}>

                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    paddingVertical: 10,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    }}
                                    style={{ width: 40, height: 40, borderRadius: 1 }}
                                />

                                <View>
                                    <MediumFontText
                                        data="Nigeria Police Force"
                                        textstyle={{ fontSize: 16, fontWeight: "500" }}
                                    />

                                    <LightFontText
                                        data="08033011052"
                                        textstyle={{ fontSize: 12, fontWeight: "300" }}
                                    />
                                </View>
                            </View>







                        </View>
                    )}
                />
            </View>
        </AppScreen>

    )
}

export default ICEcontact