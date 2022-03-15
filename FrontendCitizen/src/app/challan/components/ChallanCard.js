import React from 'react';

import { Text, View } from 'native-base';
import styles from '../../../styles/Challan.styles';
import Button from '../../../components/Button';

const ChallanCard = ({ onPayment, onDetailButtonPress }) => {
    return (<View style={styles.challanContainer}>
        <View style={styles.challanCard}>
            <View>
                <Text color='black' fontSize={22} fontWeight="bold">Challan 035</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text fontWeight="bold">Veh. No: </Text>
                    <Text>MD25de334535</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text fontWeight="bold">Date: </Text>
                    <Text>03/12/2022</Text>
                </View>
                <Button
                    title="Pay"
                    onPress={onPayment}
                />
            </View>
            <View>
                <Text color='black' marginRight={6} fontSize={22} fontWeight="bold" textAlign="right">Rs. 2000</Text>
                <Text textAlign="right" marginRight={6}>Fine</Text>
                <Button
                    title="View More Details"
                    textDecoration='underline'
                    variant="ghost"
                    onPress={onDetailButtonPress}
                    style={{
                        btn: {
                            maxWidth: 'auto'
                        },
                        text: {
                            fontSize: 16,
                            paddingVertical: 18
                        }
                    }}
                />
            </View>
            <View>
            </View>
        </View>
    </View>)
}

export default ChallanCard