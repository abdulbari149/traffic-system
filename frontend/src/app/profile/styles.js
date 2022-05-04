import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        overflow: 'scroll',
    },
    coverphoto: {
        width: "100%",
        height: 200
    },
    profilepic: {
        height: 130,
        width: 130,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: -60
    },
    username: {
        alignSelf: 'center',
        color: '#0038FF',
        fontWeight: 'bold'
    },
    profileBigCard: {
        backgroundColor: '#367CFF',
        margin: 10,
        padding: 10,
        borderRadius: 10,

    },
    twoCardContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    profileSmallCard: {
        width: '48%', padding: 12, paddingTop: 15, backgroundColor: '#296BFF'
    },
    profileKeys: {
        color: 'white'
    },
    profileValues: {
        color: 'white',
        fontWeight: 'bold'
    },
    profileBigInnerCard: {
        backgroundColor: '#296BFF',
        padding: 12,
        paddingTop: 15,
        borderRadius: 10,
        marginTop: 10
    },
    profileChallanContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    profileChallanCard: {
        width: '48%',
        padding: 15,
        paddingTop: 18,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#296BFF',
        height: 140
    },
    calendarIcon: {
        color: 'white',
        fontSize: 22,
        alignSelf: 'center'
    },
    challanCount: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    challanCountHeading: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
})

export default styles;