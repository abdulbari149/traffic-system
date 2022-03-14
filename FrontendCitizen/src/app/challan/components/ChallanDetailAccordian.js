import React, { useState } from 'react';

import { Button, Text, View } from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';

const ChallanDetailAccordian = () => {

    const [open, isOpen] = useState(false);

    console.log(open);

    return (<>
        <View style={{
            borderRadius: 60,
            width: '100%',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 15
        }}>
            <Text style={{ fontSize: 14, color: '#444444', fontWeight: 'bold' }}>Offender</Text>
            <Button style={{ backgroundColor: '#F2F2F2', borderRadius: 60, width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onPress={() => isOpen(!open)}
            >
                <Icon name={open ? "up" : "down"} size={12} color='black' />
            </Button>
        </View>
        {open ? <View style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'space-between', flexDirection: 'row' }}>
            <Text fontWeight="bold">Name</Text>
            <Text>Abdul Bari</Text>
        </View> : null}
    </>)
}

export default ChallanDetailAccordian