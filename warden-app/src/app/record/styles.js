import { StyleSheet } from "react-native"
export const recordDetailEntryStyles = StyleSheet.create({
  entryContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingLeft: 12,
    marginBottom: 10,

  },
  entryTitle: { color: "#0038FF", fontWeight: "bold" },
  entryValue: {
    color: "#001048",
    fontWeight: "bold",
    flex: 1.5,
    textAlign: "right",
    padding: 0,
  }
})
export const recordTableStyles = StyleSheet.create({
  row: {
    display: "flex",
    gap: 40,
    backgroundColor: "rgba(0, 56, 255, 0.05)",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  rowItem: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
  },
});

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
      padding: 8,
      boxShadow: 10,
      marginTop: -15,
      marginHorizontal: 8,
      height: 'auto',
      backgroundColor: 'white'
  },
  paidLabelContainer: {
    width: 120,
    height: 40,
    backgroundColor: "#f8f8f8",
    position: "absolute",
    top: 30,
    right: 0,
    elevation: 2,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#0038FF",
    borderWidth: 2,
  },
  paidLabelText: {

    textAlign: "center",
    width: "100%",
    fontSize: 14,
    color: "#3030F1"
  }
})

export default styles