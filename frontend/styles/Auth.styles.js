import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bgimage: {
        flex: 1,
        width: null,
        height: null,
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
        marginBottom: 5
    },
    inputLabelText: {
        fontSize: 16,
        paddingLeft: 10,
        textTransform: "capitalize"
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
        fontSize: 20,
        color: 'white'
    },
    ghostButton: {
        marginTop: -15,
        width: '60%',
        alignSelf: 'center'
    },
    ghostButtonText: {
        fontSize: 15,
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
        marginTop: -30,
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
    },

    signUpContainer: {
        flex: 1,
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#fff",
        paddingHorizontal: 12,
    },

    fieldLabel: {
        textTransform: "capitalize"
    }
})

export default styles;