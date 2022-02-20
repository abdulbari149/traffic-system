import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bgimage: {
        flex: 1,
        width: null,
        height: null,
    },
    inputIcon: {
        margin: 10
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 35,
        marginTop: 25,
        borderRadius: 20
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 40,
        alignItems: 'center'
    },
    loginHeading: {
        fontFamily: 'Segoe UI',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30
    },
    inputLabel: {
        marginBottom: 4
    },
    inputLabelText: {
        fontSize: 20
    },
    loginButton: {
        margin: 15,
        backgroundColor: '#0038FF',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 20,
        margin: 20
    },
    loginButtonText: {
        fontSize: 15,
        color: 'white'
    },
    ghostButton: {
        marginTop: -15,
        width: '60%',
        alignSelf: 'center'
    },
    ghostButtonText: {
        fontSize: 13,
        color: '#0038FF',
        fontWeight: 'bold'
    },
    loginIntroContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6497F7'
    },
    headerImage: {
        alignSelf: 'center',
        marginBottom: 40
    },
    loginIntroHeaderContainer: {
        backgroundColor: 'white',
        width: '170%',
        height: '60%',
        marginBottom: -150,
        marginTop: 0,
        borderTopLeftRadius: 260,
        borderTopRightRadius: 260,
        paddingTop: 10
    },
    loginIntroHeader: {
        fontFamily: 'Segoe UI',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center'
    },
    loginIntroSubtitle: {
        textAlign: 'center'
    }
})

export default styles;