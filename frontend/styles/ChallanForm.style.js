import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
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
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    padding: 18,
  },
  heading: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
  },
  textContainer: {
    marginVertical: 30,
  },
  proceedBtn: {
    marginRight: 10,
    fontSize: 16,
    color: "#0038ff",
    fontWeight: "bold",
  },
})

export default styles