import React from 'react';

import { View, Text, ScrollView, Image } from 'native-base';
import styles from '../../styles/Record.styles'
import { ImageBackground } from 'react-native';
import RecordDetailEntry from '../../components/RecordDetailEntry';

const RecordDetails = () => {

    const record = [
        { title: 'Vehicle No', value: 'BJ5-692' },
        { title: 'Challan No', value: '09' },
        { title: 'Violation Type', value: 'Moving' },
        { title: 'Violation', value: 'Driving at night without proper lights' },
        { title: 'Location', value: 'I.I Chandighar Road, Karachi.' },
        { title: 'Date', value: '29 August 2021' },
        { title: 'Time', value: '9:45 pm' },
    ]

    const profilephoto = {
        uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1644959241/Untitled_design__1_-removebg-preview_ljbiwv.png'
    }

    const coverphoto = {
        uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1643909305/loginBg_rcsqrv.png'
    }

    return (
        <ScrollView _contentContainerStyle={styles.scrollView}>
            <ImageBackground source={coverphoto}>
                <Image source={profilephoto} alt='hooman' style={styles.profilepic} />
                <Text style={styles.username}>Abdul Bari</Text>
            </ImageBackground>
            <View style={styles.recordDetails}>
                {record.map((item, idx) => <RecordDetailEntry item={item} key={idx} />)}
            </View>
        </ScrollView>
    )
}

export default RecordDetails
