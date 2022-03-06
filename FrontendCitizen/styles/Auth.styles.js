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
        fontFamily: 'Poppins-Light'
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
        fontFamily: 'Segoe UI',
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        paddingLeft: 5
    },
})

export default styles;