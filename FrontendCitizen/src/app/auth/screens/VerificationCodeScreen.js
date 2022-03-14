import React, { useState } from 'react';

import { Text, View, Image, Button as NBButton } from 'native-base';

import Button from '../../../components/Button';

import VerificationCodeInput from '../../../components/VerificationCodeInput';

import { CREATE_NEW_PASSWORD } from '../../../routes';

const VerificationCodeScreen = ({ heading = 'Some heading', navigation }) => {

    const [value, setValue] = useState('');

    return (<View backgroundColor='#B21B1B' flex={1}>
        <View padding={5}>
            <Image source={require('../../../assets/images/verification-code-image.png')} alt='verification-code-image' style={{ alignSelf: 'center', marginVertical: 60 }} />
            <Text fontSize='3xl' fontWeight='extrabold' color='white'>{heading}</Text>
            <Text fontSize='18' color='white'>Please enter the 4 digit code sent to co*******16@gmail.com.</Text>
            <VerificationCodeInput value={value} setValue={setValue} />
            <NBButton style={{ backgroundColor: 'transparent' }}>
                <Text style={{ color: 'white', textDecorationLine: 'underline', fontSize: 16, fontWeight: 'bold', paddingTop: 20 }}>Resend Code</Text>
            </NBButton>
            <Button
                title='Confirm'
                variant='outlined'
                style={{
                    btn: {
                        width: 200,
                        alignSelf: 'center',
                    }
                }}
                onPress={() => {
                    navigation.navigate(CREATE_NEW_PASSWORD)
                }}
            />
        </View>
    </View>)
}

export default VerificationCodeScreen