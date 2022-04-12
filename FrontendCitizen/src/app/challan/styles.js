import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    challanCard: {
        maxWidth: '100%',
        height: 160,
        borderRadius: 6,
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 15,
        elevation: 5,
        marginBottom: 14
    },
    challanContainer: {
        padding: 15,
    },
    challanDetailText: {
        textDecorationLine: "underline",
        color: "#000",
        fontSize: 16,
        padding: 0,
      }
})

export default styles;