import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { MediumFontText } from '../shared/Paragrahp';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';


type GeneralData = {
    id: number;
    icon: string;
    label: string;
    icon_type: string
    link: string


};
// interface GeneralProps {
//     item: GeneralData;

// }




const Stack = createNativeStackNavigator<RootStackParamList>();
const General = ({ item }: { item: GeneralData, }) => {
    // const navigation = useNavigation()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const navigateToPersonalInfo = () => {

        navigation.navigate(item.link);
    };


    return (
        <TouchableOpacity
            onPress={navigateToPersonalInfo}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {item.icon == 'user' && <AntDesign name="user" size={24} color="black" />}
                {item.icon == 'notifications-outline' && <Ionicons name="notifications-outline" size={24} color="black" />}
                {item.icon == 'setting' && <AntDesign name="setting" size={24} color="black" />}

                {item?.icon === "logout-outline" && <Ionicons name="log-out-outline" size={24} color="black" />}
                <MediumFontText data={item?.label} textstyle={{ fontSize: 17, fontWeight: '500' }} />
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default General