import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppScreen from '../../components/shared/AppScreen';



const historydata = [
    {
        id: 1,

        code: "430891",
        codeLabel: "Code ID",
        arrivalTime: "22/05/23, 5:59pm",
        arrivalTimeLabel: "Arrival Time",

        status: "Checked Out",
        statusLabel: "Status",
        departureTime: "22/05/23, 5:59pm",
        departureTimeLabel: "Departure Time",
    },

    {
        id: 2,

        code: "430891",
        codeLabel: "Code ID",
        arrivalTime: "22/05/23, 5:59pm",
        arrivalTimeLabel: "Arrival Time",

        status: "Checked Out",
        statusLabel: "Status",
        departureTime: "22/05/23, 5:59pm",
        departureTimeLabel: "Departure Time",
    },

    {
        id: 3,

        code: "430891",
        codeLabel: "Code ID",
        arrivalTime: "22/05/23, 5:59pm",
        arrivalTimeLabel: "Arrival Time",

        status: "Checked Out",
        statusLabel: "Status",
        departureTime: "22/05/23, 5:59pm",
        departureTimeLabel: "Departure Time",
    },


    {
        id: 4,

        code: "430891",
        codeLabel: "Code ID",
        arrivalTime: "22/05/23, 5:59pm",
        arrivalTimeLabel: "Arrival Time",

        status: "Checked Out",
        statusLabel: "Status",
        departureTime: "22/05/23, 5:59pm",
        departureTimeLabel: "Departure Time",
    },

    {
        id: 5,

        code: "430891",
        codeLabel: "Code ID",
        arrivalTime: "22/05/23, 5:59pm",
        arrivalTimeLabel: "Arrival Time",

        status: "Checked Out",
        statusLabel: "Status",
        departureTime: "22/05/23, 5:59pm",
        departureTimeLabel: "Departure Time",
    },
    // Add more objects here if needed
];


const History = () => {



    const HistoryItem = ({ itemdata }: any) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-around", borderWidth: 1, borderColor: "#CFCDCD", marginBottom: 10, paddingVertical: 10, borderRadius: 9 }}>
                <View>
                    <Text style={{ fontSize: 18, fontFamily: 'RobotoSlab-SemiBold', fontWeight: "600" }}>{itemdata?.code}</Text>

                    <Text style={{ fontSize: 11, fontFamily: 'RobotoSlab-Medium', fontWeight: "500" }}>Code ID</Text>

                    <Text style={{ fontSize: 14, fontFamily: 'Inter-SemiBold', fontWeight: "600" }}>{itemdata?.arrivalTime}</Text>

                    <Text style={{ fontSize: 11, fontFamily: 'RobotoSlab-Medium', fontWeight: "500" }}>Arrival Time</Text>
                </View>



                <View>

                    <Text style={{ fontSize: 18, fontFamily: 'RobotoSlab-SemiBold' }}>Checked Out</Text>

                    <Text style={{ fontSize: 11, fontFamily: 'RobotoSlab-Medium', fontWeight: "500" }}>Status</Text>

                    <Text style={{ fontSize: 14, fontFamily: 'Inter-SemiBold', fontWeight: "600" }}>22/05/23, 5:59pm</Text>


                    <Text style={{ fontSize: 11, fontFamily: 'RobotoSlab-Medium', fontWeight: "500" }}>Departure Time</Text>
                </View>
            </View>

        )
    }


    return (

        <AppScreen >
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>


                <FlatList data={historydata} renderItem={({ item }) => <HistoryItem itemdata={item} />} />



            </View>

        </AppScreen>
    )
}

export default History

const styles = StyleSheet.create({})