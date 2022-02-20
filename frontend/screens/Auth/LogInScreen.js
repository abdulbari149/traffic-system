import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, FormControl, Stack, Input, Image, WarningOutlineIcon, Button } from 'native-base';
import styles from '../../styles/Login.styles';
import Icon from 'react-native-vector-icons/Feather';



const LogInScreen = ({ navigation }) => {

    const imagebg = { uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png' }

    const [passwordVisible, isPasswordVisible] = React.useState(false);

    return (<ImageBackground source={imagebg} style={styles.bgimage}>
        <Image source={{
            uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643998001/317501_l0lfzi.jpg'
        }} alt='Alternate Text' size='xl' style={styles.logo} />
        <View style={styles.loginContainer}>
            <Text fontSize='3xl' style={styles.loginHeading}>Login</Text>
            <FormControl>
                <Stack mx='4'>
                    <FormControl.Label style={styles.inputLabel}><Text style={styles.inputLabelText}>Warden's Id</Text></FormControl.Label>
                    <Input type='number' placeholder='Enter your Id' backgroundColor='#F2F5FF' borderRadius={20} paddingLeft={5} outline={null} marginBottom={5} color='#000000' />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
                        Please enter the missed field..
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>
            <FormControl>
                <Stack mx='4'>
                    <FormControl.Label style={styles.inputLabel}><Text style={styles.inputLabelText}>Password</Text></FormControl.Label>
                    <Input type={passwordVisible ? 'text' : 'password'} InputRightElement={<Icon name={passwordVisible ? "eye-off" : "eye"} size={20} color="#0038FF" onPress={() => isPasswordVisible(!passwordVisible)} style={styles.inputIcon} />} placeholder='Enter your password' backgroundColor='#F2F5FF' borderRadius={20} paddingLeft={5} outline={null} />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
                        Please enter the missed field..
                    </FormControl.ErrorMessage>
                </Stack>
                <Button size='sm' shadow='9' style={styles.loginButton} onPress={() => navigation.navigate('Record Details')}>
                    <Text style={styles.loginButtonText} padding='0'>Login</Text>
                </Button>
                <Button size='sm' variant='ghost' style={styles.ghostButton}>
                    <Text style={styles.ghostButtonText} padding='0'>Forgot password?</Text>
                </Button>
            </FormControl>
        </View>
    </ImageBackground>);
}

export default LogInScreen;
