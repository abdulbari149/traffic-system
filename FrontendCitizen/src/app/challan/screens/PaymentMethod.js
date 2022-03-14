import React from 'react';

import { ScrollView, Image, Text } from 'native-base';
import Button from '../../../components/Button';

const PaymentMethod = () => {
    return (<ScrollView style={{ backgroundColor: '#B21B1B' }}>
        <Image source={require('../../../assets/images/payment.png')} alt="payment" style={{ marginTop: 70, marginBottom: 10 }} />
        <Text fontSize='3xl' color="white" textAlign="center" fontWeight="bold">Payment Method</Text>
        <Text color="white" textAlign="center" fontSize={16} style={{ paddingHorizontal: 50, paddingTop: 15 }}>Please enter your email address to receive the verification code</Text>
        <Button
            title="Pay with easypaisa"
            variant="outlined"
            style={{
                btn: {
                    width: 250,
                    alignSelf: 'center'
                }
            }}
        />
    </ScrollView>)
}

export default PaymentMethod