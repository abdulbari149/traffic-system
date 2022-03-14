import React from 'react';

import { Image, Text } from 'native-base';

const ZeroChallan = () => {
    return (<>
        <Image source={require('../../../assets/images/zero-challan.png')} alignSelf='center' height={240} width={330} marginTop={5} />
        <Text fontSize='3xl' alignSelf='center' paddingTop={5}>Zero Challan</Text>
        <Text alignSelf='center' textAlign='center' fontSize={16} style={{ paddingHorizontal: 40 }}>Hey Bari, you didn’t have any challan right now because you follow the traffic rules and that’s great. Keep it up!</Text>
    </>);
}

export default ZeroChallan