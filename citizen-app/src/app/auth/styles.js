import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    inputLabel: {
        marginBottom: 5
    },
    inputLabelText: {
        fontSize: 16,
        textTransform: "capitalize",
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    formGroup: {
        width: "100%",
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#EAEAEA",
        borderStyle: "solid",
        marginTop: 30,
        position: "relative",
    },
    formGroupLabel: {
        position: 'absolute',
        top: -22,
        left: 40,
        width: 120,
        height: 40,
        backgroundColor: "#0038FF",
        alignItems: "center",
        justifyContent: "center"
    },
    formGroupLabelText: {
        fontWeight: "medium",
        letterSpacing: "lg",
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
        borderRadius: 12,
    },
    loginContainer: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingHorizontal: 20,
        flex: 1,
    },
    loginHeading: {
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 60,
        paddingLeft: 5
    },
    scrollView: {
        backgroundColor: '#FFFFFF',
        // flex: 1
    },
    loginScreenUpperCard: {
        backgroundColor: '#B21B1B'
    },
    logo: {
        color: 'white',
        paddingVertical: 40,
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    loginImage: {
        alignSelf: 'center',
        marginBottom: -35
    },
    forgotPasswordButton: {
        color: '#B21B1B',
        backgroundColor: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    },
    loginButton: {
        width: 150,
        alignSelf: 'center',
        backgroundColor: '#B21B1B',
        height: 45,
        marginVertical: 18,
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white'
    },
    bottomButton: {
        color: '#444444',
        backgroundColor: 'white',
        fontWeight: 'bold',
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: "center",
        maxWidth: 200,
        marginBottom: 20
    },
    signUpHeading: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 90,
        paddingLeft: 15
    },
    alreadyHaveAnAccount: {
        color: '#444444',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 15
    },
    changePasswordHeading: {
        color: 'black',
        paddingVertical: 40,
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold', 
    },
    changePasswordSubtitle: {
        color: 'black',
        paddingVertical: 20,
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 15
    },
    forgotPasswordUpperCard: {
        backgroundColor: '#B21B1B',
        paddingVertical: 30,
        paddingTop: 50,
        height: 350
    },
    forgotPasswordImage: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        
    },
    forgotPasswordHeading: {
        color: 'white',
        paddingTop: 40,
        fontSize: 24,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    forgotPasswordSubTitle: {
        color: 'white',
        paddingVertical: 20,
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
        lineHeight: 25
    },
    root: {
        flex: 1,
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        width: 60,
        height: 60,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderColor: '#FFFFFF',
        margin: 1
    },
    focusCell: {
        borderColor: '#000',
    },
})

export default styles;