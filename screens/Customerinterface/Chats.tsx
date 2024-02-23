import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { MediumFontText, RegularFontText } from '../../components/shared/Paragrahp';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


interface Message {
    id: number;
    text?: string; // Text content (optional)
    image?: string; // Image URL (optional)
    sender: string;
}

const Chats: React.FC = () => {

    const route = useRoute();
    const { item } = route.params as { item: any };

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello, how are you?",
            sender: "User2",
        },
        {
            id: 2,
            image: "https://prod-media.beinsports.com/image/1699134009745_8beaa0e5-ac0b-4663-b620-658912531c03.jpg", sender: 'User2',
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

    const [newMessage, setNewMessage] = useState<string>('');

    const onSendMessage = () => {
        if (newMessage.trim() !== '') {
            const message: Message = {
                id: messages.length + 1,
                text: newMessage,
                sender: 'User1', // You can replace this with the sender's username
            };
            setMessages([...messages, message]);
            setNewMessage('');
        }
    };

    const onSendImage = (imageURL: string) => {
        const message: Message = {
            id: messages.length + 1,
            image: imageURL,
            sender: 'User1', // You can replace this with the sender's username
        };
        setMessages([...messages, message]);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Choose the behavior based on the platform
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100} // Adjust the offset if needed
        >

            <View style={{ flex: 1 }}>



                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={{ width: 68, height: 68, borderRadius: 50 }} />

                    <View>

                        <MediumFontText data="John Doe" textstyle={{ fontSize: 18, fontWeight: '500' }} />

                    </View>
                </View>


                <FlatList
                    data={messages}
                    keyExtractor={(message) => message.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ alignSelf: item.sender === 'User1' ? 'flex-end' : 'flex-start' }}>
                            {item.text && (
                                <Text
                                    style={{
                                        padding: 10,
                                        margin: 5,
                                        backgroundColor: item.sender === 'User1' ? '#B9B9B94D' : '#F3FFF3',
                                        borderRadius: 10,
                                        color: 'black',
                                    }}
                                >
                                    {item.text}
                                </Text>
                            )}
                            {item.image && (
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 200, height: 200, margin: 5, borderRadius: 10 }}
                                />
                            )}
                        </View>
                    )}
                />


                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: "#FBFBFD", gap: 10 }}>



                    <Image
                        source={require('../../assets/images/gallery.png')}
                        style={{ width: 24, height: 24 }}
                    />
                    <TextInput
                        style={{ flex: 1, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10, backgroundColor: "#F6F8FA" }}
                        value={newMessage}
                        onChangeText={(text) => setNewMessage(text)}
                        placeholder="Type a message..."
                    />
                    <TouchableOpacity onPress={onSendMessage}>

                        <FontAwesome name="microphone" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSendImage('https://example.com/image.jpg')}>
                        <FontAwesome name="send-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>

            </View>

        </KeyboardAvoidingView>

    );
};

export default Chats;
