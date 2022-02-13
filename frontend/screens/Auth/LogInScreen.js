import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, FormControl, Stack, Input, Image, WarningOutlineIcon, Button } from 'native-base';

const LogInScreen = ({ navigation }) => {

    const imagebg = { uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png' }

    return (<ImageBackground source={imagebg} style={{
        flex: 1,
        width: null,
        height: null,
    }}>
        <Image source={{
            uri: "https://res.cloudinary.com/saadfarhan/image/upload/v1643998001/317501_l0lfzi.jpg"
        }} alt="Alternate Text" size="xl" style={{ alignSelf: 'center', marginBottom: 35, marginTop: 25, borderRadius: 20 }} />
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 40, alignItems: 'center' }
        }>
            <Text fontSize="3xl" style={{ fontFamily: 'Segoe UI', color: '#000000', fontWeight: "bold", marginBottom: 20, marginTop: 30 }}>Login</Text>
            <FormControl>
                <Stack mx="4">
                    <FormControl.Label style={{ marginBottom: 4 }}><Text style={{ fontSize: 20 }}>Warden's Id</Text></FormControl.Label>
                    <Input type="number" placeholder="Enter your Id" backgroundColor='#F2F5FF' borderRadius={20} paddingLeft={5} outline={null} marginBottom={5} color='#000000' />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please enter the missed field..
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>
            <FormControl>
                <Stack mx="4">
                    <FormControl.Label style={{ marginBottom: 4 }}><Text style={{ fontSize: 20 }}>Password</Text></FormControl.Label>
                    <Input type="password" placeholder="Enter your password" backgroundColor='#F2F5FF' borderRadius={20} paddingLeft={5} outline={null} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Please enter the missed field..
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>
            <Button size="sm" shadow='9' style={{ margin: 15, backgroundColor: '#0038FF', width: '50%', alignSelf: 'center', borderRadius: 20, margin: 20 }} onPress={() => navigation.navigate('Warden Profile')}>
                <Text style={{ fontSize: 20, color: 'white' }} padding="0">Login</Text>
            </Button>
            <Button size="sm" variant="ghost" style={{ marginTop: -15, width: '60%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 15, color: '#0038FF', fontWeight: 'bold' }} padding="0">Forgot password?</Text>
            </Button>
        </View>
    </ImageBackground>);
}

export default LogInScreen;
