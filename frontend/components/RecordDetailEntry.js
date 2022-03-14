import React from 'react';

import { View, Text } from 'native-base';

const RecordDetailEntry = ({ item }) => {
    return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#F8F8F8', borderRadius: 10, margin: 5 }}>
            <Text style={{ color: '#0038FF', padding: 20 }}>{item.title}</Text>
            <Text style={{ color: '#001048', fontWeight: 'bold', width: '60%', textAlign: 'right', padding: item.title === 'Violation' ? 10 : 20, paddingRight: item.value === 'Moving' ? 36 : 15 }}>{item.value}</Text>
        </View>
    )
}

export default RecordDetailEntry
