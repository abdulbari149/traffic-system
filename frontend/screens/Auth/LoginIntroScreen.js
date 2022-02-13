import React from 'react';
import { Image, View, Text, Button } from 'native-base';
import { ImageBackground } from 'react-native';

const LoginIntroScreen = ({ navigation }) => {

    const imagebg = {
        uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1644389724/Untitled_design_qtbh2a.png',
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#6497F7' }} >
            <Image
                source={{ uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png' }}
                alt='Alternative Text'
                size='2xl' style={{ alignSelf: 'center', marginBottom: 40 }}
            />
            <View style={{ backgroundColor: 'white', width: '170%', height: '60%', marginBottom: -150, marginTop: 0, borderTopLeftRadius: 260, borderTopRightRadius: 260, paddingTop: 10 }}>
                <Text fontSize="3xl" style={{ fontFamily: 'Segoe UI', color: '#000000', fontWeight: "bold", marginBottom: 10, marginTop: 10, alignSelf: 'center' }}>
                    Hello Warden
                </Text>
                <Text fontSize="lg" style={{
                    textAlign: 'center'
                }}>
                    Some text
                </Text>
                <Button size="sm" shadow='9' style={{ margin: 15, backgroundColor: '#0038FF', width: '40%', alignSelf: 'center', borderRadius: 20, margin: 20 }} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: 20, color: 'white' }} padding="0">Login</Text>
                </Button>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
                    <Button size="sm" shadow='9' style={{
                        backgroundColor: '#0038FF',
                        width: 5,
                        height: 5,
                        borderRadius: 60,
                        margin: 5
                    }} />
                    <Button size="sm" shadow='9' style={{
                        backgroundColor: '#E5E5E5',
                        width: 5,
                        height: 5,
                        borderRadius: 60,
                        margin: 5
                    }} />
                    <Button size="sm" shadow='9' style={{
                        backgroundColor: '#E5E5E5',
                        width: 5,
                        height: 5,
                        borderRadius: 60,
                        margin: 5
                    }} />
                </View>
            </View>
        </View >
    );
}

export default LoginIntroScreen;
