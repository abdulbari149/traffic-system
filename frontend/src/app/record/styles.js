import { StyleSheet } from "react-native"
export const recordDetailEntryStyles = StyleSheet.create({
  entryContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    margin: 5,
  },
  entryTitle: { color: "#0038FF", padding: 20 },
  entryValue: {
    color: "#001048",
    fontWeight: "bold",
    width: "60%",
    textAlign: "right",
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
      padding: 10,
      boxShadow: 10,
      marginTop: -15,
      marginLeft: 10,
      marginRight: 10,
      height: 'auto',
      backgroundColor: 'white'
  }
})

export default styles