import React from 'react';

import { Text, View, Image } from 'native-base';
import Button from '../components/Button';

const VerificationCodeScreen = ({ heading = 'Some heading' }) => {
    return (<View style={{ backgroundColor: '#B21B1B', flex: 1 }}>
        <View style={{ padding: 20 }}>
            <Image source={require('../assets/images/verification-code-image.png')} alt='verification-code-image' style={{ alignSelf: 'center', marginVertical: 60 }} />
            <Text fontSize='3xl' fontWeight='extrabold' color='white'>{heading}</Text>
            <Text fontSize='18' color='white'>Please enter the 4 digit code sent to co*******16@gmail.com.</Text>
            <Button
                title='Resend Code'
                textDecoration='underline'
            />
            <Button
                title='Confirm'
                variant='outlined'
                style={{
                    width: 200,
                    alignSelf: 'center'

                }}
            />
        </View>
    </View>)
}

export default VerificationCodeScreen