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
        borderTopLeftRadius: 40,
        alignItems: 'center',
    },
    loginHeading: {
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        paddingLeft: 5
    },
    scrollView: {
        backgroundColor: 'white', paddingBottom: 'auto'
    },
    loginScreenUpperCard: {
        backgroundColor: '#B21B1B'
    },
    logo: { color: 'white', paddingVertical: 40, fontSize: 30, alignSelf: 'center', fontWeight: 'bold' },
    loginImage: { alignSelf: 'center', marginBottom: -35 },
    forgotPasswordButton: { color: '#444444', backgroundColor: 'white', fontWeight: 'bold', alignSelf: 'flex-end' },
    loginButton: {
        width: 150,
        alignSelf: 'center',
        color: '#B21B1B',
        marginVertical: 14
    },
    notHaveAnAccountBtn: { color: '#444444', backgroundColor: 'white', fontWeight: 'bold', alignSelf: 'center' },
    signUpHeading: { fontSize: 30, color: 'black', fontWeight: 'bold', paddingTop: 30, paddingLeft: 15 },
    alreadyHaveAnAccount: { color: '#444444', fontWeight: 'bold', alignSelf: 'center', marginTop: 10, marginBottom: 20, fontSize: 15 },
    changePasswordHeading: { color: 'black', paddingVertical: 40, fontSize: 25, alignSelf: 'center', fontWeight: 'bold' },
    changePasswordSubtitle: { color: 'black', paddingVertical: 20, fontSize: 18, textAlign: 'center', marginHorizontal: 15 },
    forgotPasswordUpperCard: { backgroundColor: '#B21B1B', paddingTop: 30 },
    forgotPasswordImage: { alignSelf: 'center', height: 170, width: 170 },
    forgotPasswordHeading: { color: 'white', paddingTop: 40, fontSize: 30, alignSelf: 'center', fontWeight: 'bold' },
    forgotPasswordSubTitle: { color: 'white', paddingVertical: 25, fontSize: 18, textAlign: 'center', marginLeft: 30, marginRight: 30, lineHeight: 27 }

})

export default styles;