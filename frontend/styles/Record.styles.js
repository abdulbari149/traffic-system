import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: 'auto'
    },
    coverphoto: {
        flex: 1,
        width: null,
        height: null,
    },
    profilepic: {
        height: 80,
        width: 80,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 60,
        alignSelf: 'center',
        marginTop: 55
    },
    username: {
        alignSelf: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 20,
        marginTop: 6
    },
    recordDetails: {
        borderRadius: 10,
        padding: 10,
        boxShadow: 10,
        marginTop: -15,
        marginLeft: 10,
        marginRight: 10,
        height: 'auto',
        backgroundColor: 'white'
    }
})

export default styles;