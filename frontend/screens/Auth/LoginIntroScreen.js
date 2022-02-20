import React from 'react';

import { Image, View, Text, Button } from 'native-base';

import styles from '../../styles/Login.styles';

const LoginIntroScreen = ({ navigation }) => {
    return (
        <View style={styles.loginIntroContainer}>
            <Image
                source={{ uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643998712/Capture_pvvd6i.png' }}
                alt='Alternative Text'
                size='2xl' style={styles.headerImage}
            />
            <View style={styles.loginIntroHeaderContainer}>
                <Text fontSize='3xl' style={styles.loginIntroHeader}>
                    Hello Warden
                </Text>
                <Text fontSize='lg' style={styles.loginIntroSubtitle}>
                    Some text
                </Text>
                <Button size='sm' shadow='9' style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText} padding='0'>Login</Text>
                </Button>
            </View>
        </View>
    );
}

export default LoginIntroScreen;
