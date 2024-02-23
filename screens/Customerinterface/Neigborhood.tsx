import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Forminput, Forminput_Icon } from '../../components/shared/InputForm'
import { AntDesign } from '@expo/vector-icons';
import AppScreen from '../../components/shared/AppScreen';
import { centralData } from '../../utils/fakedata';
import { MediumFontText, RegularFontText } from '../../components/shared/Paragrahp';


const Neigborhood = ({ navigation }: { navigation: any }) => {
    const [data, setData] = useState([]);

    const [frequentlyContacted, setFrequentlyContacted] = useState([]);
    const [allDirectory, setAllDirectory] = useState([]);

    const [formData, setFormData] = useState({
        search: '', // Initialize with empty values
    });

    const handleInputChange = (inputName: string, text: string) => {
        setFormData({ ...formData, [inputName]: text });

        // console.log({ formData });

    };

    // const handleSubmit = () => {
    //     // Here you can submit the formData to your server or perform any other actions.
    //     console.log('Form Data:', formData);
    // };


    const handleSubmit = () => {
        // Handle the search and filter the data into frequentlyContacted and allDirectory lists.
        const searchQuery = formData.search.toLowerCase();
        const filteredFrequentlyContacted = data.filter((item: any) =>
            item.name.toLowerCase().includes(searchQuery)
        );
        setFrequentlyContacted(filteredFrequentlyContacted);

        const filteredAllDirectory = data.filter((item: any) =>
            item.name.toLowerCase().includes(searchQuery)
        );
        setAllDirectory(filteredAllDirectory);
    };



    return (
        <AppScreen>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>


                <Forminput_Icon placeholder="Search for user..."

                    containerstyle={{
                        // borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: "#F6F8FAE5",
                        // opacity: 0.4
                        flexDirection: 'row',
                        gap: 10

                    }}

                    textstyle={{
                        fontSize: 16,

                    }}

                    onChangeText={(text) => handleInputChange('search', text)}
                    value={formData.search}
                    icon={<AntDesign name="search1" size={22} color="black" />}

                />



                <View style={{ flex: 1 }}>
                    <FlatList data={centralData} renderItem={({ item }) =>


                        <TouchableOpacity onPress={() => navigation.navigate('Chats', { item })}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 }}>
                                <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={{ width: 68, height: 68, borderRadius: 50 }} />

                                <View>

                                    <MediumFontText data={item.name} textstyle={{ fontSize: 16, fontWeight: '500' }} />
                                    <RegularFontText data="8975464" textstyle={{ fontSize: 14, fontWeight: '400' }} />

                                </View>
                            </View>

                            <View style={{ borderWidth: 1, borderColor: '#CFCDCD', borderRadius: 6, marginTop: 10, }} />

                        </TouchableOpacity>



                    } />
                </View>
            </View>

        </AppScreen>

    )
}

export default Neigborhood