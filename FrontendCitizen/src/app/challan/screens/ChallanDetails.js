import React from 'react';

import { ScrollView, Text, View } from 'native-base';

import ChallanDetailAccordian from '../components/ChallanDetailAccordian';

const ChallanDetails = () => {
    return (<ScrollView style={{ paddingTop: 80, paddingHorizontal: 15, backgroundColor: 'white' }}>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
                <Text fontWeight="bold" fontSize={24}>Challan Details</Text>
            </View>
            <View>
                <Text fontSize={24} fontWeight="bold">2,000 Rs.</Text>
                <Text style={{ backgroundColor: '#FBAAAA', width: 40, padding: 2, textAlign: 'center', alignSelf: 'flex-end', color: '#0C0C0C' }}>Fine</Text>
            </View>
        </View>
        <ChallanDetailAccordian />
    </ScrollView>)
}

export default ChallanDetails