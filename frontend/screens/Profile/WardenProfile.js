import React from 'react';

import { View, Text, Image, ScrollView } from 'native-base';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../../styles/Profile.styles';

const WardenProfile = () => {

    const profilephoto = {
        uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1644959241/Untitled_design__1_-removebg-preview_ljbiwv.png'
    }

    const coverphoto = {
        uri: 'https://res.cloudinary.com/saadfarhan/image/upload/v1644958504/sea_hqy35u.png'
    }

    return (
        <ScrollView _contentContainerStyle={styles.scrollView}>
            <Image source={coverphoto} alt='sea' style={styles.coverphoto} />
            <Image source={profilephoto} alt='hooman' style={styles.profilepic} />
            <Text fontSize='3xl' style={styles.username}>Abdul Bari</Text>
            <View style={styles.profileBigCard}>
                <View style={styles.twoCardContainer}>
                    <View style={{ ...styles.profileSmallCard, marginRight: 10 }}>
                        <Text style={styles.profileKeys}>Badge</Text>
                        <Text fontSize='4xl' style={styles.profileValues}>17th</Text>
                    </View>
                    <View style={styles.profileSmallCard}>
                        <Text style={styles.profileKeys}>Id</Text>
                        <Text fontSize='4xl' style={styles.profileValues}>09253</Text>
                    </View>
                </View>
                <View style={styles.profileBigInnerCard}>
                    <Text style={styles.profileKeys}>Name</Text>
                    <Text fontSize='4xl' style={styles.profileValues}>Abdul Bari</Text>
                </View>
            </View>
            <View style={styles.profileChallanContainer}>
                <View style={{ ...styles.profileChallanCard, marginRight: 10 }}>
                    {/* <Icon name='calender' style={styles.calendarIcon} /> */}
                    <Text fontSize='3xl' style={styles.challanCount}>24</Text>
                    <Text style={styles.challanCountHeading}>Yearly Challan Count</Text>
                </View>
                <View style={styles.profileChallanCard}>
                    <Icon name='calendar' style={styles.calendarIcon} />
                    <Text fontSize='3xl' style={styles.challanCount}>24</Text>
                    <Text style={styles.challanCountHeading}>Yearly Challan Count</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default WardenProfile
